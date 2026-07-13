import { careerApplicationEmail, contactDepartments } from "./data";

export type FormType = "career" | "contact" | "enquiry";

export interface FormSubmissionResult {
  ok: boolean;
  message: string;
  targetEmails: string[];
}

export function getFormTargetEmails(formType: FormType): string[] {
  switch (formType) {
    case "career":
      return [careerApplicationEmail];
    case "contact":
    case "enquiry":
      return contactDepartments.find((d) => d.label === "Inquiry & Sales")?.emails ?? [
        "inquiry1@adkeng.com",
      ];
    default:
      return ["inquiry1@adkeng.com"];
  }
}

// TODO: wire Resend/SMTP when credentials provided — call sendEmail(payload, targetEmails)

export async function submitFormStub(
  formType: FormType,
  payload: Record<string, unknown>
): Promise<FormSubmissionResult> {
  const targetEmails = getFormTargetEmails(formType);
  console.log(`[FORM_STUB:${formType}]`, { targetEmails, payload });
  return {
    ok: true,
    message: "Submission received. Our team will respond shortly.",
    targetEmails,
  };
}
