import { useState } from "react";
import { Download, Loader2, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactButton } from "@/components/ui/ContactButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { sendContactEmail } from "@/utils/emailService";
import { trimValues, validateContact, type ContactErrors, type ContactValues } from "@/utils/validation";

const empty: ContactValues = { name: "", email: "", subject: "", message: "" };

const fields = [
  { name: "name", label: "Full Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
] as const;

export function ContactSection() {
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const inputClass =
    "w-full rounded-xl border border-foreground/15 bg-foreground/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-accent-violet focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/50";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    setFeedback("");
    try {
      await sendContactEmail(trimValues(values));
      setValues(empty);
      setStatus("success");
      setFeedback("Thanks for reaching out — your message has been sent.");
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error
          ? err.message
          : "Something went wrong while sending. Please try again later.",
      );
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-30 bg-background px-5 pb-24 pt-10 sm:px-8 sm:pb-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionHeading id="contact-heading">CONTACT</SectionHeading>
        </FadeIn>

        <div className="mt-12 grid gap-12 sm:mt-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
          <FadeIn>
            <p className="max-w-md text-base leading-relaxed text-foreground/65 sm:text-lg">
              Open to internships, junior backend and full stack roles, and collaboration on
              Java, Spring Boot or AI-integrated projects. Send a message and I&apos;ll get back
              to you.
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
            <div className="mt-8">
              <ContactButton href={portfolioData.resumePath} download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </ContactButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              {fields.map((f) => (
                <div key={f.name}>
                  <label
                    htmlFor={f.name}
                    className="mb-2 block text-[0.66rem] uppercase tracking-[0.22em] text-foreground/55"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required
                    aria-invalid={Boolean(errors[f.name])}
                    aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                    value={values[f.name]}
                    onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                    className={inputClass}
                  />
                  {errors[f.name] && (
                    <p id={`${f.name}-error`} className="mt-2 text-xs text-red-400">
                      {errors[f.name]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[0.66rem] uppercase tracking-[0.22em] text-foreground/55"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  className={`${inputClass} resize-y`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <ContactButton type="submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="h-4 w-4" aria-hidden="true" />
                )}
                {status === "sending" ? "Sending" : "Send Message"}
              </ContactButton>

              <p
                role="status"
                aria-live="polite"
                className={`min-h-5 text-sm ${
                  status === "error" ? "text-red-400" : "text-emerald-400"
                }`}
              >
                {feedback}
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
