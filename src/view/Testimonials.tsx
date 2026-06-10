// // "use client";

// // import { useState, useEffect, useCallback } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Image from "next/image";
// // import clsx from "clsx";
// // import { Star } from "lucide-react";
// // import testimonialHero from "../assests/testimonial_hero.png";

// // const testimonials = [
// //   {
// //     name: "Vikram R.",
// //     location: "Andheri West",
// //     text: `"There's a peacefulness in the air now — it's hard to explain, but impossible to ignore."`,
// //     stars: 5,
// //     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// //   },
// //   {
// //     name: "Anita M.",
// //     location: "Kalyani Nagar",
// //     text: `"Knowing my family is breathing cleaner, natural air brings a peace of mind like no other."`,
// //     stars: 4,
// //     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
// //   },
// //   {
// //     name: "Pooja K.",
// //     location: "Bandra West",
// //     text: `"My headaches vanished, my sleep improved, and the space just feels alive again."`,
// //     stars: 5,
// //     avatar: "https://randomuser.me/api/portraits/women/68.jpg",
// //   },
// //   {
// //     name: "Radhika S.",
// //     location: "Hiranandani Gardens",
// //     text: `"Our house finally feels like a retreat. The difference is visible and tangible within days."`,
// //     stars: 5,
// //     avatar: "https://randomuser.me/api/portraits/women/12.jpg",
// //   },
// //   {
// //     name: "Nilesh D.",
// //     location: "Koregaon Park",
// //     text: `"It's like breathing fresh air for the first time. Our home feels lighter, calmer — truly transformed."`,
// //     stars: 4,
// //     avatar: "https://randomuser.me/api/portraits/men/46.jpg",
// //   },
// // ];

// // const fadeVariants = {
// //   enter: { opacity: 0, y: 10 },
// //   center: { opacity: 1, y: 0 },
// //   exit: { opacity: 0, y: -10 },
// // };

// // export default function Testimonials() {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [hoveredCard, setHoveredCard] = useState<"featured" | "preview" | null>(null);
// //   const [isPaused, setIsPaused] = useState(false);

// //   const total = testimonials.length;
// //   const featuredIdx = activeIndex;
// //   const previewIdx = (activeIndex + 1) % total;

// //   const featured = testimonials[featuredIdx];
// //   const preview = testimonials[previewIdx];

// //   const goToSlide = useCallback((idx: number) => {
// //     setActiveIndex(idx);
// //   }, []);

// //   const next = useCallback(() => {
// //     setActiveIndex((prev) => (prev + 1) % total);
// //   }, [total]);

// //   // 2 seconds auto-slide
// //   useEffect(() => {
// //     if (isPaused) return;
// //     const timer = setInterval(next, 2000);
// //     return () => clearInterval(timer);
// //   }, [isPaused, next]);

// //   const isFeaturedHovered = hoveredCard === "featured";
// //   const isPreviewHovered = hoveredCard === "preview";

// //   return (
// //     <section id="testimonials" className="relative overflow-hidden py-20 pb-24 bg-[rgb(var(--background))]">
// //       {/* Background blur blob */}
// //       <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[rgb(var(--primary))]/5 blur-[160px] pointer-events-none" />

// //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Header */}
// //         <motion.div
// //           className="mb-12"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //         >
// //           <span className="block mb-2 text-xs font-semibold uppercase tracking-widest text-[rgb(var(--primary-dark))]">
// //             What They Says
// //           </span>
// //           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[rgb(var(--foreground))]">
// //             Best Feedback From Clients
// //           </h2>
// //         </motion.div>

