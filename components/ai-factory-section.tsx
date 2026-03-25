"use client"

import { motion } from "framer-motion"
import { ArrowRight, Bot, MessageSquare, FileCode, Zap, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: MessageSquare,
    text: "Interfaces que acompanham o contexto da tarefa e do colaborador",
  },
  {
    icon: Bot,
    text: "Agentes de IA incorporados em ferramentas já utilizadas",
  },
  {
    icon: FileCode,
    text: "Geração de áudio, texto, código, dados ou decisões em ambientes controlados",
  },
  {
    icon: Zap,
    text: "Alinhamento e produtividade para times técnicos",
  },
]

export function AIFactorySection() {
  return (
    <section id="ia" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Organizações AI First</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Conheça nossa{" "}
              <span className="text-primary">Fábrica de IAs</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              IA aplicada ao trabalho real, e não ao discurso genérico. 
              Transformamos processos complexos em fluxos inteligentes e automatizados.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/90">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Saiba mais
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl border border-border p-8 lg:p-12">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <Bot className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">AI Assistant</h3>
                    <p className="text-muted-foreground text-sm">Sempre pronto para ajudar</p>
                  </div>
                </div>

                {/* Chat Simulation */}
                <div className="space-y-4">
                  <div className="bg-secondary rounded-2xl rounded-tl-sm p-4">
                    <p className="text-foreground text-sm">
                      Como posso otimizar os processos da minha equipe de desenvolvimento?
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-2xl rounded-tr-sm p-4 ml-8">
                    <p className="text-foreground text-sm">
                      Analisando o contexto do seu time, recomendo implementar automações para revisões 
                      de código e integrar agentes de IA para documentação automática...
                    </p>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-center gap-2 mt-4 ml-8">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span className="text-muted-foreground text-xs">Processando...</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
