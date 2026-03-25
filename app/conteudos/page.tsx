import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ConteudosPageContent } from "@/components/conteudos-page-content"

export const metadata: Metadata = {
  title: "Conteúdos | Eximia.co",
  description: "Lives de conteúdos técnicos disponíveis quinzenalmente em nosso canal do YouTube.",
}

export default function ConteudosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ConteudosPageContent />
      <Footer />
    </main>
  )
}
