// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Send, Mail, Phone, MapPin, Linkedin, Youtube, Instagram, CheckCircle2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

// const services = [
//   "Consultoria",
//   "Assessoria",
//   "Capacitação",
//   "Soluções Digitais",
//   "Fábrica de IAs",
// ]

// export function ContatoPageContent() {
//   const [selectedServices, setSelectedServices] = useState<string[]>([])

//   const toggleService = (service: string) => {
//     setSelectedServices((prev) =>
//       prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
//     )
//   }

//   return (
//     <>
//       {/* Hero */}
//       <section className="pt-32 pb-16 relative">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-3xl mx-auto text-center"
//           >
//             <span className="text-primary text-sm font-medium uppercase tracking-wider">Contato</span>
//             <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
//               Vamos conversar sobre o seu projeto?
//             </h1>
//             <p className="text-muted-foreground text-lg leading-relaxed">
//               Preencha o formulário abaixo ou entre em contato diretamente. 
//               Nosso time responde em até 24 horas úteis.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-3 gap-12">
//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="lg:col-span-1"
//             >
//               <div className="space-y-8">
//                 <div>
//                   <h2 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h2>
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-4">
//                       <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
//                         <Mail className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-muted-foreground text-sm">E-mail</p>
//                         <a href="mailto:contato@eximia.co" className="text-foreground hover:text-primary transition-colors">
//                           contato@eximia.co
//                         </a>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-4">
//                       <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
//                         <Phone className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-muted-foreground text-sm">Telefone</p>
//                         <a href="tel:+5511999999999" className="text-foreground hover:text-primary transition-colors">
//                           +55 (11) 99999-9999
//                         </a>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-4">
//                       <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
//                         <MapPin className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-muted-foreground text-sm">Localização</p>
//                         <p className="text-foreground">São Paulo, Brasil</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-foreground mb-4">Redes Sociais</h3>
//                   <div className="flex items-center gap-3">
//                     <a
//                       href="#"
//                       className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
//                       aria-label="LinkedIn"
//                     >
//                       <Linkedin className="w-5 h-5" />
//                     </a>
//                     <a
//                       href="#"
//                       className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
//                       aria-label="YouTube"
//                     >
//                       <Youtube className="w-5 h-5" />
//                     </a>
//                     <a
//                       href="#"
//                       className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
//                       aria-label="Instagram"
//                     >
//                       <Instagram className="w-5 h-5" />
//                     </a>
//                   </div>
//                 </div>

//                 <Card className="bg-primary/5 border-primary/20">
//                   <CardContent className="p-6">
//                     <h3 className="text-lg font-semibold text-foreground mb-2">Horário de Atendimento</h3>
//                     <p className="text-muted-foreground text-sm">
//                       Segunda a Sexta: 9h às 18h<br />
//                       Sábado e Domingo: Fechado
//                     </p>
//                   </CardContent>
//                 </Card>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="lg:col-span-2"
//             >
//               <Card className="bg-card border-border">
//                 <CardContent className="p-8">
//                   <h2 className="text-2xl font-bold text-foreground mb-6">Envie sua mensagem</h2>
//                   <form className="space-y-6">
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <FieldGroup>
//                         <Field>
//                           <FieldLabel>Nome completo</FieldLabel>
//                           <Input placeholder="Seu nome" className="bg-secondary border-border" />
//                         </Field>
//                       </FieldGroup>
//                       <FieldGroup>
//                         <Field>
//                           <FieldLabel>E-mail</FieldLabel>
//                           <Input type="email" placeholder="seu@email.com" className="bg-secondary border-border" />
//                         </Field>
//                       </FieldGroup>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-6">
//                       <FieldGroup>
//                         <Field>
//                           <FieldLabel>Telefone</FieldLabel>
//                           <Input type="tel" placeholder="(11) 99999-9999" className="bg-secondary border-border" />
//                         </Field>
//                       </FieldGroup>
//                       <FieldGroup>
//                         <Field>
//                           <FieldLabel>Empresa</FieldLabel>
//                           <Input placeholder="Nome da empresa" className="bg-secondary border-border" />
//                         </Field>
//                       </FieldGroup>
//                     </div>

//                     <FieldGroup>
//                       <Field>
//                         <FieldLabel>Serviços de interesse</FieldLabel>
//                         <div className="flex flex-wrap gap-2 mt-2">
//                           {services.map((service) => (
//                             <button
//                               key={service}
//                               type="button"
//                               onClick={() => toggleService(service)}
//                               className={`px-4 py-2 rounded-full text-sm transition-colors ${
//                                 selectedServices.includes(service)
//                                   ? "bg-primary text-primary-foreground"
//                                   : "bg-secondary text-muted-foreground hover:bg-secondary/80"
//                               }`}
//                             >
//                               {selectedServices.includes(service) && (
//                                 <CheckCircle2 className="w-4 h-4 inline mr-1" />
//                               )}
//                               {service}
//                             </button>
//                           ))}
//                         </div>
//                       </Field>
//                     </FieldGroup>

//                     <FieldGroup>
//                       <Field>
//                         <FieldLabel>Mensagem</FieldLabel>
//                         <Textarea
//                           placeholder="Conte-nos mais sobre seu projeto ou necessidade..."
//                           className="bg-secondary border-border min-h-[150px]"
//                         />
//                       </Field>
//                     </FieldGroup>

//                     <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
//                       Enviar mensagem
//                       <Send className="w-5 h-5 ml-2" />
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
