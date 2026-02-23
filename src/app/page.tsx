import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/lib/products';

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
};

const SectionHeader = ({ label, title, subtitle, align = 'center' }: SectionHeaderProps) => {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
  const spacingClass = align === 'center' ? 'mb-16' : 'mb-10';

  return (
    <div className={`${alignmentClass} ${spacingClass}`}>
      <p className="text-sm uppercase tracking-[0.3em] mb-4 text-[var(--accent)]">{label}</p>
      <h2 className="section-title mb-4">{title}</h2>
      {subtitle && <p className="script-accent">{subtitle}</p>}
    </div>
  );
};

export default function Page() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main>
      <section id="home" className="section-anchor relative h-screen flex items-center justify-center section-cream overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-cover.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/HeroBirdiez.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6 reveal reveal-up">
          <Image
            src="/images/LOGO%20White.png"
            alt="Birdiez white logo"
            width={440}
            height={160}
            className="h-32 w-auto reveal reveal-down"
            priority
          />
          <h1 className="hero-title text-white mb-2 reveal reveal-up reveal-delay-1">
            GOLF SHOP
          </h1>
          <p className="script-accent text-white mb-8 max-w-2xl mx-auto reveal reveal-up reveal-delay-2">
            Built by players, for the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-up reveal-delay-3">
            <Link
              href="/shop"
              className="accent-bg px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              Shop Now
            </Link>
            <Link
              href="#location"
              className="bg-transparent border-2 border-[#EFE9DC] text-[#EFE9DC] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              Reserve In Store
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="section-anchor section-cream cream-overlay py-20 border-t border-[#706C61]/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="rounded-3xl shadow-[0_25px_70px_rgba(34,34,34,0.15)] bg-white/50 p-3 reveal reveal-left">
            <div className="relative group rounded-2xl overflow-hidden">
              <Image
                src="/images/birdiezaboutus.png"
                alt="Birdiez about us"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <source src="/images/birdiezaboutus.webm" type="video/webm" />
              </video>
            </div>
          </div>
          <div className="reveal reveal-right">
            <div className="reveal reveal-down">
            <SectionHeader
              label="About Us"
              title="BUILT FROM OBSESSION"
              subtitle="For the love of the game."
              align="left"
            />
            </div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                We’re a group of friends who caught the golf bug — and fell in love with Chiang Mai’s incredibly welcoming golf community.
                After meeting new players every week, we knew we wanted to build more than just a shop.
              </p>
              <p>
                With backgrounds in marketing and retail, we created Birdiez inside the brand new MSport Driving Range — blending modern golf
                style with real golf culture, on and off the course.
              </p>
              <p>
                We’re also building a Chiang Mai golf app to help players connect, track scores, and compete in fun challenges and local tournaments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="section-anchor section-matcha py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal reveal-down">
            <SectionHeader
              label="Collections"
              title={(
                <>
                  SHOP
                  <br />
                  THE COLLECTION
                </>
              )}
              subtitle="Curated for Chiang Mai golfers."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop?category=shirts" className="group relative aspect-[3/4] rounded-2xl overflow-hidden reveal reveal-up">
              <Image
                src="/images/shirt.png"
                alt="Shirts"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-4xl font-black uppercase text-white tracking-tight">SHIRTS</h3>
              </div>
            </Link>

            <Link href="/shop?category=gloves" className="group relative aspect-[3/4] rounded-2xl overflow-hidden reveal reveal-up reveal-delay-1">
              <Image
                src="/images/gloves.png"
                alt="Gloves"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-4xl font-black uppercase text-white tracking-tight">GLOVES</h3>
              </div>
            </Link>

            <Link href="/shop?category=accessories" className="group relative aspect-[3/4] rounded-2xl overflow-hidden reveal reveal-up reveal-delay-2">
              <Image
                src="/images/cap.png"
                alt="Accessories"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-4xl font-black uppercase text-white tracking-tight">ACCESSORIES</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="featured" className="section-anchor section-cream cream-overlay py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal reveal-down">
            <SectionHeader
              label="Featured"
              title={(
                <>
                  FEATURED
                  <br />
                  DROPS
                </>
              )}
              subtitle="Limited pieces available in store."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 4).map((product, idx) => (
              <div key={product.id} className={`reveal reveal-up ${idx === 1 ? 'reveal-delay-1' : ''} ${idx === 2 ? 'reveal-delay-2' : ''} ${idx === 3 ? 'reveal-delay-3' : ''}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal reveal-up reveal-delay-2">
            <Link
              href="/shop"
              className="inline-block accent-bg px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section id="lifestyle" className="section-anchor section-smoke py-24">
        <div className="mx-auto max-w-6xl lg:max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-6 text-lg leading-relaxed reveal reveal-left">
            <div className="reveal reveal-down">
              <SectionHeader
                label="Lifestyle"
                title={(
                  <>
                    BUILT FOR
                    <br />
                    THE RANGE
                  </>
                )}
                subtitle="Modern golf culture in Chiang Mai."
                align="left"
              />
            </div>
            <p>
              Birdiez is more than a pro shop. We're building a lifestyle brand for the modern golfer who values both performance and style.
            </p>
            <p>
              Located inside MSport Driving Range, we curate premium golf fashion and essentials for Chiang Mai's growing golf community.
            </p>
            <p>
              From the range to the course to the city—our pieces move with you.
            </p>
          </div>

          <div className="rounded-3xl shadow-[0_25px_70px_rgba(10,10,10,0.25)] bg-[#EFE9DC]/10 p-3 reveal reveal-right">
            <div className="relative rounded-2xl overflow-hidden h-[420px] md:h-[520px] group">
              <Image
                src="/images/birdiez%20shop.png"
                alt="Inside the Birdiez shop"
                width={720}
                height={520}
                className="w-full h-full object-cover"
                priority
              />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <source src="/images/birdiezshop.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent mix-blend-multiply pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section id="app-teaser" className="section-anchor section-matcha py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="reveal reveal-down">
            <SectionHeader
              label="Community App"
              title={(
                <>
                  JOIN THE
                  <br />
                  CHIANG MAI
                  <br />
                  GOLF COMMUNITY
                </>
              )}
              subtitle="Find players. Track scores. Organize tournaments."
            />
          </div>
          
          <div className="space-y-4 text-lg max-w-2xl mx-auto mb-12">
            <p className="font-semibold reveal reveal-up">Our upcoming app will help you:</p>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3 reveal reveal-up">
                <span className="text-2xl">⛳</span>
                <span>Meet golf buddies and build your network</span>
              </li>
              <li className="flex items-start gap-3 reveal reveal-up reveal-delay-1">
                <span className="text-2xl">🏌️</span>
                <span>Discover all Chiang Mai golf courses</span>
              </li>
              <li className="flex items-start gap-3 reveal reveal-up reveal-delay-2">
                <span className="text-2xl">📊</span>
                <span>Track your scores and improve your game</span>
              </li>
              <li className="flex items-start gap-3 reveal reveal-up reveal-delay-3">
                <span className="text-2xl">🏆</span>
                <span>Organize and join local tournaments</span>
              </li>
            </ul>
          </div>

          <div className="inline-block accent-bg px-8 py-4 rounded-xl font-bold text-lg opacity-80 cursor-not-allowed reveal reveal-up reveal-delay-2">
            Coming Soon
          </div>
        </div>
      </section>

      <section id="location" className="section-anchor section-cream cream-overlay py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="reveal reveal-down">
            <SectionHeader
              label="Location"
              title={(
                <>
                  VISIT
                  <br />
                  THE SHOP
                </>
              )}
              subtitle="Inside MSport Driving Range."
            />
          </div>

          <div className="space-y-4 text-lg mb-8">
            <p className="font-bold text-2xl reveal reveal-up">MSport Driving Range</p>
            <p className="reveal reveal-up reveal-delay-1">Chiang Mai, Thailand</p>
            <p className="text-sm opacity-70 reveal reveal-up reveal-delay-2">Open Daily: 8:00 AM - 8:00 PM</p>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden bg-[#706C61]/10 flex items-center justify-center reveal reveal-scale">
            <p className="text-[#706C61]/50 font-semibold">Map Placeholder</p>
          </div>

          <div className="mt-8 reveal reveal-up reveal-delay-2">
            <Link
              href="#"
              className="inline-block accent-bg px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
