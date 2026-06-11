// "use client";

// import { useState, useEffect, useCallback, useRef } from "react";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   PlayCircle,
//   ArrowRight,
//   Play,
//   Shield,
//   Star,
//   CheckCircle2,
//   ChevronLeft,
//   ChevronRight,
//   MessageCircle,
//   BookOpen,
//   Bot,
//   Megaphone,
//   Wrench,
//   CircleCheck,
//   Home,
//   Users,
//   BarChart2,
//   User,
//   Wifi,
//   BatteryMedium,
//   Settings,
//   MoreHorizontal,
// } from "lucide-react";

// import heroImage from "../assests/hero.png";

// import Container from "../components/ui/Container";
// import Button from "../components/ui/Button";

// const stats = [
//   {
//     value: "10K+",
//     label: "Active Users",
//   },
//   {
//     value: "98%",
//     label: "Satisfaction",
//   },
//   {
//     value: "24/7",
//     label: "Support",
//   },
// ];

// /* ── Typewriter lines ── */
// const LINES = [
//   "GreenPing Solutions",
//   "Ultimate Solution for",
//   "WhatsApp Marketing",
// ];
// const TOTAL_CHARS = LINES.reduce((s, l) => s + l.length, 0);
// const TYPE_SPEED = 70; // ms per char typing
// const DELETE_SPEED = 35; // ms per char deleting
// const PAUSE_AFTER = 2500; // ms pause after fully typed
// const PAUSE_BEFORE = 600; // ms pause before retyping

// export default function Hero() {
//   const [charIndex, setCharIndex] = useState(0);
//   const [cur, setCur] = useState(0);

//   const [offsetBase, setOffsetBase] = useState(200);

//   const [phase, setPhase] = useState<
//     "typing" | "paused" | "deleting" | "waiting"
//   >("typing");
//   const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const goTo = useCallback((n: number) => {
//     setCur(Math.max(0, Math.min(2, n)) as 0 | 1 | 2);
//   }, []);
//   const startAuto = useCallback(() => {
//     if (autoRef.current) clearInterval(autoRef.current);
//     autoRef.current = setInterval(
//       () => setCur((c) => ((c + 1) % 3) as 0 | 1 | 2),
//       4000,
//     );
//   }, []);

//   useEffect(() => {
//     startAuto();
//     return () => {
//       if (autoRef.current) clearInterval(autoRef.current);
//     };
//   }, [startAuto]);

//   useEffect(() => {
//     let timer: NodeJS.Timeout;

//     switch (phase) {
//       case "typing":
//         if (charIndex < TOTAL_CHARS) {
//           timer = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
//         } else {
//           timer = setTimeout(() => setPhase("paused"), 0);
//         }
//         break;
//       case "paused":
//         timer = setTimeout(() => setPhase("deleting"), PAUSE_AFTER);
//         break;
//       case "deleting":
//         if (charIndex > 0) {
//           timer = setTimeout(() => setCharIndex((c) => c - 1), DELETE_SPEED);
//         } else {
//           timer = setTimeout(() => setPhase("waiting"), 0);
//         }
//         break;
//       case "waiting":
//         timer = setTimeout(() => setPhase("typing"), PAUSE_BEFORE);
//         break;
//     }

//     return () => clearTimeout(timer);
//   }, [charIndex, phase]);

//   useEffect(() => {
//     const updateOffset = () => {
//       const width = window.innerWidth;
//       if (width < 640) {
//         setOffsetBase(120);
//       } else if (width < 1024) {
//         setOffsetBase(150);
//       } else {
//         setOffsetBase(200);
//       }
//     };
//     updateOffset();
//     window.addEventListener("resize", updateOffset);
//     return () => window.removeEventListener("resize", updateOffset);
//   }, []);

//   /* Given a line index, return { visible, rest, showCursor } */
//   const getLine = useCallback(
//     (idx: number) => {
//       let before = 0;
//       for (let i = 0; i < idx; i++) before += LINES[i].length;
//       const chars = Math.max(
//         0,
//         Math.min(LINES[idx].length, charIndex - before),
//       );
//       const visible = LINES[idx].substring(0, chars);
//       const rest = LINES[idx].substring(chars);
//       const showCursor =
//         charIndex >= before && charIndex <= before + LINES[idx].length;
//       return { visible, rest, showCursor };
//     },
//     [charIndex],
//   );