// //         {/* Cards Grid */}
// //         <motion.div
// //           className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-10 items-stretch"
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.15 }}
// //           viewport={{ once: true }}
// //         >
// //           {/* FEATURED CARD */}
// //           <div
// //             className="grid grid-cols-1 sm:grid-cols-[0.85fr_1fr] items-stretch min-h-[280px] sm:min-h-[320px]"
// //             onMouseEnter={() => {
// //               setHoveredCard("featured");
// //               setIsPaused(true);
// //             }}
// //             onMouseLeave={() => {
// //               setHoveredCard(null);
// //               setIsPaused(false);
// //             }}
// //           >
// //             {/* Image */}
// //             <div className="relative h-[220px] sm:h-auto overflow-hidden rounded-2xl group">
// //               <Image
// //                 src={testimonialHero}
// //                 alt="Happy clients discussing"
// //                 fill
// //                 sizes="(max-width: 640px) 100vw, 40vw"
// //                 className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
// //                 priority
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 pointer-events-none" />
// //             </div>

// //             {/* Overlapping Text Panel */}
// //             <div
// //               className={clsx(
// //                 "relative z-10 flex flex-col justify-center p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg -mt-6 sm:mt-0 sm:-ml-12 lg:-ml-16 transition-colors duration-500 ease-in-out",
// //                 isFeaturedHovered ? "bg-[rgb(var(--primary-dark))] shadow-[0_8px_30px_rgba(5,150,105,0.25)]" : "bg-[#f8f9fa]"
// //               )}
// //             >
// //               <AnimatePresence mode="wait">
// //                 <motion.div
// //                   key={`featured-${featuredIdx}`}
// //                   variants={fadeVariants}
// //                   initial="enter"
// //                   animate="center"
// //                   exit="exit"
// //                   transition={{ duration: 0.35, ease: "easeInOut" }}
// //                   className="flex flex-col"
// //                 >
// //                   {/* Stars */}
// //                   <div className="flex gap-[2px]">
// //                     {Array.from({ length: 5 }).map((_, i) => (
// //                       <Star
// //                         key={i}
// //                         size={18}
// //                         className={clsx(
// //                           "transition-colors duration-300",
// //                           i < featured.stars
// //                             ? "fill-[#F59E0B] text-[#F59E0B]"
// //                             : isFeaturedHovered
// //                             ? "fill-white/30 text-white/30"
// //                             : "fill-gray-300 text-gray-300"
// //                         )}
// //                       />
// //                     ))}
// //                   </div>

// //                   {/* Text */}
// //                   <p
// //                     className={clsx(
// //                       "mt-4 text-sm sm:text-base italic leading-relaxed transition-colors duration-500",
// //                       isFeaturedHovered ? "text-white/90" : "text-gray-600"
// //                     )}
// //                   >
// //                     {featured.text}
// //                   </p>

// //                   {/* Author */}
// //                   <div className="flex items-center gap-3 mt-6">
// //                     <div className={clsx(
// //                       "w-11 h-11 rounded-full overflow-hidden border-2 transition-colors duration-500",
// //                       isFeaturedHovered ? "border-[rgb(var(--primary-light))]" : "border-white shadow-sm"
// //                     )}>
// //                       <img src={featured.avatar} alt={featured.name} className="w-full h-full object-cover" />
// //                     </div>
// //                     <div>
// //                       <p
// //                         className={clsx(
// //                           "text-sm font-bold transition-colors duration-500",
// //                           isFeaturedHovered ? "text-white" : "text-gray-900"
// //                         )}
// //                       >
// //                         {featured.name}
// //                       </p>
// //                       <p className={clsx(
// //                         "text-[0.7rem] font-bold uppercase tracking-[0.15em] transition-colors duration-500",
// //                         isFeaturedHovered ? "text-[rgb(var(--primary-light))]" : "text-gray-500"
// //                       )}>
// //                         Clients
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               </AnimatePresence>
// //             </div>
// //           </div>

