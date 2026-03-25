"use client"

import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Database, Layers, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    icon: Briefcase,
    title: "Negócio",
    description: "Unimos estratégia e tecnologia para acelerar resultados. Alinhamos soluções digitais às metas do seu negócio, preparando sua empresa para crescer em um mercado em constante mudança.",
  },
  {
    icon: Database,
    title: "Dados",
    description: "Transformamos dados em decisões inteligentes. Estruturamos, analisamos e traduzimos informações em insights que impulsionam inovação e performance.",
  },
  {
    icon: Layers,
    title: "Aplicações",
    description: "Integramos aplicações com propósito. Nossa expertise conecta ferramentas às metas do negócio, ampliando eficiência e abrindo novas possibilidades.",
  },
  {
    icon: Server,
    title: "Infraestrutura",
    description: "Tecnologia sob medida para escalar com segurança. Recomendamos infraestruturas robustas, flexíveis e alinhadas às demandas do seu crescimento.",
  },
]

export function SolutionsSection() {
  return (
    <section id="solucoes" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Soluções</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Engenharia de Alta Performance
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Soluções tecnológicas com engenharia de alto nível - onde cada decisão técnica considera 
            performance, segurança, escalabilidade e o impacto real para o negócio.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Conheça nossos serviços
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
