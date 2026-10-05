"use client";
import { useId, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Loader2,
  Send,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const { lang } = useLang();
  const tr = t[lang].contact;
  const formId = useId();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const element = event.currentTarget;
    const form = new FormData(element);
    if (String(form.get("botcheck") || "")) return;
    const name = String(form.get("name") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !message) {
      setStatus("error");
      return;
    }
    form.set("name", name);
    form.set("message", message);
    form.set("email", String(form.get("email") || "").trim());
    form.set("access_key", "75650892-05e1-4e7b-802d-796b232c1420");
    form.set("subject", `Portfolio — ${name}`);
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      element.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      className="section-shell section-space contact-section"
    >
      <Reveal>
        <div className="eyebrow">
          <span>{tr.number}</span>
          <span className="eyebrow-rule" />
          {tr.eyebrow}
        </div>
      </Reveal>
      <div className="profile-grid">
        <Reveal>
          <h2 className="profile-heading">{tr.heading}</h2>
          <p className="profile-bio">{tr.bio}</p>
          <a href="/mathias-vasquez-cv.pdf" className="text-link" download>
            <Download size={17} aria-hidden="true" />
            {tr.cv}
          </a>
        </Reveal>
        <Reveal delay={0.1} className="education-block">
          <span className="eyebrow">{tr.education}</span>
          <h3>{tr.degree}</h3>
          <p>{tr.university}</p>
          <span className="mono education-date">{tr.dates}</span>
          <div className="courses">
            <span className="eyebrow">{tr.certificates}</span>
            <ul>
              {tr.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <Reveal className="contact-panel">
        <div className="contact-heading">
          <div>
            <span className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              {tr.availability}
            </span>
            <h2>{tr.title}</h2>
            <p>{tr.subtitle}</p>
          </div>
          <ArrowUpRight
            size={54}
            strokeWidth={1}
            className="contact-arrow"
            aria-hidden="true"
          />
        </div>
        <a className="contact-email" href="mailto:mathiwen519@gmail.com">
          mathiwen519@gmail.com
          <ArrowUpRight size={24} aria-hidden="true" />
        </a>
        <div className="contact-socials">
          <a
            href="https://www.linkedin.com/in/mathias-vasquez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Mathifa59"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
        <details className="contact-form-details">
          <summary>
            {tr.form}
            <ChevronDown size={17} aria-hidden="true" />
          </summary>
          <form
            onSubmit={submit}
            className="contact-form"
            aria-busy={status === "sending"}
          >
            <div className="honeypot" aria-hidden="true">
              <label htmlFor={`${formId}-bot`}>Leave empty</label>
              <input
                id={`${formId}-bot`}
                name="botcheck"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="form-row">
              <label htmlFor={`${formId}-name`}>
                {tr.name}
                <input
                  id={`${formId}-name`}
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                />
              </label>
              <label htmlFor={`${formId}-email`}>
                {tr.email}
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                />
              </label>
            </div>
            <label htmlFor={`${formId}-message`}>
              {tr.message}
              <textarea
                id={`${formId}-message`}
                name="message"
                required
                rows={4}
                maxLength={5000}
                placeholder={tr.placeholder}
              />
            </label>
            <div className="form-bottom">
              <button
                className="button button-primary"
                disabled={status === "sending"}
                type="submit"
              >
                {status === "sending" ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                      aria-hidden="true"
                    />
                    {tr.sending}
                  </>
                ) : (
                  <>
                    {tr.submit}
                    <Send size={15} aria-hidden="true" />
                  </>
                )}
              </button>
              <p
                className={`form-feedback ${status}`}
                role="status"
                aria-live="polite"
              >
                {status === "success"
                  ? tr.success
                  : status === "error"
                    ? tr.error
                    : ""}
              </p>
            </div>
          </form>
        </details>
      </Reveal>
    </section>
  );
}
