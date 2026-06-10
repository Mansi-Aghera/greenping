import { Metadata } from "next";
import Register from "@/src/view/Register";

export const metadata: Metadata = {
  title: "Register",
  description: "Create your GreenPing Solutions account and get started with a free 14-day trial for WhatsApp marketing and automation.",
};

export default function Page() {
  return <Register />;
}