// //           {/* PREVIEW CARD */}
// //           <div
// //             className={clsx(
// //               "flex flex-col justify-center p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm transition-all duration-500 ease-in-out",
// //               isPreviewHovered ? "bg-[rgb(var(--primary-dark))] shadow-[0_8px_30px_rgba(5,150,105,0.25)] -translate-y-1" : "bg-[#f8f9fa] hover:shadow-md hover:-translate-y-0.5"
// //             )}
// //             onMouseEnter={() => {
// //               setHoveredCard("preview");
// //               setIsPaused(true);
// //             }}
// //             onMouseLeave={() => {
// //               setHoveredCard(null);
// //               setIsPaused(false);
// //             }}
// //           >
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={`preview-${previewIdx}`}
// //                 variants={fadeVariants}
// //                 initial="enter"
// //                 animate="center"
// //                 exit="exit"
// //                 transition={{ duration: 0.35, ease: "easeInOut" }}
// //                 className="flex flex-col"
// //               >
// //                 {/* Stars */}
// //                 <div className="flex gap-[2px]">
// //                   {Array.from({ length: 5 }).map((_, i) => (
// //                     <Star
// //                       key={i}
// //                       size={18}
// //                       className={clsx(
// //                         "transition-colors duration-300",
// //                         i < preview.stars
// //                           ? "fill-[#F59E0B] text-[#F59E0B]"
// //                           : isPreviewHovered
// //                           ? "fill-white/30 text-white/30"
// //                           : "fill-gray-300 text-gray-300"
// //                       )}
// //                     />
// //                   ))}
// //                 </div>

// //                 {/* Text */}
// //                 <p
// //                   className={clsx(
// //                     "mt-4 text-sm sm:text-base italic leading-relaxed transition-colors duration-500",
// //                     isPreviewHovered ? "text-white/90" : "text-gray-600"
// //                   )}
// //                 >
// //                   {preview.text}
// //                 </p>

// //                 {/* Author */}
// //                 <div className="flex items-center gap-3 mt-6">
// //                   <div className={clsx(
// //                     "w-11 h-11 rounded-full overflow-hidden border-2 transition-colors duration-500",
// //                     isPreviewHovered ? "border-[rgb(var(--primary-light))]" : "border-white shadow-sm"
// //                   )}>
// //                     <img src={preview.avatar} alt={preview.name} className="w-full h-full object-cover" />
// //                   </div>
// //                   <div>
// //                     <p
// //                       className={clsx(
// //                         "text-sm font-bold transition-colors duration-500",
// //                         isPreviewHovered ? "text-white" : "text-gray-900"
// //                       )}
// //                     >
// //                       {preview.name}
// //                     </p>
// //                     <p className={clsx(
// //                       "text-[0.7rem] font-bold uppercase tracking-[0.15em] transition-colors duration-500",
// //                       isPreviewHovered ? "text-[rgb(var(--primary-light))]" : "text-gray-500"
// //                     )}>
// //                       Clients
// //                     </p>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>
// //         </motion.div>

// //         {/* Navigation Dots */}
// //         <div className="flex justify-center gap-2 mt-10">
// //           {testimonials.map((_, i) => (
// //             <button
// //               key={i}
// //               aria-label={`Go to testimonial ${i + 1}`}
// //               className={clsx(
// //                 "h-2.5 rounded-full transition-all duration-300 ease-out",
// //                 activeIndex === i
// //                   ? "w-8 bg-[rgb(var(--primary))] shadow-[0_2px_8px_rgba(34,197,94,0.4)]"
// //                   : "w-2.5 bg-gray-300 hover:bg-[rgb(var(--primary-light))] hover:scale-125"
// //               )}
// //               onClick={() => goToSlide(i)}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import clsx from "clsx";
// import { Star, ChevronLeft, ChevronRight } from "lucide-react";
// import testimonialHero from "../assests/testimonial_hero.png";

// const testimonials = [
//   {
//     name: "Vikram R.",
//     location: "Andheri West",
//     text: `"There's a peacefulness in the air now — it's hard to explain, but impossible to ignore."`,
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Anita M.",
//     location: "Kalyani Nagar",
//     text: `"Knowing my family is breathing cleaner, natural air brings a peace of mind like no other."`,
//     stars: 4,
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Pooja K.",
//     location: "Bandra West",
//     text: `"My headaches vanished, my sleep improved, and the space just feels alive again."`,
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
//   {
//     name: "Radhika S.",
//     location: "Hiranandani Gardens",
//     text: `"Our house finally feels like a retreat. The difference is visible and tangible within days."`,
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/women/12.jpg",
//   },
//   {
//     name: "Nilesh D.",
//     location: "Koregaon Park",
//     text: `"It's like breathing fresh air for the first time. Our home feels lighter, calmer — truly transformed."`,
//     stars: 4,
//     avatar: "https://randomuser.me/api/portraits/men/46.jpg",
//   },
// ];

