import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IAPageContent } from "@/components/ia-page-content"

export const metadata: Metadata = {
  title: "Fábrica de IAs | Eximia.co",
  description: "IA aplicada ao trabalho real. Transformamos processos complexos em fluxos inteligentes e automatizados.",
}

export default function IAPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <IAPageContent />
      <Footer />
    </main>
  )
}
