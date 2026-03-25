"use client"

import { motion } from "framer-motion"

export function StatsSection() {
  return (
     <section className="relative py-8 -mt-28 overflow-hidden bg-#131727-25%">

      {/* 🎨 Background gradiente */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#131727_8%,#28355A_80%,transparent_100%)] z-0" />

      {/* Glow opcional */}
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/10 blur-3xl rounded-full animate-pulse z-0" />

      <div className="container mx-auto px-6 relative z-10">

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-border/50 pt-2"
        >
          {[
            { value: "10+", label: "Anos de experiência" },
            { value: "200+", label: "Projetos entregues" },
            { value: "50+", label: "Clientes ativos" },
            { value: "98%", label: "Taxa de satisfação" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-default mb-2"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
                {/* 🔢 Número */}
              <div className="text-3xl md:text-4xl font-bold 
              text-cyan-400 
        drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]
        transition-all duration-300
        cursor:pointer
        group-hover:scale-110
        hover:text-white        
        ">
                {stat.value}
              </div>

               {/* 📝 Label */}
                  <div className="
        text-sm text-white  mt-2
        group-hover:text-cyan-400
        transition-colors
      ">
        {stat.label}
      </div>
             
            </motion.div>
          ))}
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  viewport={{ once: true }}
  className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20"
>
  <div className="w-6 h-9 rounded-full flex justify-center items-start
    bg-cyan-400/20 backdrop-blur-md 
    border border-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
  >
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
    />
  </div>
</motion.div>      

      </div>
    </section>
  )
}