// const fadeVariants = {
//   enter: { opacity: 0, x: 30 },
//   center: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: -30 },
// };

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoveredCard, setHoveredCard] = useState<"featured" | "preview" | null>(null);
//   const [isPaused, setIsPaused] = useState(false);

//   const total = testimonials.length;
//   const featuredIdx = activeIndex;
//   const previewIdx = (activeIndex + 1) % total;

//   const featured = testimonials[featuredIdx];
//   const preview = testimonials[previewIdx];

//   const goToSlide = useCallback((idx: number) => {
//     setActiveIndex(idx);
//   }, []);

//   const next = useCallback(() => {
//     setActiveIndex((prev) => (prev + 1) % total);
//   }, [total]);

//   const prev = useCallback(() => {
//     setActiveIndex((prev) => (prev - 1 + total) % total);
//   }, [total]);

//   // 3 seconds auto-slide from left to right
//   useEffect(() => {
//     if (isPaused) return;
//     const timer = setInterval(next, 3000);
//     return () => clearInterval(timer);
//   }, [isPaused, next]);

//   const isFeaturedHovered = hoveredCard === "featured";
//   const isPreviewHovered = hoveredCard === "preview";

//   return (
//     <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20 pb-20 sm:pb-24 bg-[rgb(var(--background))]">
//       {/* Background blur blob */}
//       <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[rgb(var(--primary))]/5 blur-[160px] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           className="mb-8 sm:mb-12 text-center sm:text-left"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <span className="block mb-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[rgb(var(--primary-dark))]">
//             What They Says
//           </span>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[rgb(var(--foreground))]">
//             Best Feedback From Clients
//           </h2>
//         </motion.div>

//         {/* Cards Grid - Horizontal Layout with Auto Slide */}
//         <motion.div
//           className="relative"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.15 }}
//           viewport={{ once: true }}
//         >
//           {/* Navigation Arrows */}
//           <button
//             onClick={() => { prev(); setIsPaused(true); setTimeout(() => setIsPaused(false), 5000); }}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[rgb(var(--primary))] hover:text-white transition-all duration-300 group"
//             aria-label="Previous"
//           >
//             <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//           </button>
          
//           <button
//             onClick={() => { next(); setIsPaused(true); setTimeout(() => setIsPaused(false), 5000); }}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[rgb(var(--primary))] hover:text-white transition-all duration-300 group"
//             aria-label="Next"
//           >
//             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//           </button>

//           <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-10 items-stretch">
//             {/* FEATURED CARD */}
//             <div
//               className="grid grid-cols-1 sm:grid-cols-[0.85fr_1fr] items-stretch min-h-[280px] sm:min-h-[320px]"
//               onMouseEnter={() => {
//                 setHoveredCard("featured");
//                 setIsPaused(true);
//               }}
//               onMouseLeave={() => {
//                 setHoveredCard(null);
//                 setIsPaused(false);
//               }}
//             >
//               {/* Image */}
//               <div className="relative h-[200px] sm:h-[260px] md:h-[300px] lg:h-auto overflow-hidden rounded-2xl group">
//                 <Image
//                   src={testimonialHero}
//                   alt="Happy clients discussing"
//                   fill
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 30vw"
//                   className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   priority
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 pointer-events-none" />
//               </div>

