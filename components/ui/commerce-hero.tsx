"use client";

import { ArrowUpRight, Menu, Search, ShoppingBasket, MapPin } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    title: "Wood Art",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    href: "/shop?category=wood-art",
  },
  {
    title: "Quilts",
    image: "https://images.unsplash.com/photo-1544956291-f1fc9394cca7?w=400&q=80",
    href: "/shop?category=quilts",
  },
  {
    title: "Pottery",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80",
    href: "/shop?category=pottery",
  },
  {
    title: "Jewelry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
    href: "/shop?category=jewelry",
  },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function CommerceHero() {
  return (
    <div className="w-full relative container px-2 mx-auto max-w-7xl min-h-screen">
      <div className="mt-6 bg-amber-50/50 rounded-2xl relative border border-amber-100">
        <header className="flex items-center">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-background/95 backdrop-blur-sm p-4 rounded-br-2xl flex items-center gap-2">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent whitespace-nowrap">
              Wyoming Hand Crafts
            </Link>

            <nav className="hidden lg:flex items-center justify-between w-full">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="link"
                  className="cursor-pointer hover:text-primary transition-colors"
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
              <Button variant="ghost" size="icon" className="cursor-pointer hover:text-primary transition-colors" asChild>
                <Link href="/shop"><Search className="w-5 h-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" className="cursor-pointer hover:text-primary transition-colors" asChild>
                <Link href="/cart"><ShoppingBasket className="w-5 h-5" /></Link>
              </Button>
            </nav>

            <Sheet>
              <SheetTrigger asChild className="lg:hidden ml-auto">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] p-0 bg-background/95 backdrop-blur-md border-r border-border/50"
              >
                <SheetHeader className="p-6 text-left border-b border-border/50">
                  <SheetTitle className="text-xl font-bold text-amber-800">
                    Wyoming Hand Crafts
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col p-6 space-y-1">
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="justify-start px-2 h-12 text-base font-medium hover:bg-accent/50 hover:text-primary transition-colors"
                      asChild
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  ))}
                </nav>
                <Separator className="mx-6" />
                <div className="p-6 flex flex-col gap-4">
                  <Button variant="outline" className="justify-start gap-2 h-12 hover:bg-accent/50 transition-colors" asChild>
                    <Link href="/shop"><Search className="w-4 h-4" />Browse Shop</Link>
                  </Button>
                  <Button variant="outline" className="justify-start gap-2 h-12 hover:bg-accent/50 transition-colors relative" asChild>
                    <Link href="/cart"><ShoppingBasket className="w-4 h-4" />View Cart</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex w-1/2 justify-end items-center pr-4 gap-4 ml-auto">
            <div className="flex items-center gap-1.5 text-sm text-amber-700">
              <MapPin className="w-4 h-4" />
              <span>Lagrange, Wyoming</span>
            </div>
          </div>
        </header>

        <motion.section
          className="w-full px-4 py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-amber-700 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Handmade in Lagrange, Wyoming
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 bg-clip-text text-transparent">
                Crafted with Heart,
              </span>
              <br />
              <span className="text-foreground">
                Built to Last.
              </span>
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Every piece is lovingly made by hand in the heart of Wyoming — from
              quilts and pottery to wood art and jewelry. Authentic craftsmanship
              you can feel.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Button size="lg" className="btn-shine rounded-full" asChild>
                <Link href="/shop">Shop Now <ArrowUpRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="/about">Our Story</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mt-12">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className="group relative bg-amber-50/50 backdrop-blur-sm rounded-3xl min-h-[250px] sm:min-h-[300px] w-full overflow-hidden transition-all duration-500 border border-amber-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <Link href={category.href} className="absolute inset-0 z-20 flex flex-col">
              <h2 className="text-center text-2xl sm:text-3xl font-bold relative z-10 text-amber-800 py-4 group-hover:text-amber-700 transition-colors duration-300">
                {category.title}
              </h2>
              <div className="flex-1 relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-background/95 backdrop-blur-sm rounded-tl-xl flex items-center justify-center z-10 border-l border-t border-border/50">
                <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
