"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Lightbulb, Users, GraduationCap, Code2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Lightbulb,
    title: "Consultoria",
    description: "Diagnóstico estratégico e visão de futuro para guiar sua empresa nas decisões mais importantes.",
  },
  {
    icon: Users,
    title: "Assessoria",
    description: "Evolução de suas soluções com segurança e eficiência com times de desenvolvimento personalizados.",
  },
  {
    icon: GraduationCap,
    title: "Capacitação",
    description: "Treinamentos sob medida para preparar sua equipe para os desafios da tecnologia.",
  },
  {
    icon: Code2,
    title: "Soluções Digitais",
    description: "Soluções sob demanda - da ideia ao código - com agilidade e escalabilidade.",
  },
]

export function HomeServicesPreview() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative">  
      <div className="container mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="
            text-sm font-medium uppercase tracking-wider
  bg-[linear-gradient(to_right,#00F5FF,#3B82F6)]
  bg-clip-text text-transparent
          ">O que fazemos</span>
          <h2 
            className={`text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance transition-all duration-700 ${
              isInView ? "bg-[linear-gradient(to_right,#00F5FF,#3B82F6,#1E3A8A)] bg-clip-text text-transparent"
        : "text-foreground"

            }`}
          >
            Preparamos sua empresa para o futuro
          </h2>
          <p className="text-muted-background text-lg max-w-2xl mx-auto">      
            Nem toda empresa é uma empresa de tecnologia, mas toda empresa depende dela.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="
              card-hover bg-card 
              border border-sky-500/40
  rounded-xl
  h-full cursor-pointer
  animate-neon-border-blue
  transition-all duration-300
    hover:border-transparent
  hover:bg-[linear-gradient(135deg,#0f172a,#1e3a8a,#1e40af)]
shadow-[0_0_25px_rgba(56,189,248,0.5)]
hover:shadow-[0_0_40px_rgba(56,189,248,0.8)]
 group-hover:scale-110
  
               group h-full 
               cursor-pointer
              ">

                <CardContent className="p-6">
                  <div className="w-14 h-14
                  bg-blue-500/10 rounded-xl flex items-center justify-center mb-6  group-hover:bg-cyan-400/20
      group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300">

                    {/* ÍCONE */}  
                    <service.icon className="w-7 h-7  text-blue-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />
                  </div>

                     {/* TÍTULO */}
                  <h3 className=" text-xl font-semibold mb-3
      text-cyan-300
      transition-all duration-300
      group-hover:text-white">        
                    {service.title}
                  </h3>

                   {/* DESCRIÇÃO */}
                  <p className="text-muted-background text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* CTA */}                                    
                  <div className="mt-4 flex items-center text-cyan-300 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
  
                    <Link href="https://api.whatsapp.com/send?phone=5192364249&text=Vamos%20conversar%20sobre%20o%20projeto%20Bora!"
                  target="_blank"
                  rel="noopener noreferrer"

                    className="text-sm font-medium">
                    Saiba mais
                    </Link>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >

          {/* BUTTON */}
          <Button asChild variant="outline" className="border border-blue-400/50
             text-cyan/400
             transition-all duration-300
                 hover:bg-[linear-gradient(135deg,#0f172a,#1e3a8a,#1e40af)]
              hover:text-blue-200           
                  font-bold">
       
            <Link href="/servicos">
              Ver todos os serviços
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
