// 'use client'

// import { motion } from 'framer-motion'
// import { Star } from 'lucide-react'

// export default function ProductBenefits() {
//   const benefits = [
//     {
//       title: 'Fast Data Extraction',
//       description: 'Convert form images to PDF or Excel in seconds, dramatically reducing manual entry time.',
//       iconColor: 'fill-accent text-accent',
//       stars: 5,
//     },
//     {
//       title: 'High Accuracy',
//       description: 'AI-powered OCR ensures reliable extraction even from handwritten or low-quality forms.',
//       iconColor: 'fill-accent text-accent',
//       stars: 5,
//     },
//     {
//       title: 'Seamless Workflow',
//       description: 'Integrate with your existing processes effortlessly — from image upload to structured outputs.',
//       iconColor: 'fill-accent text-accent',
//       stars: 5,
//     },
//   ]

//   return (
//     <section className="py-24 px-4 bg-gradient-to-b from-background via-accent/5 to-background">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Choose LuDa Lens</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             AI-assisted data extraction that saves time, reduces errors, and streamlines your workflow.
//           </p>
//         </motion.div>

//         {/* Benefits Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <motion.div
//               key={benefit.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all"
//             >
//               {/* Stars */}
//               <div className="flex gap-1 mb-4">
//                 {Array.from({ length: benefit.stars }).map((_, i) => (
//                   <Star key={i} size={16} className={benefit.iconColor} />
//                 ))}
//               </div>

//               {/* Description */}
//               <p className="text-muted-foreground mb-6 leading-relaxed italic">{benefit.description}</p>

//               {/* Title */}
//               <div>
//                 <p className="font-bold text-foreground">{benefit.title}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
