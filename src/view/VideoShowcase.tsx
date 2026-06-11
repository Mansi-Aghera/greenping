// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Container from "@/src/components/ui/Container";

// import video1 from "@/src/assests/videos/Add a heading.gif";
// import video2 from "@/src/assests/videos/RK.gif";
// import video3 from "@/src/assests/videos/Untitleddesign1-ezgif.com-video-to-gif-converter.gif";
// import { Sparkles, Zap, Shield, ArrowRight } from "lucide-react";

// const showcaseData = [
//   {
//     id: 1,
//     title: "Craft Your Logic Visually",
//     subtitle: "Intuitive Builder",
//     description: "Design automated flows with our drag-and-drop interface. Add conditional logic, variables, and custom steps in seconds without needing a developer.",
//     video: video1,
//     icon: Zap,
//     reversed: false,
//   },
//   {
//     id: 2,
//     title: "Engage Customers Instantly",
//     subtitle: "Automated Replies",
//     description: "Respond to inquiries 24/7. Our smart bot setup allows you to handle thousands of requests seamlessly, turning leads into loyal customers.",
//     video: video2,
//     icon: Sparkles,
//     reversed: true,
//   },
//   {
//     id: 3,
//     title: "Seamless Conversion Tracking",
//     subtitle: "Analytics & Insights",
//     description: "Monitor your campaign performance with deep insights. Understand customer behavior and optimize your messaging strategy on the fly.",
//     video: video3,
//     icon: Shield,
//     reversed: false,
//   },
// ];

// export default function VideoShowcase() {
//   return (
//     <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
//       {/* Dynamic Background Pattern */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle, rgb(var(--primary)) 1px, transparent 1px)`,
//           backgroundSize: "32px 32px",
//         }}
//       />
      
//       {/* Background glow effects */}
//       <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary-light/10 blur-[120px] pointer-events-none" />

//       <Container className="relative z-10 space-y-20 lg:space-y-32">
        
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[12px] font-bold tracking-widest text-primary uppercase mb-6"
//           >
//             <Sparkles size={14} className="fill-primary" />
//             See It In Action
//           </motion.div>
          
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight"
//           >
//             Automate with <span className="bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">Simplicity</span>
//           </motion.h2>
          
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
//           >
//             Watch how our tools transform your daily operations, making complex tasks feel incredibly effortless.
//           </motion.p>
//         </div>

//         {/* Alternating Showcase Cards */}
//         <div className="space-y-24 lg:space-y-32">
//           {showcaseData.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={item.id}
//                 className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
//                   item.reversed ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Text Content Block */}
//                 <motion.div
//                   initial={{ opacity: 0, x: item.reversed ? 40 : -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
//                   viewport={{ once: true, margin: "-10%" }}
//                   className="w-full lg:w-1/2 space-y-6"
//                 >
//                   <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.15)] text-primary">
//                     <Icon size={28} />
//                   </div>
                  
//                   <div className="space-y-3">
//                     <h4 className="text-sm font-bold tracking-widest text-primary uppercase">
//                       {item.subtitle}
//                     </h4>
//                     <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
//                       {item.title}
//                     </h3>
//                   </div>
                  
//                   <p className="text-lg text-muted-foreground leading-relaxed">
//                     {item.description}
//                   </p>
                  
//                   <div className="pt-4">
//                     <button className="group inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-primary-dark transition-colors">
//                       Learn more
//                       <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
//                     </button>
//                   </div>
//                 </motion.div>

//                 {/* Video Block */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95, y: 30 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
//                   viewport={{ once: true, margin: "-10%" }}
//                   className="w-full lg:w-1/2 relative group"
//                 >
//                   {/* Glowing background behind the video card */}
//                   <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                  
//                   <div className="relative rounded-[2rem] overflow-hidden border border-border bg-white shadow-2xl p-2 sm:p-3 transform transition-transform duration-500 group-hover:-translate-y-2">
//                     {/* Inner wrapper for image */}
//                     <div className="relative rounded-[1.5rem] overflow-hidden bg-background border border-border/50">
//                       <Image
//                         src={item.video}
//                         alt={item.title}
//                         className="w-full h-auto object-cover"
//                         unoptimized // crucial for GIFs to animate properly
//                       />
                      
//                       {/* Inner glassmorphic overlay that fades on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";

import video1 from "@/src/assests/videos/Add a heading.gif";
import video2 from "@/src/assests/videos/RK.gif";
import video3 from "@/src/assests/videos/Untitleddesign1-ezgif.com-video-to-gif-converter.gif";
import { Sparkles, Zap, Shield, ArrowRight, Play } from "lucide-react";

