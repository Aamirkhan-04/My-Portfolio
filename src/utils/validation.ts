export interface ContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function trimValues(values: ContactValues): ContactValues {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
  };
}

export function validateContact(values: ContactValues): ContactErrors {
  const v = trimValues(values);
  const errors: ContactErrors = {};

  if (!v.name) errors.name = "Please enter your full name.";
  else if (v.name.length > 100) errors.name = "Name must be under 100 characters.";

  if (!v.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(v.email)) errors.email = "Please enter a valid email address.";
  else if (v.email.length > 255) errors.email = "Email must be under 255 characters.";

  if (!v.subject) errors.subject = "Please enter a subject.";
  else if (v.subject.length > 150) errors.subject = "Subject must be under 150 characters.";

  if (!v.message) errors.message = "Please enter a message.";
  else if (v.message.length > 2000) errors.message = "Message must be under 2000 characters.";

  return errors;
}