//               {/* Overlapping Text Panel */}
//               <div
//                 className={clsx(
//                   "relative z-10 flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg -mt-6 sm:mt-0 sm:-ml-8 md:-ml-12 lg:-ml-16 transition-colors duration-500 ease-in-out",
//                   isFeaturedHovered ? "bg-[rgb(var(--primary-dark))] shadow-[0_8px_30px_rgba(5,150,105,0.25)]" : "bg-[#f8f9fa]"
//                 )}
//               >
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`featured-${featuredIdx}`}
//                     variants={fadeVariants}
//                     initial="enter"
//                     animate="center"
//                     exit="exit"
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                     className="flex flex-col"
//                   >
//                     {/* Stars */}
//                     <div className="flex gap-[2px]">
//                       {Array.from({ length: 5 }).map((_, i) => (
//                         <Star
//                           key={i}
//                           size={16}
//                           className={clsx(
//                             "transition-colors duration-300",
//                             i < featured.stars
//                               ? "fill-[#F59E0B] text-[#F59E0B]"
//                               : isFeaturedHovered
//                               ? "fill-white/30 text-white/30"
//                               : "fill-gray-300 text-gray-300"
//                           )}
//                         />
//                       ))}
//                     </div>

//                     {/* Text */}
//                     <p
//                       className={clsx(
//                         "mt-3 sm:mt-4 text-sm sm:text-base italic leading-relaxed transition-colors duration-500",
//                         isFeaturedHovered ? "text-white/90" : "text-gray-600"
//                       )}
//                     >
//                       {featured.text}
//                     </p>

//                     {/* Author */}
//                     <div className="flex items-center gap-3 mt-4 sm:mt-6">
//                       <div className={clsx(
//                         "w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 transition-colors duration-500 flex-shrink-0",
//                         isFeaturedHovered ? "border-[rgb(var(--primary-light))]" : "border-white shadow-sm"
//                       )}>
//                         <img src={featured.avatar} alt={featured.name} className="w-full h-full object-cover" />
//                       </div>
//                       <div>
//                         <p
//                           className={clsx(
//                             "text-sm font-bold transition-colors duration-500",
//                             isFeaturedHovered ? "text-white" : "text-gray-900"
//                           )}
//                         >
//                           {featured.name}
//                         </p>
//                         <p className={clsx(
//                           "text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.15em] transition-colors duration-500",
//                           isFeaturedHovered ? "text-[rgb(var(--primary-light))]" : "text-gray-500"
//                         )}>
//                           Clients
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* PREVIEW CARD */}
//             <div
//               className={clsx(
//                 "flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-sm transition-all duration-500 ease-in-out",
//                 isPreviewHovered ? "bg-[rgb(var(--primary-dark))] shadow-[0_8px_30px_rgba(5,150,105,0.25)] -translate-y-1" : "bg-[#f8f9fa] hover:shadow-md hover:-translate-y-0.5"
//               )}
//               onMouseEnter={() => {
//                 setHoveredCard("preview");
//                 setIsPaused(true);
//               }}
//               onMouseLeave={() => {
//                 setHoveredCard(null);
//                 setIsPaused(false);
//               }}
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`preview-${previewIdx}`}
//                   variants={fadeVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="flex flex-col"
//                 >
//                   {/* Stars */}
//                   <div className="flex gap-[2px]">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <Star
//                         key={i}
//                         size={16}
//                         className={clsx(
//                           "transition-colors duration-300",
//                           i < preview.stars
//                             ? "fill-[#F59E0B] text-[#F59E0B]"
//                             : isPreviewHovered
//                             ? "fill-white/30 text-white/30"
//                             : "fill-gray-300 text-gray-300"
//                         )}
//                       />
//                     ))}
//                   </div>

//                   {/* Text */}
//                   <p
//                     className={clsx(
//                       "mt-3 sm:mt-4 text-sm sm:text-base italic leading-relaxed transition-colors duration-500",
//                       isPreviewHovered ? "text-white/90" : "text-gray-600"
//                     )}
//                   >
//                     {preview.text}
//                   </p>

