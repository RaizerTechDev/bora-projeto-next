"use client";

import { useState } from "react";
import { MobileMenu } from "@/components/ui/MobileMenu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { RotatingText } from "@/components/rotating-text";
import { ArrowRight } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50  <header bg-gradient-to-r from-[#131727]/80 via-[#28355A]/70 to-[#131727]/80 
backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              // style fixo para sumir o aviso do console e manter proporção
              src="/logo-bora.jpeg"
              alt="Bora Logo"
              width={60}
              height={40}
              style={{ width: "50px", height: "40px" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          {/* MENU DESKTOP */}
          <nav
            className="hidden lg:flex items-center gap-8 text-white font-medium
            "
          >
            <Link
              href="/servicos"
              className="hover:text-cyan-400 transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="/solucoes"
              className="hover:text-cyan-400 transition-colors"
            >
              Soluções
            </Link>
            <Link href="/ia" className="hover:text-cyan-400 transition-colors">
              Fábrica de IAs
            </Link>
          </nav>

          {/* BOTÃO DESKTOP */}

          <div className="hidden lg:block">
            <Button
              asChild
              className="
                  bg-cyan-500/90  
                  hover:bg-cyan-400

                  hover:text-white

                  transition-all duration-300
                  shadow-[0_0_25px_rgba(0,255,255,0.5)]
                  hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]    
                  font-bold
                "
            >
              <Link
                href="https://api.whatsapp.com/send?phone=5192364249&text=Olá!%20Quero%20falar%20com%20um%20especialista%20da%20empresa%20Bora."
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com um especilaista
              </Link>
            </Button>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
