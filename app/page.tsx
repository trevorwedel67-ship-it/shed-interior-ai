import Link from "next/link";
import { ArrowRight, Star, Truck, RotateCcw, Shield, Heart } from "lucide-react";
import { CommerceHero } from "@/components/ui/commerce-hero";
import { getFeaturedProducts, getNewArrivals } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card-1";

const testimonials = [
  {
    quote: "I ordered the hand-carved cedar bowl and it is absolutely stunning. The craftsmanship is impeccable — you can tell real care went into every detail.",
    name: "Lisa M.",
    location: "Denver, CO",
    rating: 5,
  },
  {
    quote: "The Wyoming Wildlife Quilt is a family heirloom in the making. My mother cried when she opened it. Thank you for such beautiful work!",
    name: "Tom & Sarah K.",
    location: "Cheyenne, WY",
    rating: 5,
  },
  {
    quote: "Fast shipping, incredible packaging, and the turquoise earrings are even more beautiful in person. I'll be back!",
    name: "Rebecca J.",
    location: "Scottsdale, AZ",
    rating: 5,
  },
];

const perks = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Free Shipping",
    desc: "On all orders over $75",
  },
  {
    icon: <RotateCcw className="w-6 h-6" />,
    title: "Easy Returns",
    desc: "30-day hassle-free returns",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Checkout",
    desc: "Stripe-powered & encrypted",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Handmade with Love",
    desc: "Every piece made in Wyoming",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="pt-20">
        <CommerceHero />
      </section>

      {/* ─── PERKS ─── */}
      <section className="bg-amber-800 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {perks.map((perk) => (
              <div key={perk.title} className="flex items-center gap-3 text-white">
                <div className="shrink-0 text-amber-200">{perk.icon}</div>
                <div>
                  <p className="text-sm font-semibold">{perk.title}</p>
                  <p className="text-xs text-amber-200">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                Handpicked
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Best Sellers
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden items-center gap-1 text-sm font-semibold text-amber-800 hover:underline sm:flex"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviewCount={product.reviewCount}
                images={product.images}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
                discount={product.discount}
                freeShipping={product.freeShipping}
                category={product.category}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-amber-800 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-900"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STORY BANNER ─── */}
      <section className="relative overflow-hidden bg-stone-900 py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80"
            alt="Wyoming landscape"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Our Story
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl leading-tight">
            Made in the Heart of Wyoming
          </h2>
          <p className="mt-6 text-lg text-stone-300 leading-relaxed">
            Wyoming Hand Crafts was born from a love of the land and a commitment to
            preserving traditional craftsmanship. Based in Lagrange, Wyoming, every piece
            we create celebrates the rugged beauty and spirit of the Cowboy State.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-amber-700 px-8 py-4 text-sm font-semibold text-white hover:bg-amber-800 transition-colors"
            >
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ─── NEW ARRIVALS ─── */}
      <section className="py-20 bg-amber-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                Fresh from the Workshop
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/shop?sort=newest"
              className="hidden items-center gap-1 text-sm font-semibold text-amber-800 hover:underline sm:flex"
            >
              See all new <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviewCount={product.reviewCount}
                images={product.images}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
                discount={product.discount}
                freeShipping={product.freeShipping}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              Happy Customers
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              What People Are Saying
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-hover rounded-2xl border border-amber-100 bg-amber-50/50 p-8"
              >
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-stone-600 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-amber-100">
                  <p className="text-sm font-semibold text-stone-800">{t.name}</p>
                  <p className="text-xs text-stone-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-amber-800 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Find the Perfect Handmade Gift
          </h2>
          <p className="mt-4 text-amber-200 text-lg">
            Every occasion deserves something made with real care. Browse our full
            collection and find a piece as unique as the person you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-amber-800 hover:bg-amber-50 transition-colors"
            >
              Shop All Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Custom Orders
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