//                   {/* Author */}
//                   <div className="flex items-center gap-3 mt-4 sm:mt-6">
//                     <div className={clsx(
//                       "w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 transition-colors duration-500 flex-shrink-0",
//                       isPreviewHovered ? "border-[rgb(var(--primary-light))]" : "border-white shadow-sm"
//                     )}>
//                       <img src={preview.avatar} alt={preview.name} className="w-full h-full object-cover" />
//                     </div>
//                     <div>
//                       <p
//                         className={clsx(
//                           "text-sm font-bold transition-colors duration-500",
//                           isPreviewHovered ? "text-white" : "text-gray-900"
//                         )}
//                       >
//                         {preview.name}
//                       </p>
//                       <p className={clsx(
//                         "text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.15em] transition-colors duration-500",
//                         isPreviewHovered ? "text-[rgb(var(--primary-light))]" : "text-gray-500"
//                       )}>
//                         Clients
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </motion.div>

//         {/* Navigation Dots */}
//         <div className="flex justify-center gap-2 mt-8 sm:mt-10">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               aria-label={`Go to testimonial ${i + 1}`}
//               className={clsx(
//                 "h-2 rounded-full transition-all duration-300 ease-out",
//                 activeIndex === i
//                   ? "w-6 sm:w-8 bg-[rgb(var(--primary))] shadow-[0_2px_8px_rgba(34,197,94,0.4)]"
//                   : "w-2 bg-gray-300 hover:bg-[rgb(var(--primary-light))] hover:scale-125"
//               )}
//               onClick={() => goToSlide(i)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import testimonialHero from "../assests/testimonial_hero.png";

