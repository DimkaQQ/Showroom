"use client";

import { useRef, useState } from "react";
import { siteConfig } from "@/lib/data";
import { pathFor, type Lang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

type State = "idle" | "sending" | "ok" | "invalid" | "fail";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm({ lang }: { lang: Lang }) {
  const f = translations[lang].contact.form;
  const [state, setState] = useState<State>("idle");
  const [bad, setBad] = useState<string[]>([]);
  const opened = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const body = {
      name: String(d.get("name") ?? "").trim(),
      email: String(d.get("email") ?? "").trim(),
      topic: String(d.get("topic") ?? ""),
      message: String(d.get("message") ?? "").trim(),
      website: String(d.get("website") ?? ""),
      lang,
      page: location.pathname,
      took: Date.now() - opened.current,
    };
    const invalid = [
      body.name.length < 2 && "name",
      !EMAIL.test(body.email) && "email",
      body.message.length < 10 && "message",
    ].filter(Boolean) as string[];
    setBad(invalid);
    if (invalid.length) return setState("invalid");

    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("ok");
    } catch {
      setState("fail");
    }
  }

  const status =
    state === "ok" ? f.ok : state === "invalid" ? f.invalid : state === "fail" ? f.fail : "";

  return (
    <form className="cform reveal" onSubmit={onSubmit} noValidate>
      <label>
        <span>{f.name}</span>
        <input name="name" type="text" autoComplete="name" required aria-invalid={bad.includes("name")} />
      </label>
      <label>
        <span>{f.email}</span>
        <input name="email" type="email" autoComplete="email" inputMode="email" required aria-invalid={bad.includes("email")} />
      </label>
      <label>
        <span>{f.topic}</span>
        <select name="topic" defaultValue={f.topics[0]}>
          {f.topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label>
        <span>{f.message}</span>
        <textarea name="message" rows={5} required aria-invalid={bad.includes("message")} />
      </label>
      <div className="hp" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button className="btn btn-dark" type="submit" disabled={state === "sending"}>
        {state === "sending" ? f.sending : f.send}
      </button>
      <p className="cform-note">
        {f.consent} <a href={`${pathFor(lang)}privacy/`}>{f.privacy}</a>
      </p>
      <p className="cform-status" role="status" aria-live="polite">
        {status}
        {state === "fail" && (
          <>
            {" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </>
        )}
      </p>
    </form>
  );
}
