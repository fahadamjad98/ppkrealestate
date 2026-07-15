"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/animations";

const FIELD =
  "w-full rounded-xl border border-[color:var(--color-border)] bg-white px-4 py-3 text-cream-50 shadow-[var(--shadow-sm)] outline-none transition-colors placeholder:text-muted focus:border-gold-400 focus:ring-2 focus:ring-gold-400/25";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mbdnrekn");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-[var(--radius-xl)] border border-[color:var(--color-border)] bg-white p-10 text-center shadow-[var(--shadow-md)]"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-gold-400 text-cream-50">
          <Check className="size-7" strokeWidth={2.5} />
        </span>
        <h3 className="text-heading-3 text-cream-50">Thank you — message received</h3>
        <p className="text-body">
          Paaria and the PPK desk will get back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl text-left"
      noValidate
    >
      {/* Custom email subject + spam honeypot */}
      <input
        type="hidden"
        name="_subject"
        value="New enquiry from the PPK Real Estate website"
      />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Full name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Full name"
            required
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Phone (optional)"
            className={FIELD}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email address"
          required
          className={FIELD}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1.5 text-small text-[#c0392b]"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="What are you looking for — buying, selling, renting or investing?"
          required
          className={`${FIELD} resize-none`}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1.5 text-small text-[#c0392b]"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        data-cursor=""
        className="group mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-8 font-medium text-cream-50 shadow-[0_10px_40px_-12px_rgba(227,167,11,0.5)] transition-[background-color,transform] duration-300 hover:bg-gold-300 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {state.submitting ? "Sending…" : "Send message"}
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
