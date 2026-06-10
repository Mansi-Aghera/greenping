import bulkCampaigns from "../assests/transformations/bulk-campaigns.png";
import aiChatbot from "../assests/transformations/ai-chatbot.png";
import analytics from "../assests/transformations/analytics.png";
import automation from "../assests/transformations/automation.png";
import crm from "../assests/transformations/crm.png";
import broadcast from "../assests/transformations/broadcast.png";

import type { StaticImageData } from "next/image";

export interface TransformationItem {
  before: string;
  after: string;
  image: StaticImageData;
  label: string;
  accent: string; // tailwind gradient stop color
}

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    before: "Messages get blocked while sending bulk campaigns",
    after: "Send 100K+ campaigns using official WhatsApp API",
    image: bulkCampaigns,
    label: "Bulk Campaigns",
    accent: "from-emerald-500 to-green-400",
  },
  {
    before: "Manual customer replies consume time",
    after: "AI chatbots and auto replies handle conversations",
    image: aiChatbot,
    label: "AI Chatbot",
    accent: "from-teal-500 to-emerald-400",
  },
  {
    before: "No delivery or read tracking",
    after: "Real-time analytics and campaign reports",
    image: analytics,
    label: "Analytics",
    accent: "from-green-500 to-lime-400",
  },
  {
    before: "Missed leads and follow-ups",
    after: "Automated workflows and reminders",
    image: automation,
    label: "Automation",
    accent: "from-emerald-600 to-teal-400",
  },
  {
    before: "No CRM integration",
    after: "Manage all leads from a unified dashboard",
    image: crm,
    label: "CRM Dashboard",
    accent: "from-green-600 to-emerald-400",
  },
  {
    before: "Limited broadcast capabilities",
    after: "Unlimited scalable campaign management",
    image: broadcast,
    label: "Broadcast",
    accent: "from-teal-600 to-green-400",
  },
];