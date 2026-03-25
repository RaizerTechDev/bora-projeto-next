"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredArticle = {
  date: "03/02/2026",
  readTime: "8 min",
  author: "Elemar Jr.",
  title: "O Fim dos Frameworks JavaScript",
  excerpt: "Uma análise profunda sobre o futuro do desenvolvimento frontend e as alternativas emergentes. Com a evolução das plataformas web e o amadurecimento dos padrões, será que ainda precisamos de frameworks pesados?",
  category: "Frontend",
}

const articles = [
  {
    date: "03/02/2026",
    readTime: "6 min",
    author: "Equipe Eximia",
    title: "Micro Frontends: O Próximo Nível da Arquitetura Frontend",
    excerpt: "Por que adotar micro frontends e quando evitar essa abordagem arquitetural.",
    category: "Arquitetura",
  },
  {
    date: "03/02/2026",
    readTime: "5 min",
    author: "Elemar Jr.",
    title: "Por que a Complexidade Custa Caro?",
    excerpt: "Desmistificando erros em arquitetura e design com uma visão minimalista.",
    category: "Arquitetura",
  },
  {
    date: "02/02/2026",
    readTime: "7 min",
    author: "Equipe Eximia",
    title: "O Banco de Dados não é o Vilão",
    excerpt: "Por que a performance falha quando o sistema escala? Uma investigação detalhada.",
    category: "Performance",
  },
  {
    date: "30/01/2026",
    readTime: "4 min",
    author: "Elemar Jr.",
    title: "Escalar verticalmente na nuvem",
    excerpt: "Uma solução fácil que pode custar caro. Entenda os trade-offs dessa decisão.",
    category: "Infraestrutura",
  },
  {
    date: "26/01/2026",
    readTime: "6 min",
    author: "Equipe Eximia",
    title: "O Entity Framework não é lento",
    excerpt: "Você que está usando ele do jeito errado. Veja como otimizar suas queries.",
    category: ".NET",
  },
  {
    date: "22/01/2026",
    readTime: "8 min",
    author: "Elemar Jr.",
    title: "CQRS: Separando comandos de consultas",
    excerpt: "Quando e como aplicar o padrão CQRS em suas aplicações.",
    category: "Arquitetura",
  },
  {
    date: "18/01/2026",
    readTime: "5 min",
    author: "Equipe Eximia",
    title: "APIs RESTful: Boas práticas em 2026",
    excerpt: "O que mudou e o que continua relevante no design de APIs.",
    category: "API",
  },
  {
    date: "14/01/2026",
    readTime: "7 min",
    author: "Elemar Jr.",
    title: "Observabilidade: Além do monitoramento",
    excerpt: "Como construir sistemas verdadeiramente observáveis.",
    category: "DevOps",
  },
]

const categories = ["Todos", "Arquitetura", "Frontend", "Performance", "Infraestrutura", ".NET", "API", "DevOps"]

export function EncontroPageContent() {
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
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Artigos e Insights
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Acompanhe nossa jornada de conhecimento com artigos técnicos e de negócios 
              elaborados pelo nosso time de consultores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border sticky top-16 lg:top-20 bg-background/80 backdrop-blur-lg z-40">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-secondary/50 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/20">01</span>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {featuredArticle.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredArticle.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{featuredArticle.author}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.author}</span>
                      <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Ler
                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
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
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
              Carregar mais artigos
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
