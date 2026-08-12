import { portfolioData } from "@/data/portfolioData";
import type { ContactValues } from "./validation";

export function isEmailConfigured(): boolean {
  const { serviceId, templateId, publicKey } = portfolioData.contact;
  return Boolean(serviceId && templateId && publicKey);
}

export async function sendContactEmail(values: ContactValues): Promise<void> {
  if (!isEmailConfigured()) {
    throw new Error(
      "The contact form isn't configured yet. Please reach out via LinkedIn or GitHub.",
    );
  }

  const { serviceId, templateId, publicKey } = portfolioData.contact;
  const emailjs = await import("@emailjs/browser");

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: values.name,
      reply_to: values.email,
      subject: values.subject,
      message: values.message,
    },
    { publicKey },
  );
}
