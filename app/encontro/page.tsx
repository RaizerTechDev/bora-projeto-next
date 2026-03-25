import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EncontroPageContent } from "@/components/encontro-page-content"

export const metadata: Metadata = {
  title: "Blog | Eximia.co",
  description: "Artigos técnicos e de negócios elaborados pelo nosso time de consultores.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <EncontroPageContent />
      <Footer />
    </main>
  )
}


