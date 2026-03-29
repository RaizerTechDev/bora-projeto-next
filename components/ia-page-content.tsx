"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Bot,
  MessageSquare,
  FileCode,
  Zap,
  Check,
  Brain,
  Workflow,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const features = [
  {
    icon: MessageSquare,
    title: "Interfaces Contextuais",
    description:
      "Interfaces que acompanham o contexto da tarefa e do colaborador, oferecendo suporte personalizado.",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    description:
      "Agentes de IA incorporados em ferramentas já utilizadas pelo seu time, sem fricção de adoção.",
  },
  {
    icon: FileCode,
    title: "Geração Inteligente",
    description:
      "Geração de áudio, texto, código, dados ou decisões em ambientes controlados e seguros.",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description:
      "Fluxos de trabalho automatizados que eliminam tarefas repetitivas e aumentam a produtividade.",
  },
];

const useCases = [
  {
    title: "Atendimento ao Cliente",
    description:
      "Chatbots inteligentes que entendem contexto e resolvem problemas reais.",
  },
  {
    title: "Análise de Documentos",
    description:
      "Extração automática de informações de contratos, relatórios e documentos.",
  },
  {
    title: "Assistente de Código",
    description:
      "Revisão de código, sugestões de melhorias e documentação automática.",
  },
  {
    title: "Previsão e Analytics",
    description: "Modelos preditivos para tomada de decisão baseada em dados.",
  },
  {
    title: "Automação de Relatórios",
    description:
      "Geração automática de relatórios e dashboards personalizados.",
  },
  {
    title: "Processamento de Linguagem",
    description: "Classificação, resumo e tradução de conteúdo em escala.",
  },
];

function FeaturesSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance transition-all duration-700 ${
              isInView
                ? "bg-[linear-gradient(to_right,#00F5FF,#3B82F6,#1E3A8A)] bg-clip-text text-transparent"
                : "text-foreground"
            }`}
          >
            IA que entende seu negócio
          </h2>
          <p className="text-muted-fbackground text-lg max-w-2xl mx-auto">
            Desenvolvemos soluções de inteligência artificial personalizadas
            para cada contexto e necessidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
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
 group-hover:scale-105  
               group h-full 
               cursor-pointer
      "
              >
                <CardContent className="p-6">
                  <div
                    className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6  group-hover:bg-cyan-400/20
      group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300"
                  >
                    <feature.icon className="w-7 h-7 text-blue-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300 " />
                  </div>

                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-4 text-cyan-300
      transition-all duration-300 group-hover:text-white" ${
        isInView
          ? "bg-[linear-gradient(to_right,#00F5FF,#3B82F6,#1E3A8A)] bg-clip-text text-transparent hover:text-white"
          : "text-foreground"
      }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-muted-background-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section
      id="casos"
      className="py-24 bg-[linear-gradient(to_bottom,#020617_0%,#1e3a8a_10%,#020617_100%)] backdrop-blur-md border-b border-cyan-400/20"
    >
      <div className="container mx-auto px-6 ">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance text-foreground ">
            Casos de Uso
          </h2>
          <p className="text-muted-background text-lg max-w-2xl mx-auto">
            Aplicações práticas de IA que já estão transformando empresas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl 
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
 group-hover:scale-105  
               group h-full 
               cursor-pointer
              "
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 
              bg-blue-500   
  group-hover:bg-background 
    group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]
    transition-all duration-300"
              >
                <Brain className="w-6 h-6 text-blue group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
              </div>

              <h3
                className="text-lg font-semibold text-foreground mb-2 
                   bg-[linear-gradient(to_right,#00F5FF,#3B82F6,#1E3A8A)] bg-clip-text text-transparent hover:text-white"
              >
                {useCase.title}
              </h3>
              <p className="text-muted-background text-sm group-hover:text-foreground/80 transition-colors duration-300">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance transition-all duration-700 ${
                isInView
                  ? "bg-[linear-gradient(to_right,#00F5FF,#3B82F6,#1E3A8A)] bg-clip-text text-transparent"
                  : "text-foreground"
              }`}
            >
              Por que a Fábrica de IAs?
            </h2>
            <p className="text-muted-background text-lg leading-relaxed mb-8">
              Não vendemos promessas genéricas. Entregamos soluções de IA que
              funcionam no seu contexto, com segurança, governança e resultados
              mensuráveis.
            </p>
            <ul className="space-y-4 ">
              {[
                "IA aplicada ao contexto real da sua empresa",
                "Integração com sistemas e ferramentas existentes",
                "Governança e segurança de dados",
                "ROI mensurável e escalabilidade",
                "Suporte contínuo e evolução",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5 icon-glow" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Brain, label: "Modelos customizados" },
              { icon: Shield, label: "Segurança garantida" },
              { icon: Zap, label: "Alta performance" },
              { icon: Workflow, label: "Integração total" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl text-center
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
                  className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 
                 group-hover:bg-cyan-400/20
      group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300
                "
                >
                  <item.icon className="w-7 h-7 text-blue-400  group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />
                </div>
                <span className="text-muted-background font-medium group-hover:text-foreground/80 transition-colors duration-300">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative ">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#020617_0%,#1e3a8a_10%,#020617_100%)] backdrop-blur-md border-b border-cyan-400/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className=" text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance text-foreground">
            Pronto para ser uma empresa AI First?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Agende uma sessão de descoberta gratuita e veja como a IA pode
            transformar seus processos.
          </p>
          <Button
            asChild
            size="lg"
            className="
         border border-white/20
            text-black 
            bg-cyan-500/90 
            hover:bg-cyan-400 
            hover:text-white rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.5)] font-bold
            "
          >
            <Link
              href="https://api.whatsapp.com/send?phone=5192364249&text=Olá!%20Vamos%20agendar%20uma%20demonstração%20sobre%20a%20IA!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar demonstração
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function IAPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Conheça nossa{" "}
                <span className="bg-[linear-gradient(to_right,#00F5FF,#3B82F6,#1E3A8A)] bg-clip-text text-transparent">
                  Fábrica de IAs
                </span>
              </h1>

              <p className="text-muted-background text-lg leading-relaxed mb-8">
                IA aplicada ao trabalho real, e não ao discurso genérico.
                Transformamos processos complexos em fluxos inteligentes e
                automatizados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="
            border border-white/20
            text-black py-6 px-8
            bg-cyan-500/90 
            hover:bg-cyan-400 
            hover:text-white rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.5)] font-bold

            "
                >
                  <Link
                    href="https://api.whatsapp.com/send?phone=5192364249&text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20para%20entender%20melhor%20as%20soluções%20da%20Fábrica%20de%20IAs!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fale com um consultor
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="btn-neon border-blue-400 text-foreground hover:bg-primary/10 hover:text-blue-500 hover:border-blue-500"
                >
                  <Link href="#casos">Ver casos de uso</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative 
             rounded-3xl border p-8 
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
 group-hover:scale-105
  
               group h-full 
               cursor-pointer
             
             ">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="group">
                      <div
                        className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center  
  group-hover:bg-background 
    group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]
    transition-all duration-300"
                      >
                        <Bot className="w-8 h-8 text-blue group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        AI Assistant
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Sempre pronto para ajudar
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-secondary rounded-2xl rounded-tl-sm p-4">
                      <p className="text-foreground text-sm">
                        Como posso otimizar os processos da minha equipe de
                        desenvolvimento?
                      </p>
                    </div>
                    <div className="bg-primary/10 rounded-2xl rounded-tr-sm p-4 ml-8 border border-primary/30">
                      <p className="text-foreground text-sm">
                        Analisando o contexto do seu time, recomendo implementar
                        automações para revisões de código e integrar agentes de
                        IA para documentação automática...
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 ml-8">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-blue-500  rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                    <span className="text-muted-foreground text-xs">
                      Processando...
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <UseCasesSection />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
