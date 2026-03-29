"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Users,
  GraduationCap,
  Code2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Lightbulb,
    title: "Consultoria",
    description:
      "Diagnóstico estratégico e visão de futuro para guiar sua empresa nas decisões mais importantes da jornada digital.",
  },
  {
    icon: Users,
    title: "Assessoria",
    description:
      "Evolução de suas soluções com segurança e eficiência com times de desenvolvimento personalizados.",
  },
  {
    icon: GraduationCap,
    title: "Capacitação",
    description:
      "Treinamentos sob medida para preparar sua equipe para os desafios da tecnologia, com foco prático e aplicável.",
  },
  {
    icon: Code2,
    title: "Soluções Digitais",
    description:
      "Soluções sob demanda - da ideia ao código - com agilidade, escalabilidade e aderência real ao seu negócio.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Preparamos sua empresa para o futuro
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nem toda empresa é uma empresa de tecnologia, mas toda empresa
            depende dela. Ser uma organização AI First não é mais uma escolha -
            é uma necessidade.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <button className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
