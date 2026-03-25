"use client"

import { motion } from "framer-motion"
import { Play, Calendar, Clock, Youtube, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const lives = [
  {
    date: "11/09/2025",
    duration: "1h 30min",
    title: "8 indicadores que revelam a verdade sobre seu time de desenvolvimento de software",
    description: "Métricas essenciais para avaliar a saúde e performance do seu time de desenvolvimento.",
  },
  {
    date: "29/07/2025",
    duration: "1h 15min",
    title: "Performance de Sistemas: equilibrando responsabilidades entre aplicação e banco de dados",
    description: "Como distribuir corretamente a lógica entre aplicação e banco para máxima performance.",
  },
  {
    date: "16/07/2025",
    duration: "1h 45min",
    title: "MediatR: a história não contada! Entenda Mediator pattern sem MediatR",
    description: "Implementando o padrão Mediator do zero para entender sua essência.",
  },
  {
    date: "02/07/2025",
    duration: "1h 20min",
    title: "Domain-Driven Design na prática: Bounded Contexts e Context Mapping",
    description: "Como definir fronteiras claras entre domínios e mapear suas interações.",
  },
  {
    date: "18/06/2025",
    duration: "1h 30min",
    title: "Event Sourcing: quando usar e quando evitar",
    description: "Prós, contras e casos de uso reais de Event Sourcing em produção.",
  },
  {
    date: "04/06/2025",
    duration: "1h 15min",
    title: "Kubernetes para desenvolvedores: o que você realmente precisa saber",
    description: "Conceitos essenciais de K8s sem a complexidade desnecessária.",
  },
  {
    date: "21/05/2025",
    duration: "2h 00min",
    title: "Arquitetura de Microsserviços: erros comuns e como evitá-los",
    description: "Lições aprendidas em projetos reais de microsserviços.",
  },
  {
    date: "07/05/2025",
    duration: "1h 30min",
    title: "Clean Architecture: do conceito à implementação",
    description: "Implementando Clean Architecture em um projeto real passo a passo.",
  },
  {
    date: "23/04/2025",
    duration: "1h 45min",
    title: "GraphQL vs REST: quando usar cada um",
    description: "Análise comparativa com casos de uso práticos.",
  },
]

export function ConteudosPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Conteúdos</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Lives de conteúdos técnicos
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Capacite seus times técnicos com as lives gratuitas disponíveis quinzenalmente em nosso canal do YouTube. 
              Conteúdo prático, direto e aplicável.
            </p>
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 mr-2" />
                Acessar canal no YouTube
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lives Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lives.map((live, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full overflow-hidden">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-secondary/50 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors cursor-pointer">
                      <Play className="w-7 h-7 text-primary ml-1" />
                    </div>
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" />
                      {live.date}
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                      <Clock className="w-3 h-3" />
                      {live.duration}
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-foreground font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                      {live.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {live.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Não perca nenhuma live
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Inscreva-se no canal e ative as notificações para ser avisado sempre que uma nova live começar.
            </p>
            <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 mr-2" />
                Inscrever-se no canal
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
