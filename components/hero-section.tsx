"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/rotating-text";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-2">
      {/* 🎥 VÍDEO DE FUNDO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pt-16"
      >
        <source src="/video-banner02.webm" type="video/webm" />
      </video>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-[1]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse z-[1]" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse z-[1]"
        style={{ animationDelay: "1s" }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgb(255_255_255_/_0.03)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgb(255_255_255_/_0.03)_1px,_transparent_1px)] bg-[size:4rem_4rem] z-[1]" />

      <div className="container mx-auto px-6 relative z-10 mb-40">
        <div className="max-w-5xl mx-auto text-center font-bold">
          {/* HERO TEXT */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-2"
          >
            Tecnologia para impulsionar{" "}
            <RotatingText
              words={[
                "empresas",
                "negócios",
                "resultados",
                "inovação",
                "mudanças",
              ]}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-white max-w-3xl mx-auto mb-10"
          >
            Ajudamos empresas a utilizar a tecnologia do jeito certo para
            acelerar mudanças, reduzir custos e tornar o dia a dia mais
            eficiente.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-10"
          >
            <Button
              asChild
              size="lg"
              className="
            border border-white/20
            text-black
            py-6 px-8
            bg-cyan-500/90 
            hover:bg-cyan-400 
            hover:text-white rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.5)] font-bold

            "
            >
              <Link
                href="https://api.whatsapp.com/send?phone=5192364249&text=Olá!%20Quero%20falar%20com%20um%20consultor%20da%20Bora%20e%20entender%20como%20vocês%20podem%20ajudar%20meu%20negócio."
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com um consultor
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="
            border border-white/20 text-white py-6 px-8 hover:bg-gray-200 hover:text-blue-900 font-bold transition-all duration-300 rounded-xl"
            >
              <Link href="/servicos">Conheça nossos serviços</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
