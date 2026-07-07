"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, SendHorizontal } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/animations";

// 0523514029 → international format for wa.me (UAE +971, drop leading 0).
const NUMBER = "971523514029";
const waUrl = (msg: string) =>
  `https://wa.me/${NUMBER}?text=${encodeURIComponent(msg)}`;

const DEFAULT_MSG =
  "Hi PPK Real Estate, I'd like to know more about your properties.";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.71 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 006.23 1.62h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.636-3.75-9.05A12.72 12.72 0 0016.003 3.2zm0 23.36h-.004a10.6 10.6 0 01-5.4-1.48l-.387-.23-4.01 1.05 1.07-3.91-.252-.4a10.56 10.56 0 01-1.62-5.63c0-5.87 4.78-10.65 10.66-10.65 2.847 0 5.522 1.11 7.534 3.124a10.58 10.58 0 013.12 7.53c0 5.87-4.78 10.65-10.65 10.65zm5.84-7.98c-.32-.16-1.893-.934-2.186-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.573-1.588-.95-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.735-.986-2.375-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.827.763.33 1.36.526 1.824.673.766.244 1.464.21 2.016.127.615-.092 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const send = () => {
    const text = message.trim() || DEFAULT_MSG;
    window.open(waUrl(text), "_blank", "noopener,noreferrer");
    setMessage("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {/* Chat popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
            className="w-[300px] origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-18px_rgba(0,0,0,0.4)] ring-1 ring-black/5 sm:w-[340px]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-[#128C7E] px-4 py-3.5 text-white">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/15">
                <WhatsAppGlyph className="size-6" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-semibold leading-tight">PPK Real Estate</div>
                <div className="flex items-center gap-1.5 text-xs text-white/85">
                  <span className="size-1.5 rounded-full bg-green-300" />
                  Typically replies within minutes
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-white/80 transition-colors hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Body */}
            <div className="bg-[#ece5dd] px-4 py-5">
              <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm leading-relaxed text-[#111b21] shadow-sm">
                <div className="mb-0.5 text-xs font-semibold text-[#128C7E]">
                  PPK Real Estate
                </div>
                Hi 👋 Tell us what you&rsquo;re looking for — buying, selling,
                renting or investing — and we&rsquo;ll reply on WhatsApp.
              </div>
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-black/5 bg-white p-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Type a message"
                aria-label="Message"
                className="min-w-0 flex-1 rounded-full bg-[#f0f2f5] px-4 py-2.5 text-sm text-[#111b21] outline-none placeholder:text-[#667781] focus:ring-2 focus:ring-[#25D366]/30"
              />
              <button
                type="button"
                onClick={send}
                aria-label="Send on WhatsApp"
                data-cursor=""
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#20ba5a]"
              >
                <SendHorizontal className="size-[18px]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Chat with PPK on WhatsApp"}
        aria-expanded={open}
        data-cursor=""
        initial={{ opacity: 0, scale: 0.5, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5, ease: EASE_OUT_EXPO }}
        className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.65)] transition-transform duration-300 hover:scale-105"
      >
        {!open && (
          <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-50 [animation:ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        )}
        {open ? <X className="size-6" /> : <WhatsAppGlyph className="size-7" />}
      </motion.button>
    </div>
  );
}