const showcaseData = [
  {
    id: 1,
    title: "Craft Your Logic Visually",
    subtitle: "Intuitive Builder",
    description: "Design automated flows with our drag-and-drop interface. Add conditional logic, variables, and custom steps in seconds without needing a developer.",
    video: video1,
    icon: Zap,
    reversed: false,
    videoAspect: "video-landscape",
  },
  {
    id: 2,
    title: "Engage Customers Instantly",
    subtitle: "Automated Replies",
    description: "Respond to inquiries 24/7. Our smart bot setup allows you to handle thousands of requests seamlessly, turning leads into loyal customers.",
    video: video2,
    icon: Sparkles,
    reversed: true,
    videoAspect: "video-portrait",
  },
  {
    id: 3,
    title: "Seamless Conversion Tracking",
    subtitle: "Analytics & Insights",
    description: "Monitor your campaign performance with deep insights. Understand customer behavior and optimize your messaging strategy on the fly.",
    video: video3,
    icon: Shield,
    reversed: false,
    videoAspect: "video-landscape",
  },
];

export default function VideoShowcase() {
  return (
    <section className="relative py-8 lg:py-16 overflow-hidden bg-background">
      {/* Dynamic Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(34, 197, 94) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-primary/10 blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-primary-light/10 blur-[100px] sm:blur-[120px] pointer-events-none" />

      <Container className="relative z-10 space-y-16 sm:space-y-20 lg:space-y-28 xl:space-y-32">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] sm:text-[12px] font-bold tracking-widest text-primary uppercase mb-4 sm:mb-6"
          >
            <Sparkles size={12} className="sm:size-[14px] fill-primary" />
            See It In Action
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Automate with{" "}
            <span className="bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">
              Simplicity
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Watch how our tools transform your daily operations, making complex tasks feel incredibly effortless.
          </motion.p>
        </div>

        {/* Alternating Showcase Cards */}
        <div className="space-y-20 sm:space-y-24 lg:space-y-28 xl:space-y-32">
          {showcaseData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 xl:gap-20 ${
                  item.reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content Block */}
                <motion.div
                  initial={{ opacity: 0, x: item.reversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="w-full lg:w-1/2 space-y-4 sm:space-y-5 lg:space-y-6 px-4 sm:px-6 lg:px-0"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center shadow-lg text-primary">
                    <Icon size={24} className="sm:size-[28px]" />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="text-xs sm:text-sm font-bold tracking-wider sm:tracking-widest text-primary uppercase">
                      {item.subtitle}
                    </h4>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="pt-2 sm:pt-4">
                    <button className="group inline-flex items-center gap-2 text-primary font-semibold sm:font-bold text-base sm:text-lg hover:text-primary-dark transition-colors">
                      Learn more
                      <ArrowRight size={18} className="sm:size-[20px] group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>

                {/* Video Block - Enhanced for better display */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="w-full lg:w-1/2 relative group px-4 sm:px-6 lg:px-0"
                >
                  {/* Animated glow effect */}
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 blur-xl rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                  
                  {/* Main video card */}
                  <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-white to-gray-50 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    
                    {/* Video container with fixed aspect ratio for consistency */}
                    <div className={`relative w-full ${
                      item.id === 2 
                        ? "aspect-[9/16] sm:aspect-[3/4] md:aspect-[9/12] lg:aspect-[9/14] max-h-[500px] lg:max-h-[600px]" 
                        : "aspect-video"
                    }`}>
                      {/* Decorative top gradient */}
                      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/5 to-transparent z-10 pointer-events-none" />
                      
                      {/* The video/gif */}
                      <Image
                        src={item.video}
                        alt={item.title}
                        fill
                        className="object-contain sm:object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        unoptimized
                      />
                      
                      {/* Play button overlay (static for gifs) */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                          <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" fill="white" />
                        </div>
                      </div>

                      {/* Bottom gradient fade */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    </div>

                    {/* Card footer with video indicator */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-1.5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-white text-[10px] sm:text-xs font-medium">
                        Interactive Demo
                      </span>
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 sm:w-10 sm:h-10 border-t-2 border-l-2 border-primary/30 rounded-tl-xl sm:rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 border-b-2 border-r-2 border-primary/30 rounded-br-xl sm:rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>
            );
          })}
        </div>

    
      </Container>
    </section>
  );
}