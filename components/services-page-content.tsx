"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Lightbulb, Users, GraduationCap, Code2, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Lightbulb,
    title: "Consultoria",
    description: "Diagnóstico estratégico e visão de futuro para guiar sua empresa nas decisões mais importantes da jornada digital.",
    features: [
      "Diagnóstico de maturidade tecnológica",
      "Roadmap de transformação digital",
      "Análise de arquitetura e performance",
      "Recomendações de stack tecnológico",
      "Assessment de equipes técnicas",
    ],
  },
  {
    icon: Users,
    title: "Assessoria",
    description: "Evolução de suas soluções com segurança e eficiência com times de desenvolvimento personalizados.",
    features: [
      "Times dedicados sob demanda",
      "Gestão técnica e acompanhamento",
      "Code review e boas práticas",
      "Mentoria para equipes internas",
      "Suporte contínuo e evolutivo",
    ],
  },
  {
    icon: GraduationCap,
    title: "Capacitação",
    description: "Treinamentos sob medida para preparar sua equipe para os desafios da tecnologia, com foco prático e aplicável.",
    features: [
      "Workshops técnicos personalizados",
      "Trilhas de aprendizado estruturadas",
      "Treinamentos in-company",
      "Certificações e avaliações",
      "Mentoria individual e em grupo",
    ],
  },
  {
    icon: Code2,
    title: "Soluções Digitais",
    description: "Soluções sob demanda - da ideia ao código - com agilidade, escalabilidade e aderência real ao seu negócio.",
    features: [
      "Desenvolvimento de aplicações web e mobile",
      "APIs e integrações",
      "Modernização de sistemas legados",
      "Automação de processos",
      "Soluções com inteligência artificial",
    ],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="card-hover bg-card border-border hover:border-primary overflow-hidden group">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 group-hover:neon-box transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h2 
                className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-500 ${
                  isInView ? 'text-primary neon-text-subtle' : 'text-foreground'
                }`}
              >
                {service.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                {service.description}
              </p>
              <Button asChild className="btn-neon bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contato">
                  Solicitar proposta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="p-8 lg:p-12 bg-secondary/30 flex items-center group-hover:bg-secondary/50 transition-colors duration-300">
              <ul className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 icon-glow" />
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function CTASection() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 text-balance transition-all duration-700 ${
              isInView ? 'text-primary neon-text' : 'text-foreground'
            }`}
          >
            Não sabe por onde começar?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Agende uma conversa gratuita com nossos consultores e descubra como podemos ajudar.
          </p>
          <Button asChild size="lg" className="btn-neon bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contato">
              Fale com um consultor
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export function ServicesPageContent() {
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
            <span className="text-primary text-sm font-medium uppercase tracking-wider neon-text-subtle">Serviços</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Transformamos desafios em soluções tecnológicas
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Oferecemos um portfólio completo de serviços para ajudar sua empresa a aproveitar 
              todo o potencial da tecnologia, desde o planejamento estratégico até a execução.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
