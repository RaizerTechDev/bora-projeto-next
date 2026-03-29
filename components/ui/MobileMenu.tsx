"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

// Importamos os componentes necessários para acessibilidade
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/ia", label: "Fábrica de IAs" },
];

export function MobileMenu() {
  return (
    <Sheet>
      {/* BOTÃO QUE ABRE O MENU */}
      <SheetTrigger asChild>
        <button className="p-2 text-white outline-none hover:bg-white/10 rounded-lg transition-colors">
          <Menu size={28} />
        </button>
      </SheetTrigger>

      {/* CONTEÚDO DO MENU LATERAL */}
      <SheetContent
        side="right"
        className="w-[280px] sm:w-[320px] bg-gradient-to-b from-[#567CAB] to-[#2A4C75] text-white border-none flex flex-col p-6"
      >
        {/* 🔥 ISSO RESOLVE O ERRO VERMELHO DA SUA IMAGEM */}
        <SheetHeader className="text-left mb-8">
          <SheetTitle className="text-white text-xl font-bold">Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navegue pelas seções do nosso site.
          </SheetDescription>
        </SheetHeader>

        {/* LINKS DE NAVEGAÇÃO */}
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        {/* BOTÃO DE CTA (WHATSAPP) */}
        <div className="mt-auto pb-80">
          <SheetClose asChild>
            <Button
              className="w-full bg-gray-100 text-blue-900 hover:bg-cyan-500 hover:text-white rounded-xl transition-all
              shadow-[0_0_25px_rgba(0,255,255,0.5)]
                  hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]    
                  font-bold
                  h-12"
            >
              <Link
                href="https://api.whatsapp.com/send?phone=5192364249"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com um consultor
              </Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
