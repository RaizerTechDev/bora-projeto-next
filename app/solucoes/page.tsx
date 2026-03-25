import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionsPageContent } from "@/components/solutions-page-content"

export const metadata: Metadata = {
  title: "Soluções | Bora",
  description: "Engenharia de Alta Performance para Negócio, Dados, Aplicações e Infraestrutura.",
}

export default function SolucoesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SolutionsPageContent />
      <Footer />
    </main>
  )
}
