"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const lives = [
  {
    date: "11/09/2025",
    title: "8 indicadores que revelam a verdade sobre seu time de desenvolvimento de software",
  },
  {
    date: "29/07/2025",
    title: "Performance de Sistemas: equilibrando responsabilidades entre aplicação e banco de dados",
  },
  {
    date: "16/07/2025",
    title: "MediatR: a história não contada! Entenda Mediator pattern sem MediatR",
  },
]

export function ContentSection() {
  return (
    <section id="conteudos" className="py-24 relative bg-secondary/30">
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
              Lives de conteúdos{" "}
              <span className="text-primary">técnicos</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Capacite seus times técnicos com as lives gratuitas disponíveis quinzenalmente em nosso canal do YouTube.
            </p>
          </div>
          <Button variant="outline" className="mt-6 lg:mt-0 border-border text-foreground hover:bg-secondary w-fit">
            Ver todos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        {/* Lives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lives.map((live, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full overflow-hidden">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-secondary/50 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Play className="w-7 h-7 text-primary ml-1" />
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                    <Calendar className="w-3 h-3" />
                    {live.date}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-foreground font-medium leading-snug line-clamp-2 mb-3">
                    {live.title}
                  </h3>
                  <button className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Assistir live
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
