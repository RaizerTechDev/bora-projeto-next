import Link from "next/link"
import { Youtube, Linkedin, Instagram } from "lucide-react"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-16 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
         
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
                   <Image
                         // style fixo para sumir o aviso do console e manter proporção
                           src="/logo-bora.jpeg"
                            alt="Bora Logo"
                          width={60}
                          height={40}
                          style={{ width: '50px', height: '40px' }}
                          priority
                        />            
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tecnologia para impulsionar a mudança. Ajudamos empresas a utilizar a tecnologia do jeito certo.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/servicos" className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                  Consultoria
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                  Assessoria
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                  Capacitação
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                  Soluções Digitais
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/solucoes" className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                  Negócio
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                  Dados
                </Link>
              </li>           
              <li>
                <Link href="/solucoes" className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                Aplicações 
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                  Infraestrutura
                </Link>
              </li>
              <li>
                <Link href="/ia" className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                  Fábrica de IAs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Conteúdo</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/conteudos" className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                  Lives
                </Link>
              </li>
              <li>
                <Link href="/encontro" className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                  Encontros
                </Link>
              </li>
              <li>
                <Link href="https://api.whatsapp.com/send?phone=5192364249&text=Vamos%20conversar%20sobre%20o%20projeto%20Bora!"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-cyan-300 text-sm transition-colors">
                    
                  Fale com um consultor
                </Link>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-cyan-500                 
                hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]
                hover:bg-primary/10 transition-colors"

                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              
              <Link                
                href="https://www.linkedin.com/in/lucasfogliarini/" 
                  target="_blank"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground 
                hover:text-cyan-500                 
                hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]
                hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/bora-earth/"
                  target="_blank"

                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground    hover:text-cyan-500                 
                hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]
                hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} bora. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
