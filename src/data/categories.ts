import catBolos from "@/assets/cat-bolos.webp";
import catSalgados from "@/assets/cat-salgados.webp";
import catDoces from "@/assets/cat-doces.webp";
import catKits from "@/assets/cat-kits.webp";
import catAcai from "@/assets/cat-acai.webp";
import catTortas from "@/assets/cat-tortas.webp";

import bolo1 from "@/assets/bolo-1.webp";
import bolo2 from "@/assets/bolo-2.webp";
import bolo3 from "@/assets/bolo-3.webp";
import bolo4 from "@/assets/bolo-4.webp";
import bolo5 from "@/assets/bolo-5.webp";
import bolo6 from "@/assets/bolo-6.webp";

// Re-use some images for other categories as placeholders
import heroSalgados from "@/assets/hero-salgados.webp";
import heroDoces from "@/assets/hero-doces.webp";
import heroBolos from "@/assets/hero-bolos.webp";
import heroKits from "@/assets/hero-kits.webp";

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  gallery: { src: string; title: string }[];
}

export const categories: ProductCategory[] = [
  {
    slug: "bolos",
    name: "Bolos",
    description: "Bolos personalizados para todas as ocasiões, feitos com amor e ingredientes selecionados.",
    coverImage: catBolos,
    gallery: [
      { src: bolo1, title: "Bolo Floral Rosa" },
      { src: bolo2, title: "Bolo de Chocolate" },
      { src: bolo3, title: "Bolo de Casamento" },
      { src: bolo4, title: "Bolo Arco-Íris" },
      { src: bolo5, title: "Bolo de Morango" },
      { src: bolo6, title: "Bolo de Caramelo" },
    ],
  },
  {
    slug: "salgados",
    name: "Salgados",
    description: "Coxinhas, pastéis, empadas e muito mais, sempre fresquinhos e crocantes.",
    coverImage: catSalgados,
    gallery: [
      { src: catSalgados, title: "Coxinhas e Pastéis" },
      { src: heroSalgados, title: "Salgados Assados" },
      { src: catKits, title: "Mini Salgados" },
      { src: heroKits, title: "Kit Festa" },
    ],
  },
  {
    slug: "doces",
    name: "Doces",
    description: "Brigadeiros, trufas e docinhos artesanais que derretem na boca.",
    coverImage: catDoces,
    gallery: [
      { src: catDoces, title: "Brigadeiros Gourmet" },
      { src: heroDoces, title: "Cupcakes e Trufas" },
      { src: bolo2, title: "Doces de Chocolate" },
      { src: bolo6, title: "Doce de Caramelo" },
    ],
  },
  {
    slug: "tortas",
    name: "Tortas",
    description: "Tortas doces e salgadas com recheios irresistíveis.",
    coverImage: catTortas,
    gallery: [
      { src: catTortas, title: "Tortas de Frutas" },
      { src: heroBolos, title: "Torta de Creme" },
      { src: bolo5, title: "Torta de Morango" },
      { src: catBolos, title: "Torta Especial" },
    ],
  },
  {
    slug: "acai",
    name: "Açaí",
    description: "Açaí cremoso com diversos acompanhamentos e coberturas.",
    coverImage: catAcai,
    gallery: [
      { src: catAcai, title: "Açaí Tradicional" },
      { src: catAcai, title: "Açaí com Frutas" },
    ],
  },
  {
    slug: "kits-festa",
    name: "Kits Festa",
    description: "Kits personalizados com salgados e doces para sua festa ficar completa.",
    coverImage: catKits,
    gallery: [
      { src: catKits, title: "Kit Festa Completo" },
      { src: heroKits, title: "Kit Personalizado" },
      { src: heroSalgados, title: "Salgados para Festa" },
      { src: heroDoces, title: "Doces para Festa" },
    ],
  },
];