const testimonials = [
  {
    name: "Vikram R.",
    location: "Andheri West",
    text: `"There's a peacefulness in the air now — it's hard to explain, but impossible to ignore."`,
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anita M.",
    location: "Kalyani Nagar",
    text: `"Knowing my family is breathing cleaner, natural air brings a peace of mind like no other."`,
    stars: 4,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Pooja K.",
    location: "Bandra West",
    text: `"My headaches vanished, my sleep improved, and the space just feels alive again."`,
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Radhika S.",
    location: "Hiranandani Gardens",
    text: `"Our house finally feels like a retreat. The difference is visible and tangible within days."`,
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Nilesh D.",
    location: "Koregaon Park",
    text: `"It's like breathing fresh air for the first time. Our home feels lighter, calmer — truly transformed."`,
    stars: 4,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const fadeVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<"featured" | "preview" | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;
  const featuredIdx = activeIndex;
  const previewIdx = (activeIndex + 1) % total;

  const featured = testimonials[featuredIdx];
  const preview = testimonials[previewIdx];

  const goToSlide = useCallback((idx: number) => {
    setActiveIndex(idx);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // 3 seconds auto-slide from left to right
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const isFeaturedHovered = hoveredCard === "featured";
  const isPreviewHovered = hoveredCard === "preview";

  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20 pb-20 sm:pb-24 bg-[rgb(var(--background))]">
      {/* Background blur blob */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[rgb(var(--primary))]/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="block mb-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[rgb(var(--primary-dark))]">
            What They Says
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[rgb(var(--foreground))]">
            Best Feedback From Clients
          </h2>
        </motion.div>

        {/* Cards Grid - Horizontal Layout with Auto Slide */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={() => { prev(); setIsPaused(true); setTimeout(() => setIsPaused(false), 5000); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[rgb(var(--primary))] hover:text-white transition-all duration-300 group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <button
            onClick={() => { next(); setIsPaused(true); setTimeout(() => setIsPaused(false), 5000); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[rgb(var(--primary))] hover:text-white transition-all duration-300 group"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-10 items-stretch">
            {/* FEATURED CARD */}
            <div
              className="grid grid-cols-1 sm:grid-cols-[0.85fr_1fr] items-stretch min-h-[280px] sm:min-h-[320px]"
              onMouseEnter={() => {
                setHoveredCard("featured");
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                setIsPaused(false);
              }}
            >
              {/* Image */}
              <div className="relative h-[200px] sm:h-[260px] md:h-[300px] lg:h-auto overflow-hidden rounded-2xl group">
                <Image
                  src={testimonialHero}
                  alt="Happy clients discussing"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 pointer-events-none" />
              </div>

              {/* Overlapping Text Panel */}
              <div
                className={clsx(
                  "relative z-10 flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg -mt-6 sm:mt-0 sm:-ml-8 md:-ml-12 lg:-ml-16 transition-colors duration-500 ease-in-out",
                  isFeaturedHovered ? "bg-[rgb(var(--primary-dark))] shadow-[0_8px_30px_rgba(5,150,105,0.25)]" : "bg-[#f8f9fa]"
                )}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`featured-${featuredIdx}`}
                    variants={fadeVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col"
                  >
                    {/* Stars */}
                    <div className="flex gap-[2px]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={clsx(
                            "transition-colors duration-300",
                            i < featured.stars
                              ? "fill-[#F59E0B] text-[#F59E0B]"
                              : isFeaturedHovered
                              ? "fill-white/30 text-white/30"
                              : "fill-gray-300 text-gray-300"
                          )}
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p
                      className={clsx(
                        "mt-3 sm:mt-4 text-sm sm:text-base italic leading-relaxed transition-colors duration-500",
                        isFeaturedHovered ? "text-white/90" : "text-gray-600"
                      )}
                    >
                      {featured.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-4 sm:mt-6">
                      <div className={clsx(
                        "w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 transition-colors duration-500 flex-shrink-0",
                        isFeaturedHovered ? "border-[rgb(var(--primary-light))]" : "border-white shadow-sm"
                      )}>
                        <img src={featured.avatar} alt={featured.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p
                          className={clsx(
                            "text-sm font-bold transition-colors duration-500",
                            isFeaturedHovered ? "text-white" : "text-gray-900"
                          )}
                        >
                          {featured.name}
                        </p>
                        <p className={clsx(
                          "text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.15em] transition-colors duration-500",
                          isFeaturedHovered ? "text-[rgb(var(--primary-light))]" : "text-gray-500"
                        )}>
                          Clients
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* PREVIEW CARD */}
            <div
              className={clsx(
                "flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-sm transition-all duration-500 ease-in-out",
                isPreviewHovered ? "bg-[rgb(var(--primary-dark))] shadow-[0_8px_30px_rgba(5,150,105,0.25)] -translate-y-1" : "bg-[#f8f9fa] hover:shadow-md hover:-translate-y-0.5"
              )}
              onMouseEnter={() => {
                setHoveredCard("preview");
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                setIsPaused(false);
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`preview-${previewIdx}`}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={clsx(
                          "transition-colors duration-300",
                          i < preview.stars
                            ? "fill-[#F59E0B] text-[#F59E0B]"
                            : isPreviewHovered
                            ? "fill-white/30 text-white/30"
                            : "fill-gray-300 text-gray-300"
                        )}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p
                    className={clsx(
                      "mt-3 sm:mt-4 text-sm sm:text-base italic leading-relaxed transition-colors duration-500",
                      isPreviewHovered ? "text-white/90" : "text-gray-600"
                    )}
                  >
                    {preview.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-4 sm:mt-6">
                    <div className={clsx(
                      "w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 transition-colors duration-500 flex-shrink-0",
                      isPreviewHovered ? "border-[rgb(var(--primary-light))]" : "border-white shadow-sm"
                    )}>
                      <img src={preview.avatar} alt={preview.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p
                        className={clsx(
                          "text-sm font-bold transition-colors duration-500",
                          isPreviewHovered ? "text-white" : "text-gray-900"
                        )}
                      >
                        {preview.name}
                      </p>
                      <p className={clsx(
                        "text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.15em] transition-colors duration-500",
                        isPreviewHovered ? "text-[rgb(var(--primary-light))]" : "text-gray-500"
                      )}>
                        Clients
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              className={clsx(
                "h-2 rounded-full transition-all duration-300 ease-out",
                activeIndex === i
                  ? "w-6 sm:w-8 bg-[rgb(var(--primary))] shadow-[0_2px_8px_rgba(34,197,94,0.4)]"
                  : "w-2 bg-gray-300 hover:bg-[rgb(var(--primary-light))] hover:scale-125"
              )}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}