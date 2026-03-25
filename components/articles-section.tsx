"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const articles = [
  {
    date: "03/02/2026",
    title: "O Fim dos Frameworks JavaScript",
    excerpt: "Uma análise profunda sobre o futuro do desenvolvimento frontend e as alternativas emergentes.",
  },
  {
    date: "03/02/2026",
    title: "Micro Frontends: O Próximo Nível da Arquitetura Frontend",
    excerpt: "Por que adotar micro frontends e quando evitar essa abordagem arquitetural.",
  },
  {
    date: "03/02/2026",
    title: "Por que a Complexidade Custa Caro?",
    excerpt: "Desmistificando erros em arquitetura e design com uma visão minimalista.",
  },
  {
    date: "02/02/2026",
    title: "O Banco de Dados não é o Vilão",
    excerpt: "Por que a performance falha quando o sistema escala? Uma investigação detalhada.",
  },
  {
    date: "30/01/2026",
    title: "Escalar verticalmente na nuvem",
    excerpt: "Uma solução fácil que pode custar caro. Entenda os trade-offs dessa decisão.",
  },
  {
    date: "26/01/2026",
    title: "O Entity Framework não é lento",
    excerpt: "Você que está usando ele do jeito errado. Veja como otimizar suas queries.",
  },
]

export function ArticlesSection() {
  return (
    <section id="artigos" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Últimos artigos e{" "}
              <span className="text-primary">insights</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Acompanhe nossa jornada de conhecimento com artigos técnicos e de negócios elaborados pelo nosso time de consultores.
            </p>
          </div>
          <Button variant="outline" className="mt-6 lg:mt-0 border-border text-foreground hover:bg-secondary w-fit">
            Ver todos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <button className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Ler artigo
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
