"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Briefcase,
  Database,
  Layers,
  Server,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const solutions = [
  {
    icon: Briefcase,
    title: "Negócio",
    description:
      "Unimos estratégia e tecnologia para acelerar resultados. Alinhamos soluções digitais às metas do seu negócio, preparando sua empresa para crescer em um mercado em constante mudança.",
    features: [
      "Alinhamento entre TI e objetivos de negócio",
      "Análise de processos e oportunidades",
      "Definição de KPIs e métricas",
      "Roadmap de transformação digital",
      "Gestão de mudanças organizacionais",
    ],
  },
  {
    icon: Database,
    title: "Dados",
    description:
      "Transformamos dados em decisões inteligentes. Estruturamos, analisamos e traduzimos informações em insights que impulsionam inovação e performance.",
    features: [
      "Arquitetura de dados moderna",
      "Data lakes e data warehouses",
      "Pipelines de dados em tempo real",
      "Business Intelligence e dashboards",
      "Machine Learning e analytics avançado",
    ],
  },
  {
    icon: Layers,
    title: "Aplicações",
    description:
      "Integramos aplicações com propósito. Nossa expertise conecta ferramentas às metas do negócio, ampliando eficiência e abrindo novas possibilidades.",
    features: [
      "Arquitetura de microsserviços",
      "APIs RESTful e GraphQL",
      "Integrações entre sistemas",
      "Modernização de aplicações legadas",
      "DevOps e CI/CD",
    ],
  },
  {
    icon: Server,
    title: "Infraestrutura",
    description:
      "Tecnologia sob medida para escalar com segurança. Recomendamos infraestruturas robustas, flexíveis e alinhadas às demandas do seu crescimento.",
    features: [
      "Cloud architecture (AWS, Azure, GCP)",
      "Kubernetes e containerização",
      "Infraestrutura como código (IaC)",
      "Monitoramento e observabilidade",
      "Segurança e compliance",
    ],
  },
];

function SolutionCard({
  solution,
  index,
}: {
  solution: (typeof solutions)[0];
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div
        className="
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
               group h-full 
               cursor-pointer
      "
      >
        <div className="relative p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div
                className="w-16 h-16 
              bg-blue-500/10 rounded-xl flex items-center justify-center mb-6  group-hover:bg-cyan-400/20
      group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300"
              >
                <solution.icon className="w-8 h-8 text-blue-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />
              </div>
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 text-blue-400 transition-all duration-300 group-hover:text-white" ${
        isInView
          ? "bg-[linear-gradient(to_right,#00F5FF,#3B82F6,#1E3A8A)] bg-clip-text text-transparent hover:text-white"
          : "text-foreground"
      }`}
              >
                {solution.title}
              </h2>

              <p className="text-muted-background text-lg leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                {solution.description}
              </p>

              <Button
                asChild
                className="
                   bg-cyan-500/90  hover:bg-cyan-400
                  hover:text-white
                  rounded-xl
                  transition-all duration-300
                  shadow-[0_0_25px_rgba(0,255,255,0.5)]
                  hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]    
                  font-bold
              "
              >
                <Link
                  href="https://api.whatsapp.com/send?phone=5192364249&text=Olá!%20Tenho%20interesse%20em%20entender%20como%20essas%20solução%20pode%20ser%20aplicada%20em%20minha%20empresa!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="bg-secondary/50 rounded-2xl p-6 lg:p-8 group-hover:bg-secondary/70 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-cyan-500 transition-colors duration-300">
                O que entregamos:
              </h3>
              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5 icon-glow" />
                    <span className="text-foreground/90">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CTASection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

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
            className={`text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance transition-all duration-700 ${
              isInView
                ? "bg-[linear-gradient(to_right,#00F5FF,#3B82F6,#1E3A8A)] bg-clip-text text-transparent"
                : "text-foreground"
            }`}
          >
            Pronto para elevar sua engenharia?
          </h2>
          <p className="text-muted-background text-lg mb-8">
            Vamos conversar sobre como nossas soluções podem transformar seu
            negócio.
          </p>

          <Button
            asChild
            size="lg"
            className="btn-neon bg-cyan-500 text-primary-foreground 
          hover:bg-gray-200 hover:text-blue font-bold
          "
          >
            <Link
              href="https://api.whatsapp.com/send?phone=5192364249&text=Olá!%20Quero%20falar%20com%20um%20especilista%20para%20entender%20como%20aplicar%20essa%20solução%20na%20minha%20empresa!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com um consultor
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function SolutionsPageContent() {
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
            <span
              className="text-sm 
              font-medium uppercase tracking-wider
            bg-[linear-gradient(to_right,#00F5FF,#3B82F6)]
            bg-clip-text text-transparent
            "
            >
              Soluções
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Engenharia de Alta Performance
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Soluções tecnológicas com engenharia de alto nível - onde cada
              decisão técnica considera performance, segurança, escalabilidade e
              o impacto real para o negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
