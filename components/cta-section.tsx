"use client"

import { motion } from "framer-motion"

import Link from "next/link"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] <header w-full min-h-screen 
      bg-[linear-gradient(to_bottom,#020617_0%,#1e3a8a_10%,#020617_100%)]
backdrop-blur-md border-b border-cyan-400/20 "/>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-3xl" />

      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            No futuro, teremos empresas{" "}

            <span className="text-cyan-400">AI First</span>, e empresas que deixarão de existir.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto font-bold">
            A performance do seu negócio está diretamente ligada às escolhas que você faz em tecnologia. 
            Nós ajudamos a transformar essas escolhas em vantagens competitivas.
          </p>

          <Link
  href="https://api.whatsapp.com/send?phone=5192364249&text=Vamos%20conversar%20sobre%20o%20projeto%20Bora!"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center justify-center
    gap-3
    px-4 py-3
    border border-blue-400/50
    bg-background
    text-white
    rounded-xl
    font-bold
    transition-all duration-300
    hover:bg-cyan-400
    hover:text-background
    shadow-[0_0_25px_rgba(0,255,255,0.5)]
    hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]
  "
>
  <span className="text-center">
    Prepare-se para a mudança
  </span>

  <ArrowRight className="w-5 h-5" />
</Link>
      </motion.div>
      </div>
    </section>
  )
}
