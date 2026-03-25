import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesPageContent } from "@/components/services-page-content"

export const metadata: Metadata = {
  title: "Serviços | Bora",
  description: "Consultoria, Assessoria, Capacitação e Soluções Digitais para impulsionar sua empresa.",
}

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesPageContent />
      <Footer />
    </main>
  )
}
