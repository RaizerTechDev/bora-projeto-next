"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Briefcase, Database, Layers, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const solutions = [
  {
    icon: Briefcase,
    title: "Negócio",
    description: "Estratégia e tecnologia para acelerar resultados.",
  },
  {
    icon: Database,
    title: "Dados",
    description: "Transformamos dados em decisões inteligentes.",
  },
  {
    icon: Layers,
    title: "Aplicações",
    description: "Integramos aplicações com propósito.",
  },
  {
    icon: Server,
    title: "Infraestrutura",
    description: "Tecnologia sob medida para escalar.",
  },
];

export function HomeSolutionsPreview() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="
                 text-sm font-medium uppercase tracking-wider
  bg-[linear-gradient(to_right,#00F5FF,#3B82F6)]
  bg-clip-text text-transparent
  "
            >
              Soluções
            </span>

            <h2
              className={`text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance transition-all duration-700 ${
                isInView
                  ? "bg-[linear-gradient(to_right,#00F5FF,#3B82F6,#1E3A8A)] bg-clip-text text-transparent"
                  : "text-foreground"
              }`}
            >
              Engenharia de Alta Performance
            </h2>

            <p className="text-muted-background text-lg mb-8 leading-relaxed">
              Soluções tecnológicas com engenharia de alto nível - onde cada
              decisão técnica considera performance, segurança, escalabilidade e
              o impacto real para o negócio.
            </p>

            <Button
              asChild
              className="bg-cyan-500/90  
                  hover:bg-cyan-400
                  hover:text-white
                  rounded-xl
                  transition-all duration-300
                  shadow-[0_0_25px_rgba(0,255,255,0.5)]
                  hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]    
                  font-bold"
            >
              <Link href="/solucoes">
                Conheça nossas soluções
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="
                 p-6 
                card-hover bg-card 
              border border-blue-500
              rounded-xl
              h-full cursor-pointer
              animate-neon-border-blue
              transition-all duration-300
                hover:border-transparent
              hover:bg-[linear-gradient(135deg,#0f172a,#1e3a8a,#1e40af)]
            shadow-[0_0_25px_rgba(56,189,248,0.5)]
            hover:shadow-[0_0_40px_rgba(56,189,248,0.8)]
            hover:scale-105
                "
              >
                <div
                  className="w-14 h-14
                  bg-blue-500/10 rounded-xl flex items-center justify-center mb-6  group-hover:bg-cyan-400/20
      group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300"
                >
                  <solution.icon className="w-7 h-7 text-blue-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />
                </div>

                <h3
                  className="text-lg md:text-xl font-semibold mb-3
      text-white/30
      transition-all duration-300
      group-hover:text-cyan-500"
                >
                  {solution.title}
                </h3>

                <p className="text-muted-background text-sm group-hover:text-foreground/80 transition-colors duration-300">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