//   const getSlideStyle = (i: number) => {
//     if (i === cur) return { scale: 1.08, opacity: 1, x: 0, z: 30 };
//     if (i === (cur + 2) % 3)
//       return { scale: 0.82, opacity: 0.6, x: -offsetBase, z: 20 };
//     return { scale: 0.82, opacity: 0.6, x: offsetBase, z: 20 };
//   };

//   const screens = [
//     <Screen1 key="s1" />,
//     <Screen2 key="s2" />,
//     <Screen3 key="s3" />,
//   ];

//   const line0 = getLine(0);
//   const line1 = getLine(1);
//   const line2 = getLine(2);
//   function PhoneTabBar({ active }: { active: number }) {
//     const tabs = [
//       { Icon: Home, label: "Home" },
//       { Icon: Users, label: "Contacts" },
//       { Icon: MessageCircle, label: "Messages" },
//       { Icon: BarChart2, label: "Charts" },
//       { Icon: User, label: "Profile" },
//     ];
//     return (
//       <div className="flex justify-around items-center px-2 py-2 border-t border-green-900/60 mt-auto">
//         {tabs.map(({ Icon, label }, i) => (
//           <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
//             <Icon
//               className={`w-4 h-4 ${
//                 active === i ? "text-green-400" : "text-gray-600"
//               }`}
//             />
//             <span
//               className={`text-[7px] ${
//                 active === i ? "text-green-400" : "text-gray-600"
//               }`}
//             >
//               {label}
//             </span>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   function PhoneTopNav({
//     title,
//     left,
//     right,
//   }: {
//     title: string;
//     left: React.ReactNode;
//     right: React.ReactNode;
//   }) {
//     return (
//       <div className="flex items-center justify-between px-3 py-2 border-b border-green-900/50">
//         <div className="text-green-400 w-5 h-5 flex items-center">{left}</div>
//         <span className="text-[11px] font-medium text-green-200 flex-1 text-center px-2 truncate">
//           {title}
//         </span>
//         <div className="text-green-400 w-5 h-5 flex items-center justify-end">
//           {right}
//         </div>
//       </div>
//     );
//   }

//   function StatusBar({ time }: { time: string }) {
//     return (
//       <div className="flex justify-between items-center px-4 py-1 text-[9px] font-semibold text-green-300">
//         <span>{time}</span>
//         <div className="flex items-center gap-1">
//           <Wifi className="w-2.5 h-2.5" />
//           <BatteryMedium className="w-3 h-3" />
//         </div>
//       </div>
//     );
//   }

//   function Screen1() {
//     const feats = [
//       { Icon: BookOpen, label: "Create Catalogs" },
//       { Icon: Bot, label: "Automate Messages" },
//       { Icon: MessageCircle, label: "Quick Replies" },
//       { Icon: Megaphone, label: "Broadcasting" },
//     ];

