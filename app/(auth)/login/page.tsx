import { Metadata } from "next";
import Login from "@/src/view/Login";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your GreenPing Solutions account to manage your WhatsApp campaigns, automate workflows, and grow your business.",
};

export default function Page() {
  return <Login />;
}
