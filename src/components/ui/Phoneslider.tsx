"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  BookOpen, Bot, Megaphone,
  Wrench, CircleCheck, ChevronLeft, ChevronRight,
  Home, Users, MessageCircle, BarChart2, User,
  Wifi, BatteryMedium, Settings, MoreHorizontal,

} from "lucide-react";



// ─── Types ─────────────────────────────────────────────────────────────────────
type Screen = 0 | 1 | 2;


// ─── Shared atoms ─────────────────────────────────────────────────────────────


function StatusBar({ time }: { time: string }) {
  return (
    <div className="flex justify-between items-center px-4 py-1 text-[9px] font-semibold text-green-300">
      <span>{time}</span>
      <div className="flex items-center gap-1">
        <Wifi className="w-2.5 h-2.5" />
        <BatteryMedium className="w-3 h-3" />
      </div>
    </div>
  );
}


function TabBar({ active }: { active: number }) {
  const tabs = [
    { icon: Home,          label: "Home"     },
    { icon: Users,         label: "Contacts" },
    { icon: MessageCircle, label: "Messages" },
    { icon: BarChart2,     label: "Charts"   },
    { icon: User,          label: "Profile"  },
  ];
  return (
    <div className="flex justify-around items-center px-2 py-2 border-t border-green-900/60 mt-auto">
      {tabs.map(({ icon: Icon, label }, i) => (
        <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
          <Icon
            className={`w-4 h-4 transition-colors ${
              active === i ? "text-green-400" : "text-gray-600"
            }`}
          />
          <span
            className={`text-[7px] ${
              active === i ? "text-green-400" : "text-gray-600"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}


function TopNav({
  title,
  left,
  right,
}: {
  title: string;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between px-3 py-2 border-b border-green-900/50">
      <div className="text-green-400 w-5 h-5 flex items-center">{left}</div>
      <span className="text-[11px] font-medium text-green-200 flex-1 text-center px-2">
        {title}
      </span>
      <div className="text-green-400 w-5 h-5 flex items-center justify-end">{right}</div>
    </div>
  );
}


// ─── Screen 1: Feature Onboarding ─────────────────────────────────────────────


function Screen1() {
  const feats = [
    { icon: BookOpen,          label: "Create Catalogs"   },
    { icon: Bot,               label: "Automate Messages" },
    { icon: MessageCircle, label: "Quick Replies"     },
    { icon: Megaphone,         label: "Broadcasting"      },
  ];
  return (
    <>
      <StatusBar time="9:41" />
      <TopNav
        title="New Business Features"
        left={<ChevronLeft className="w-4 h-4" />}
        right={<Settings className="w-4 h-4" />}
      />
      <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5">
        {/* Feature grid */}
        <div className="grid grid-cols-2 gap-1.5">
          {feats.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-[#122216] rounded-xl p-3 border border-green-900/50 flex flex-col items-center gap-1.5"
            >
              <Icon className="w-5 h-5 text-green-400" />
              <span className="text-[9px] text-green-300 font-medium text-center">{label}</span>
            </div>
          ))}
        </div>


        {/* Active Subscriptions */}
        <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
          <p className="text-[9px] text-gray-500 mb-2">Active Subscriptions</p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#1a3a1c] flex items-center justify-center">
              <Wrench className="w-3 h-3 text-green-400" />
            </div>
            <div>
              <p className="text-[9px] text-green-300 font-medium leading-tight">
                Advanced Business Tools
              </p>
              <p className="text-[8px] text-gray-500">Advanced Business Tools</p>
            </div>
          </div>
        </div>


        {/* Feature setup progress */}
        <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50 flex items-center gap-2">
          <CircleCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-[9px] text-green-300 font-medium mb-1">Feature Setup</p>
            <div className="h-1.5 bg-[#1a3a1c] rounded-full">
              <div className="h-1.5 w-[70%] bg-green-500 rounded-full" />
            </div>
          </div>
          <span className="text-[9px] text-green-300 font-medium">70%</span>
        </div>
      </div>
      <TabBar active={0} />
    </>
  );
}


// ─── Screen 2: Analytics ──────────────────────────────────────────────────────


function Screen2() {
  const barHeights = [40, 65, 45, 80, 60, 90, 75];
  const respDays   = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const respVals   = [82, 91, 78, 95, 88, 72];


  return (
    <>
      <StatusBar time="4:12" />
      <TopNav
        title="WhatsApp Business Hub"
        left={<MessageCircle className="w-4 h-4" />}
        right={<Settings className="w-4 h-4" />}
      />
      <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
        {/* Line chart */}
        <div>
          <p className="text-[9px] text-gray-500 mb-1.5">Message volume: Oct 1–30</p>
          <div className="bg-[#122216] rounded-xl p-2 border border-green-900/50">
            <svg viewBox="0 0 160 52" className="w-full h-10">
              <polyline
                points="0,40 20,28 40,34 60,10 80,20 100,6 120,16 140,12 160,18"
                fill="none"
                stroke="#22c55e"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="0,40 20,28 40,34 60,10 80,20 100,6 120,16 140,12 160,18 160,52 0,52"
                fill="#166534"
                fillOpacity=".35"
                stroke="none"
              />
              {["Oct", "6", "21", "30"].map((t, i) => (
                <text
                  key={t}
                  x={[0, 50, 98, 142][i]}
                  y="50"
                  fontSize="7"
                  fill="#6b7280"
                >
                  {t}
                </text>
              ))}
            </svg>
          </div>
        </div>


        {/* Metric chips */}
        <div className="grid grid-cols-3 gap-1">
          {[
            { val: "98%",  lbl: "Delivered" },
            { val: "2.4K", lbl: "Sent"      },
            { val: "4.1s", lbl: "Avg reply" },
          ].map(({ val, lbl }) => (
            <div
              key={lbl}
              className="bg-[#122216] rounded-xl p-1.5 border border-green-900/50 text-center"
            >
              <p className="text-[13px] font-medium text-green-400 leading-none">{val}</p>
              <p className="text-[8px] text-gray-500 mt-0.5">{lbl}</p>
            </div>
          ))}
        </div>


        {/* Response times */}
        <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
          <p className="text-[9px] text-gray-500 mb-1">Response Times: Daily Avg</p>
          <p className="text-[9px] text-green-400 mb-2">92% within 1 hour</p>
          <div className="space-y-1">
            {respDays.map((day, i) => (
              <div key={day} className="flex items-center gap-1.5">
                <span className="text-[8px] text-gray-500 w-6">{day}</span>
                <div className="flex-1 h-1.5 bg-[#1a3a1c] rounded-full">
                  <div
                    className="h-1.5 bg-green-500 rounded-full transition-all"
                    style={{ width: `${respVals[i]}%` }}
                  />
                </div>
                <span className="text-[8px] text-green-400 w-6 text-right">
                  {respVals[i]}%
                </span>
              </div>
            ))}
          </div>
        </div>


        {/* Bar chart */}
        <div className="bg-[#122216] rounded-xl p-2 border border-green-900/50">
          <div className="flex items-end gap-1 h-10">
            {barHeights.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm transition-all ${
                  h > 70 ? "bg-green-500" : "bg-green-900"
                }`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>


        <button className="w-full bg-[#166534] rounded-lg py-2 text-[10px] font-medium text-green-200">
          View Analytics
        </button>
      </div>
      <TabBar active={3} />
    </>
  );
}


// ─── Screen 3: Group Insights ─────────────────────────────────────────────────


function Screen3() {
  const volData  = [20, 35, 50, 30, 60, 45, 70, 40, 55, 30, 65, 50];
  const members  = [
    { init: "B", label: "Bonus Members", top: true,  bg: "#166534" },
    { init: "B", label: "Builders",      top: false, bg: "#14532d" },
    { init: "S", label: "Senior Members",top: false, bg: "#15803d" },
    { init: "G", label: "General",       top: false, bg: "#4a7c59" },
  ];
  const decisions = [
    "Key Decision is a semantic placeholder",
    "Explore consistent watermark matching",
    "Deprecated for the next load in document",
  ];


  return (
    <>
      <StatusBar time="4:41" />
      <TopNav
        title="Group Insight: Marketing"
        left={<ChevronLeft className="w-4 h-4" />}
        right={<MoreHorizontal className="w-4 h-4" />}
      />
      <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
        {/* Volume chart */}
        <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
          <p className="text-[10px] font-medium text-green-200 mb-0.5">
            Message Volume vs. Interaction Rate
          </p>
          <div className="flex items-end gap-0.5 h-10 mt-1">
            {volData.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${v}%`,
                  background: i % 2 === 0 ? "#166534" : "#22c55e",
                  opacity: 0.65 + i * 0.03,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {["0", "6", "12", "18", "24", "30"].map((t) => (
              <span key={t} className="text-[7px] text-gray-500">{t}</span>
            ))}
          </div>
        </div>


        {/* Most active members */}
        <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
          <p className="text-[9px] text-gray-500 mb-2">Most Active Members</p>
          <div className="space-y-1.5">
            {members.map(({ init, label, top, bg }) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-medium text-white flex-shrink-0"
                  style={{ background: bg }}
                >
                  {init}
                </div>
                <span className="text-[9px] text-green-300 flex-1">{label}</span>
                {top && (
                  <span className="text-[8px] text-green-400 bg-[#1a3a1c] px-1.5 py-0.5 rounded">
                    Top
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Key decisions */}
        <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
          <p className="text-[9px] text-gray-500 mb-2">Key Decisions – Oct 13, 2023</p>
          <div className="space-y-1.5">
            {decisions.map((d) => (
              <div key={d} className="flex items-start gap-1.5">
                <div className="w-1 h-1 rounded-full bg-green-500 mt-1 flex-shrink-0" />
                <span className="text-[8.5px] text-green-300 leading-snug">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TabBar active={3} />
    </>
  );
}


// ─── Phone Frame ──────────────────────────────────────────────────────────────


function PhoneFrame({ 
  children, 
  opacity = 1 
}: { 
  children: React.ReactNode;
  opacity?: number;
}) {
  return (
    <div
      className="relative flex-shrink-0 flex justify-center transition-opacity duration-300"
      style={{ paddingTop: "18px", opacity }}
    >
      <div
        className="w-[240px] relative rounded-[36px] border-2 border-[#1e3a20] overflow-hidden"
        style={{ background: "#0a1a0f", boxShadow: "0 24px 60px rgba(0,0,0,.35)" }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[68px] h-[22px] bg-[#0a1a0f] rounded-b-2xl z-10 flex items-end justify-center pb-1">
          <div className="w-2 h-2 rounded-full bg-[#1a2e1c] border border-[#2a4a2c]" />
        </div>
        {/* Screen */}
        <div
          className="rounded-[32px] overflow-hidden flex flex-col"
          style={{ background: "#0d1f10", minHeight: "492px", paddingTop: "22px" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}


// ─── PhoneSlider Section ──────────────────────────────────────────────────────



export default function PhoneSlider() {
  const [cur, setCur]       = useState<Screen>(0);
  const autoRef             = useRef<ReturnType<typeof setInterval> | null>(null);


  const goTo = useCallback((n: number) => {
    const next = Math.max(0, Math.min(2, n)) as Screen;
    setCur(next);
  }, []);


  // Auto-play
  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setCur(c => ((c + 1) % 3) as Screen), 4000);
  }, []);


  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [startAuto]);


  const screens = [
    { screen: 0, element: <Screen1 /> },
    { screen: 1, element: <Screen2 /> },
    { screen: 2, element: <Screen3 /> },
  ];


  // Determine opacity for each phone based on current screen
  const getOpacity = (screenIndex: number) => {
    if (screenIndex === cur) return 1;
    return 0.7;
  };


  return (
    <section
      className="relative py-16 sm:py-24 bg-white overflow-hidden"
      onMouseEnter={() => { if (autoRef.current) clearInterval(autoRef.current); }}
      onMouseLeave={startAuto}
    >
      {/* Soft bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 to-white pointer-events-none" />


      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-[11px] font-medium text-green-700 tracking-wide">
            <MessageCircle className="w-3.5 h-3.5 text-green-600" />
            WhatsApp Business Hub
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            style={{ fontFamily: "'Syne',sans-serif" }}
          >
            Everything in your{" "}
            <span className="bg-gradient-to-r from-green-600 via-teal-500 to-green-600 bg-clip-text text-transparent">
              pocket
            </span>
          </h2>
          <p className="text-gray-400 text-sm">
            View all three screens simultaneously to explore the platform
          </p>
        </div>


        {/* Slider - Show 3 phones at once */}
        <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden py-4">
          {screens.map(({ screen, element }) => (
            <PhoneFrame key={screen} opacity={getOpacity(screen)}>
              {element}
            </PhoneFrame>
          ))}
        </div>


        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => { goTo(cur - 1); startAuto(); }}
            disabled={cur === 0}
            aria-label="Previous screen"
            className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center
                      hover:bg-green-50 hover:border-green-300 transition-all
                      disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-green-600" />
          </button>


          <div className="flex items-center gap-2">
            {([0, 1, 2] as Screen[]).map((i) => (
              <button
                key={i}
                onClick={() => { goTo(i); startAuto(); }}
                aria-label={`Go to screen ${i + 1}`}
                className={[
                  "h-2 rounded-full transition-all duration-300 border-none outline-none",
                  cur === i ? "w-7 bg-green-600" : "w-2 bg-green-200 hover:bg-green-400",
                ].join(" ")}
              />
            ))}
          </div>


          <button
            onClick={() => { goTo(cur + 1); startAuto(); }}
            disabled={cur === 2}
            aria-label="Next screen"
            className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center
                      hover:bg-green-50 hover:border-green-300 transition-all
                      disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-green-600" />
          </button>
        </div>


      </div>


      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}