//     return (
//       <>
//         <StatusBar time="9:41" />
//         <PhoneTopNav
//           title="New Business Features"
//           left={<ChevronLeft className="w-4 h-4" />}
//           right={<Settings className="w-4 h-4" />}
//         />
//         <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5">
//           <div className="grid grid-cols-2 gap-1.5">
//             {feats.map(({ Icon, label }) => (
//               <div
//                 key={label}
//                 className="bg-[#122216] rounded-xl p-3 border border-green-900/50 flex flex-col items-center gap-1.5"
//               >
//                 <Icon className="w-5 h-5 text-green-400" />
//                 <span className="text-[9px] text-green-300 font-medium text-center leading-tight">
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
//             <p className="text-[9px] text-gray-500 mb-2">
//               Active Subscriptions
//             </p>
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 rounded-lg bg-[#1a3a1c] flex items-center justify-center flex-shrink-0">
//                 <Wrench className="w-3 h-3 text-green-400" />
//               </div>
//               <div>
//                 <p className="text-[9px] text-green-300 font-medium leading-tight">
//                   Advanced Business Tools
//                 </p>
//                 <p className="text-[8px] text-gray-500">
//                   Advanced Business Tools
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50 flex items-center gap-2">
//             <CircleCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
//             <div className="flex-1">
//               <p className="text-[9px] text-green-300 font-medium mb-1">
//                 Feature Setup
//               </p>
//               <div className="h-1.5 bg-[#1a3a1c] rounded-full">
//                 <div className="h-1.5 w-[70%] bg-green-500 rounded-full" />
//               </div>
//             </div>
//             <span className="text-[9px] text-green-300 font-medium">70%</span>
//           </div>
//         </div>
//         <PhoneTabBar active={0} />
//       </>
//     );
//   }

//   function Screen2() {
//     const [barHeights, setBarHeights] = useState([40, 65, 45, 80, 60, 90, 75]);
//     const respDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const respVals = [82, 91, 78, 95, 88, 72];

//     useEffect(() => {
//       const id = setInterval(() => {
//         setBarHeights(
//           Array.from({ length: 7 }, () => Math.floor(30 + Math.random() * 65)),
//         );
//       }, 2200);
//       return () => clearInterval(id);
//     }, []);

//     return (
//       <>
//         <StatusBar time="4:12" />
//         <PhoneTopNav
//           title="WhatsApp Business Hub"
//           left={<MessageCircle className="w-4 h-4" />}
//           right={<Settings className="w-4 h-4" />}
//         />
//         <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
//           <div>
//             <p className="text-[9px] text-gray-500 mb-1.5">
//               Message volume: Oct 1–30
//             </p>
//             <div className="bg-[#122216] rounded-xl p-2 border border-green-900/50">
//               <svg
//                 viewBox="0 0 160 52"
//                 className="w-full h-10"
//                 preserveAspectRatio="none"
//               >
//                 <polyline
//                   points="0,40 20,28 40,34 60,10 80,20 100,6 120,16 140,12 160,18"
//                   fill="none"
//                   stroke="#22c55e"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <polyline
//                   points="0,40 20,28 40,34 60,10 80,20 100,6 120,16 140,12 160,18 160,52 0,52"
//                   fill="#166534"
//                   fillOpacity=".35"
//                   stroke="none"
//                 />
//                 {["Oct", "6", "21", "30"].map((t, i) => (
//                   <text
//                     key={t}
//                     x={[0, 50, 98, 142][i]}
//                     y="50"
//                     fontSize="7"
//                     fill="#6b7280"
//                   >
//                     {t}
//                   </text>
//                 ))}
//               </svg>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-1">
//             {[
//               { val: "98%", lbl: "Delivered" },
//               { val: "2.4K", lbl: "Sent" },
//               { val: "4.1s", lbl: "Avg reply" },
//             ].map(({ val, lbl }) => (
//               <div
//                 key={lbl}
//                 className="bg-[#122216] rounded-xl p-1.5 border border-green-900/50 text-center"
//               >
//                 <p className="text-[13px] font-medium text-green-400 leading-none">
//                   {val}
//                 </p>
//                 <p className="text-[8px] text-gray-500 mt-0.5">{lbl}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
//             <p className="text-[9px] text-gray-500 mb-1">
//               Response Times: Daily Avg
//             </p>
//             <p className="text-[9px] text-green-400 mb-2">92% within 1 hour</p>
//             <div className="space-y-1">
//               {respDays.map((day, i) => (
//                 <div key={day} className="flex items-center gap-1.5">
//                   <span className="text-[8px] text-gray-500 w-6">{day}</span>
//                   <div className="flex-1 h-1.5 bg-[#1a3a1c] rounded-full">
//                     <div
//                       className="h-1.5 bg-green-500 rounded-full transition-all"
//                       style={{ width: `${respVals[i]}%` }}
//                     />
//                   </div>
//                   <span className="text-[8px] text-green-400 w-6 text-right">
//                     {respVals[i]}%
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-[#122216] rounded-xl p-2 border border-green-900/50">
//             <div className="flex items-end gap-1 h-10">
//               {barHeights.map((h, i) => (
//                 <div
//                   key={i}
//                   className={`flex-1 rounded-t-sm transition-all duration-700 ${
//                     h > 70 ? "bg-green-500" : "bg-green-900"
//                   }`}
//                   style={{ height: `${h}%` }}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="w-full bg-[#166534] rounded-lg py-2 text-center text-[10px] font-medium text-green-200">
//             View Analytics
//           </div>
//         </div>
//         <PhoneTabBar active={3} />
//       </>
//     );
//   }

//   function Screen3() {
//     const volData = [20, 35, 50, 30, 60, 45, 70, 40, 55, 30, 65, 50];
//     const members = [
//       { init: "B", label: "Bonus Members", top: true, bg: "#166534" },
//       { init: "B", label: "Builders", top: false, bg: "#14532d" },
//       { init: "S", label: "Senior Members", top: false, bg: "#15803d" },
//       { init: "G", label: "General", top: false, bg: "#4a7c59" },
//     ];
//     const decisions = [
//       "Key Decision is a semantic placeholder",
//       "Explore consistent watermark matching",
//       "Deprecated for the next load in document",
//     ];

//     return (
//       <>
//         <StatusBar time="4:41" />
//         <PhoneTopNav
//           title="Group Insight: Marketing"
//           left={<ChevronLeft className="w-4 h-4" />}
//           right={<MoreHorizontal className="w-4 h-4" />}
//         />
//         <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
//           <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
//             <p className="text-[10px] font-medium text-green-200 mb-1">
//               Message Volume vs. Interaction Rate
//             </p>
//             <div className="flex items-end gap-0.5 h-10 mt-1">
//               {volData.map((v, i) => (
//                 <div
//                   key={i}
//                   className="flex-1 rounded-t-sm"
//                   style={{
//                     height: `${v}%`,
//                     background: i % 2 === 0 ? "#166534" : "#22c55e",
//                     opacity: 0.65 + i * 0.03,
//                   }}
//                 />
//               ))}
//             </div>
//             <div className="flex justify-between mt-1">
//               {["0", "6", "12", "18", "24", "30"].map((t) => (
//                 <span key={t} className="text-[7px] text-gray-500">
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
//             <p className="text-[9px] text-gray-500 mb-2">Most Active Members</p>
//             <div className="space-y-1.5">
//               {members.map(({ init, label, top, bg }) => (
//                 <div key={label} className="flex items-center gap-2">
//                   <div
//                     className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-medium text-white flex-shrink-0"
//                     style={{ background: bg }}
//                   >
//                     {init}
//                   </div>
//                   <span className="text-[9px] text-green-300 flex-1">
//                     {label}
//                   </span>
//                   {top && (
//                     <span className="text-[8px] text-green-400 bg-[#1a3a1c] px-1.5 py-0.5 rounded">
//                       Top
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
//             <p className="text-[9px] text-gray-500 mb-2">
//               Key Decisions – Oct 13, 2023
//             </p>
//             <div className="space-y-1.5">
//               {decisions.map((d) => (
//                 <div key={d} className="flex items-start gap-1.5">
//                   <div className="w-1 h-1 rounded-full bg-green-500 mt-1 flex-shrink-0" />
//                   <span className="text-[8.5px] text-green-300 leading-snug">
//                     {d}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <PhoneTabBar active={3} />
//       </>
//     );
//   }

//   function PhoneFrame({
//     children,
//     scale = 1,
//     opacity = 1,
//     x = 0,
//     z = 1,
//   }: {
//     children: React.ReactNode;
//     scale?: number;
//     opacity?: number;
//     x?: number;
//     z?: number;
//   }) {
//     return (
//       <div
//         className="absolute top-0 left-1/2 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform"
//         style={{
//           transform: `translateX(-50%) translateX(${x}px) scale(${scale})`,
//           opacity,
//           zIndex: z,
//           transformOrigin: "center center",
//         }}
//       >
//         <div
//           className="w-[220px] sm:w-[240px] lg:w-[260px] relative rounded-[36px] border-2 border-[#1e3a20] overflow-hidden mx-auto"
//           style={{
//             background: "#0a1a0f",
//             boxShadow: "0 24px 60px rgba(0,0,0,.35)",
//           }}
//         >
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[68px] h-[22px] bg-[#0a1a0f] rounded-b-2xl z-10 flex items-end justify-center pb-1">
//             <div className="w-2 h-2 rounded-full bg-[#1a2e1c] border border-[#2a4a2c]" />
//           </div>
//           <div
//             className="rounded-[32px] overflow-hidden flex flex-col"
//             style={{
//               background: "#0d1f10",
//               minHeight: "440px",
//               paddingTop: "18px",
//             }}
//           >
//             {children}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="relative overflow-hidden">
//       {/* Background */}
//       {/* Premium SaaS Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Aurora Glow 1 */}
//         <motion.div
//           animate={{
//             x: [0, 50, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//       absolute
//       -left-32
//       -top-20
//       h-[550px]
//       w-[550px]
//       rounded-full
//       bg-primary/15
//       blur-[140px]
//     "
//         />

//         {/* Aurora Glow 2 */}
//         <motion.div
//           animate={{
//             x: [0, -40, 0],
//             y: [0, 40, 0],
//           }}
//           transition={{
//             duration: 14,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//       absolute
//       right-0
//       top-20
//       h-[450px]
//       w-[450px]
//       rounded-full
//       bg-primary-light/10
//       blur-[130px]
//     "
//         />

//         {/* Aurora Glow 3 */}
//         <motion.div
//           animate={{
//             scale: [1, 1.15, 1],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//       absolute
//       bottom-0
//       left-1/2
//       h-[350px]
//       w-[350px]
//       -translate-x-1/2
//       rounded-full
//       bg-primary-dark/10
//       blur-[120px]
//     "
//         />

//         {/* Professional Grid */}
//         <div
//           className="
//       absolute inset-0
//       bg-[linear-gradient(to_right,rgba(34,197,94,0.03)_1px,transparent_1px),
//       linear-gradient(to_bottom,rgba(34,197,94,0.03)_1px,transparent_1px)]
//       bg-[size:80px_80px]
//     "
//         />

//         {/* Radial Gradient Overlay */}
//         <div
//           className="
//       absolute inset-0
//       bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_35%),
//       radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_35%)]
//     "
//         />
//       </div>

//       <Container className="relative">
//         <div className="grid min-h-[85vh] items-center gap-12 py-10 lg:grid-cols-2 lg:gap-20">
//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-dark">
//               <ShieldCheck className="h-4 w-4" />
//               Official WhatsApp Business Solution
//             </div>

//             {/* Typewriter H1 — invisible text reserves full height */}
//             <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
//               {/* Line 1: GreenPing Solutions */}
//               <span className="block">
//                 {line0.visible}
//                 <span className="invisible" aria-hidden="true">
//                   {line0.rest}
//                 </span>
//                 {line0.showCursor && <span className="hero-cursor-blink" />}
//               </span>

//               {/* Line 2: Ultimate Solution for */}
//               <span className="mt-2 block text-primary">
//                 {line1.visible}
//                 <span className="invisible" aria-hidden="true">
//                   {line1.rest}
//                 </span>
//                 {line1.showCursor && <span className="hero-cursor-blink" />}
//               </span>

//               {/* Line 3: WhatsApp Marketing */}
//               <span className="block">
//                 {line2.visible}
//                 <span className="invisible" aria-hidden="true">
//                   {line2.rest}
//                 </span>
//                 {line2.showCursor && <span className="hero-cursor-blink" />}
//               </span>
//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
//               Our Greenping Solutions is a trusted and efficient platform
//               designed to revolutionize the way businesses connect with their
//               customers. With official verification by Meta our portal ensures
//               secure reliable and compliant communication solutions.
//             </p>

//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <Button size="lg" withRipple withGlow>
//                 Book Live Demo
//               </Button>

//               <Button
//                 variant="outline"
//                 size="lg"
//                 icon={<PlayCircle size={18} />}
//               >
//                 Watch Demo Video
//               </Button>
//             </div>

//             <div className="mt-10 grid grid-cols-3 gap-4 sm:max-w-md">
//               {stats.map((item) => (
//                 <div key={item.label}>
//                   <h3 className="text-3xl font-bold text-primary">
//                     {item.value}
//                   </h3>

//                   <p className="text-sm text-muted-foreground">{item.label}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className=""
//           >
//             <div className=" mt-10 md:mt-12">
//               <div className="relative w-full h-[460px] sm:h-[500px] overflow-hidden">
//                 {screens.map((screen, i) => {
//                   const s = getSlideStyle(i);
//                   return (
//                     <PhoneFrame
//                       key={i}
//                       scale={s.scale}
//                       opacity={s.opacity}
//                       x={s.x}
//                       z={s.z}
//                     >
//                       {screen}
//                     </PhoneFrame>
//                   );
//                 })}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Container>

      
//     </section>
//   );
// }


"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  PlayCircle,
  ChevronLeft,
  MessageCircle,
  BookOpen,
  Bot,
  Megaphone,
  Wrench,
  CircleCheck,
  Home,
  Users,
  BarChart2,
  User,
  Wifi,
  BatteryMedium,
  Settings,
  MoreHorizontal,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "98%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

const LINES = ["GreenPing Solutions", "Ultimate Solution for", "WhatsApp Marketing"];
const TOTAL_CHARS = LINES.reduce((s, l) => s + l.length, 0);
const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const PAUSE_AFTER = 2500;
const PAUSE_BEFORE = 600;

export default function Hero() {
  const [charIndex, setCharIndex] = useState(0);
  const [cur, setCur] = useState(0);
  const [offsetBase, setOffsetBase] = useState(200);
  const [phase, setPhase] = useState<"typing" | "paused" | "deleting" | "waiting">("typing");
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(
      () => setCur((c) => ((c + 1) % 3) as 0 | 1 | 2),
      4000,
    );
  }, []);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [startAuto]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    switch (phase) {
      case "typing":
        if (charIndex < TOTAL_CHARS) {
          timer = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
        } else {
          timer = setTimeout(() => setPhase("paused"), 0);
        }
        break;
      case "paused":
        timer = setTimeout(() => setPhase("deleting"), PAUSE_AFTER);
        break;
      case "deleting":
        if (charIndex > 0) {
          timer = setTimeout(() => setCharIndex((c) => c - 1), DELETE_SPEED);
        } else {
          timer = setTimeout(() => setPhase("waiting"), 0);
        }
        break;
      case "waiting":
        timer = setTimeout(() => setPhase("typing"), PAUSE_BEFORE);
        break;
    }
    return () => clearTimeout(timer);
  }, [charIndex, phase]);

  useEffect(() => {
    const updateOffset = () => {
      const width = window.innerWidth;
      if (width < 640) setOffsetBase(120);
      else if (width < 1024) setOffsetBase(150);
      else setOffsetBase(200);
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  const getLine = useCallback((idx: number) => {
    let before = 0;
    for (let i = 0; i < idx; i++) before += LINES[i].length;
    const chars = Math.max(0, Math.min(LINES[idx].length, charIndex - before));
    const visible = LINES[idx].substring(0, chars);
    const rest = LINES[idx].substring(chars);
    const showCursor = charIndex >= before && charIndex <= before + LINES[idx].length;
    return { visible, rest, showCursor };
  }, [charIndex]);

  const getSlideStyle = (i: number) => {
    if (i === cur) return { scale: 1.08, opacity: 1, x: 0, z: 30 };
    if (i === (cur + 2) % 3) return { scale: 0.82, opacity: 0.6, x: -offsetBase, z: 20 };
    return { scale: 0.82, opacity: 0.6, x: offsetBase, z: 20 };
  };

  const line0 = getLine(0);
  const line1 = getLine(1);
  const line2 = getLine(2);

  // Phone Components
  function PhoneTabBar({ active }: { active: number }) {
    const tabs = [
      { Icon: Home, label: "Home" },
      { Icon: Users, label: "Contacts" },
      { Icon: MessageCircle, label: "Messages" },
      { Icon: BarChart2, label: "Charts" },
      { Icon: User, label: "Profile" },
    ];
    return (
      <div className="flex justify-around items-center px-2 py-2 border-t border-green-900/60 mt-auto">
        {tabs.map(({ Icon, label }, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
            <Icon className={`w-4 h-4 ${active === i ? "text-green-400" : "text-gray-600"}`} />
            <span className={`text-[7px] ${active === i ? "text-green-400" : "text-gray-600"}`}>
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  function PhoneTopNav({ title, left, right }: { title: string; left: React.ReactNode; right: React.ReactNode }) {
    return (
      <div className="flex items-center justify-between px-3 py-2 border-b border-green-900/50">
        <div className="text-green-400 w-5 h-5 flex items-center">{left}</div>
        <span className="text-[11px] font-medium text-green-200 flex-1 text-center px-2 truncate">{title}</span>
        <div className="text-green-400 w-5 h-5 flex items-center justify-end">{right}</div>
      </div>
    );
  }

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

  function Screen1() {
    const feats = [
      { Icon: BookOpen, label: "Create Catalogs" },
      { Icon: Bot, label: "Automate Messages" },
      { Icon: MessageCircle, label: "Quick Replies" },
      { Icon: Megaphone, label: "Broadcasting" },
    ];

    return (
      <>
        <StatusBar time="9:41" />
        <PhoneTopNav title="New Business Features" left={<ChevronLeft className="w-4 h-4" />} right={<Settings className="w-4 h-4" />} />
        <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5">
          <div className="grid grid-cols-2 gap-1.5">
            {feats.map(({ Icon, label }) => (
              <div key={label} className="bg-[#122216] rounded-xl p-3 border border-green-900/50 flex flex-col items-center gap-1.5">
                <Icon className="w-5 h-5 text-green-400" />
                <span className="text-[9px] text-green-300 font-medium text-center leading-tight">{label}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
            <p className="text-[9px] text-gray-500 mb-2">Active Subscriptions</p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#1a3a1c] flex items-center justify-center flex-shrink-0">
                <Wrench className="w-3 h-3 text-green-400" />
              </div>
              <div>
                <p className="text-[9px] text-green-300 font-medium leading-tight">Advanced Business Tools</p>
                <p className="text-[8px] text-gray-500">Advanced Business Tools</p>
              </div>
            </div>
          </div>
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
        <PhoneTabBar active={0} />
      </>
    );
  }

  function Screen2() {
    const [barHeights, setBarHeights] = useState([40, 65, 45, 80, 60, 90, 75]);
    const respDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const respVals = [82, 91, 78, 95, 88, 72];

    useEffect(() => {
      const id = setInterval(() => {
        setBarHeights(Array.from({ length: 7 }, () => Math.floor(30 + Math.random() * 65)));
      }, 2200);
      return () => clearInterval(id);
    }, []);

    return (
      <>
        <StatusBar time="4:12" />
        <PhoneTopNav title="WhatsApp Business Hub" left={<MessageCircle className="w-4 h-4" />} right={<Settings className="w-4 h-4" />} />
        <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
          <div>
            <p className="text-[9px] text-gray-500 mb-1.5">Message volume: Oct 1–30</p>
            <div className="bg-[#122216] rounded-xl p-2 border border-green-900/50">
              <svg viewBox="0 0 160 52" className="w-full h-10" preserveAspectRatio="none">
                <polyline points="0,40 20,28 40,34 60,10 80,20 100,6 120,16 140,12 160,18" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="0,40 20,28 40,34 60,10 80,20 100,6 120,16 140,12 160,18 160,52 0,52" fill="#166534" fillOpacity=".35" stroke="none" />
                {["Oct", "6", "21", "30"].map((t, i) => (
                  <text key={t} x={[0, 50, 98, 142][i]} y="50" fontSize="7" fill="#6b7280">{t}</text>
                ))}
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[
              { val: "98%", lbl: "Delivered" },
              { val: "2.4K", lbl: "Sent" },
              { val: "4.1s", lbl: "Avg reply" },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="bg-[#122216] rounded-xl p-1.5 border border-green-900/50 text-center">
                <p className="text-[13px] font-medium text-green-400 leading-none">{val}</p>
                <p className="text-[8px] text-gray-500 mt-0.5">{lbl}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
            <p className="text-[9px] text-gray-500 mb-1">Response Times: Daily Avg</p>
            <p className="text-[9px] text-green-400 mb-2">92% within 1 hour</p>
            <div className="space-y-1">
              {respDays.map((day, i) => (
                <div key={day} className="flex items-center gap-1.5">
                  <span className="text-[8px] text-gray-500 w-6">{day}</span>
                  <div className="flex-1 h-1.5 bg-[#1a3a1c] rounded-full">
                    <div className="h-1.5 bg-green-500 rounded-full transition-all" style={{ width: `${respVals[i]}%` }} />
                  </div>
                  <span className="text-[8px] text-green-400 w-6 text-right">{respVals[i]}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#122216] rounded-xl p-2 border border-green-900/50">
            <div className="flex items-end gap-1 h-10">
              {barHeights.map((h, i) => (
                <div key={i} className={`flex-1 rounded-t-sm transition-all duration-700 ${h > 70 ? "bg-green-500" : "bg-green-900"}`} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="w-full bg-[#166534] rounded-lg py-2 text-center text-[10px] font-medium text-green-200">View Analytics</div>
        </div>
        <PhoneTabBar active={3} />
      </>
    );
  }

  function Screen3() {
    const members = [
      { init: "B", label: "Bonus Members", top: true, bg: "#166534" },
      { init: "B", label: "Builders", top: false, bg: "#14532d" },
      { init: "S", label: "Senior Members", top: false, bg: "#15803d" },
      { init: "G", label: "General", top: false, bg: "#4a7c59" },
    ];

    return (
      <>
        <StatusBar time="4:41" />
        <PhoneTopNav title="Group Insight: Marketing" left={<ChevronLeft className="w-4 h-4" />} right={<MoreHorizontal className="w-4 h-4" />} />
        <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
          <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
            <p className="text-[9px] text-gray-500 mb-2">Most Active Members</p>
            <div className="space-y-1.5">
              {members.map(({ init, label, top, bg }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-medium text-white flex-shrink-0" style={{ background: bg }}>{init}</div>
                  <span className="text-[9px] text-green-300 flex-1">{label}</span>
                  {top && <span className="text-[8px] text-green-400 bg-[#1a3a1c] px-1.5 py-0.5 rounded">Top</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#122216] rounded-xl p-2.5 border border-green-900/50">
            <p className="text-[9px] text-gray-500 mb-2">Key Decisions – Oct 13, 2023</p>
            <div className="space-y-1.5">
              {[
                "Key Decision is a semantic placeholder",
                "Explore consistent watermark matching",
                "Deprecated for the next load in document",
              ].map((d) => (
                <div key={d} className="flex items-start gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-green-500 mt-1 flex-shrink-0" />
                  <span className="text-[8.5px] text-green-300 leading-snug">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <PhoneTabBar active={3} />
      </>
    );
  }

  function PhoneFrame({ children, scale = 1, opacity = 1, x = 0, z = 1 }: { children: React.ReactNode; scale?: number; opacity?: number; x?: number; z?: number }) {
    return (
      <div
        className="absolute top-0 left-1/2 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform"
        style={{
          transform: `translateX(-50%) translateX(${x}px) scale(${scale})`,
          opacity,
          zIndex: z,
          transformOrigin: "center center",
        }}
      >
        <div className="w-[220px] sm:w-[240px] lg:w-[260px]  relative rounded-[36px] border-2 border-[#1e3a20] overflow-hidden mx-auto" style={{ background: "#0a1a0f", boxShadow: "0 24px 60px rgba(0,0,0,.35)" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[68px] h-[22px] bg-[#0a1a0f] rounded-b-2xl z-10 flex items-end justify-center pb-1">
            <div className="w-2 h-2 rounded-full bg-[#1a2e1c] border border-[#2a4a2c]" />
          </div>
          <div className="rounded-[32px] overflow-hidden flex flex-col" style={{ background: "#0d1f10", minHeight: "440px", paddingTop: "18px" }}>
            {children}
          </div>
        </div>
      </div>
    );
  }

  const screens = [<Screen1 key="s1" />, <Screen2 key="s2" />, <Screen3 key="s3" />];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 -top-20 h-[550px] w-[550px] rounded-full bg-primary/15 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-primary-light/10 blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-primary-dark/10 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_35%)]" />
      </div>

      <Container className="relative">
        <div className="grid min-h-[85vh] items-center gap-12 py-10 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-dark"
            >
              <ShieldCheck className="h-4 w-4" />
              Official WhatsApp Business Solution
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </motion.div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="block">
                {line0.visible}
                <span className="invisible" aria-hidden="true">{line0.rest}</span>
                {line0.showCursor && <span className="hero-cursor-blink" />}
              </span>
              <span className="mt-2 block text-primary">
                {line1.visible}
                <span className="invisible" aria-hidden="true">{line1.rest}</span>
                {line1.showCursor && <span className="hero-cursor-blink" />}
              </span>
              <span className="block">
                {line2.visible}
                <span className="invisible" aria-hidden="true">{line2.rest}</span>
                {line2.showCursor && <span className="hero-cursor-blink" />}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Our Greenping Solutions is a trusted and efficient platform designed to revolutionize the way businesses connect with their customers. With official verification by Meta our portal ensures secure reliable and compliant communication solutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" withRipple withGlow>Book Live Demo</Button>
              <Button variant="outline" size="lg" icon={<PlayCircle size={18} />}>Watch Demo Video</Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:max-w-md">
              {stats.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <h3 className="text-3xl font-bold text-primary">{item.value}</h3>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => { if (autoRef.current) clearInterval(autoRef.current); }}
            onMouseLeave={startAuto}
          >
            <div className="mt-10 md:mt-12">
              <div className="relative w-full h-[460px] sm:h-[500px]">
                {screens.map((screen, i) => {
                  const s = getSlideStyle(i);
                  return (
                    <PhoneFrame key={i} scale={s.scale} opacity={s.opacity} x={s.x} z={s.z}>
                      {screen}
                    </PhoneFrame>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
    
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
} 