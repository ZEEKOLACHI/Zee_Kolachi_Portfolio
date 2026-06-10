"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { identity } from "@/content/site";
import {
  answer,
  getGreeting,
  suggestedQuestions,
} from "@/lib/assistant";
import { SparkIcon, CloseIcon, SendIcon, ArrowUpRight } from "@/lib/icons";

interface Msg {
  from: "bot" | "user";
  text: string;
  jumpTo?: { label: string; href: string };
}

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Seed greeting on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      // Seeding the greeting in response to `open` is intentional, not a render-derived value.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMessages([{ from: "bot", text: getGreeting() }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text) return;

    const userMsg: Msg = { from: "user", text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setTyping(true);

    // Scripted matcher provides an accurate section-jump regardless of source.
    const scripted = answer(text);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: nextMessages
            .slice(0, -1)
            .map((m) => ({ from: m.from, text: m.text })),
        }),
      });
      const data = await res.json();
      const replyText =
        !data?.fallback && typeof data?.text === "string" && data.text.trim()
          ? data.text
          : scripted.text;
      setMessages((m) => [
        ...m,
        { from: "bot", text: replyText, jumpTo: scripted.jumpTo },
      ]);
    } catch {
      // Network failure → graceful scripted fallback.
      setMessages((m) => [
        ...m,
        { from: "bot", text: scripted.text, jumpTo: scripted.jumpTo },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const jump = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open AI assistant"}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric to-neon text-void shadow-lg shadow-electric/30 transition-transform hover:scale-105"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <CloseIcon width={22} height={22} />
            </motion.span>
          ) : (
            <motion.span
              key="spark"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <SparkIcon width={22} height={22} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-void bg-neon live-dot" />
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label="ZEEKOLACHI assistant"
            className="glass-strong fixed bottom-24 right-5 z-50 flex h-[28rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-edge/60 bg-void/40 p-4">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-neon text-void">
                <SparkIcon width={18} height={18} />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink">
                  {identity.brand} Assistant
                </p>
                <p className="flex items-center gap-1.5 text-xs text-neon-soft">
                  <span className="live-dot h-1.5 w-1.5 rounded-full bg-neon" />
                  Online · ask me anything
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-md bg-electric text-white"
                        : "rounded-bl-md border border-edge bg-panel/60 text-ink-dim"
                    }`}
                  >
                    {m.text}
                    {m.jumpTo && (
                      <button
                        type="button"
                        onClick={() => jump(m.jumpTo!.href)}
                        className="mt-2 flex items-center gap-1 text-xs font-medium text-electric-soft hover:underline"
                      >
                        {m.jumpTo.label}
                        <ArrowUpRight width={13} height={13} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-md border border-edge bg-panel/60 px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-ink-faint"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions (only before user asks) */}
              {messages.length <= 1 && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="rounded-full border border-edge bg-white/[0.03] px-3 py-1.5 text-xs text-ink-dim transition-colors hover:border-electric/50 hover:text-electric-soft"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-edge/60 bg-void/40 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Zeeshan…"
                aria-label="Message the assistant"
                className="flex-1 rounded-xl border border-edge bg-panel/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-electric/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send"
                disabled={!input.trim()}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-electric text-white transition-opacity disabled:opacity-40"
              >
                <SendIcon width={17} height={17} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
