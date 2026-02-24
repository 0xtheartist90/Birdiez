import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts, getProductBySlug } from '@/lib/products';

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  animated?: boolean;
};

const SectionHeader = ({ label, title, subtitle, align = 'center', animated = true }: SectionHeaderProps) => {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
  const spacingClass = align === 'center' ? 'mb-16' : 'mb-10';
  const labelClass = animated ? 'reveal reveal-down' : '';
  const titleClass = animated ? 'reveal reveal-up reveal-delay-1' : '';
  const subtitleClass = animated ? 'reveal reveal-up reveal-delay-2' : '';

  return (
    <div className={`${alignmentClass} ${spacingClass} space-y-3`}>
      <p className={`text-sm uppercase tracking-[0.3em] text-[var(--accent)] ${labelClass}`}>{label}</p>
      <h2 className={`section-title ${titleClass}`}>{title}</h2>
      {subtitle && <p className={`script-accent ${subtitleClass}`}>{subtitle}</p>}
    </div>
  );
};

export default function Page() {
  const featuredProducts = getFeaturedProducts();
  const bagFeatureSlugs = ['bold-cart-bag-01', 'palm-stand-bag-01'];
  const featuredHighlightSlugs = ['golf-cover'];
  const featuredExclusionSlugs = ['golf-tees'];
  const bagFeatureProducts = bagFeatureSlugs
    .map(slug => getProductBySlug(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
  const featuredGridProducts = (() => {
    const highlights = featuredHighlightSlugs
      .map(slug => featuredProducts.find(product => product.slug === slug))
      .filter((product): product is NonNullable<typeof product> => Boolean(product));
    const others = featuredProducts.filter(
      product => !featuredHighlightSlugs.includes(product.slug) && !featuredExclusionSlugs.includes(product.slug)
    );
    return [...highlights, ...others];
  })();
  const highlightProduct = featuredGridProducts.find(product => product.slug === 'golf-cover') ?? featuredGridProducts[0];
  const secondaryProducts = featuredGridProducts
    .filter(product => product.id !== highlightProduct?.id)
    .slice(0, 4);
  const bagPositionClasses = ['lg:col-start-1 lg:row-start-4', 'lg:col-start-2 lg:row-start-4'];
  const secondaryPositionClasses = [
    'lg:col-start-3 lg:row-start-3',
    'lg:col-start-4 lg:row-start-3',
    'lg:col-start-3 lg:row-start-4',
    'lg:col-start-4 lg:row-start-4'
  ];
  const shopCategories = [
    { slug: 'shirts', label: 'SHIRTS', image: '/images/shirt.png' },
    { slug: 'pants', label: 'PANTS', image: '/images/pants.jpg' },
    { slug: 'gloves', label: 'GLOVES', image: '/images/gloves.png' },
    {
      slug: 'accessories',
      label: 'ACCESSORIES',
      image: '/images/birdie%20limited%20edition%20cap.png'
    }
  ];

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
          <div className="reveal reveal-right space-y-6 text-lg leading-relaxed">
            <SectionHeader
              label="About Us"
              title="BUILT FROM OBSESSION"
              subtitle="For the love of the game."
              align="left"
            />
            <div className="space-y-4">
              <p className="reveal reveal-up reveal-delay-3">
                We’re a group of friends who caught the golf bug — and fell in love with Chiang Mai’s incredibly welcoming golf community.
                After meeting new players every week, we knew we wanted to build more than just a shop.
              </p>
              <p className="reveal reveal-up reveal-delay-4">
                With backgrounds in marketing and retail, we created Birdiez inside the brand new MSport Driving Range — blending modern golf
                style with real golf culture, on and off the course.
              </p>
              <p className="reveal reveal-up reveal-delay-5">
                We’re also building a Chiang Mai golf app to help players connect, track scores, and compete in fun challenges and local tournaments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="section-anchor section-matcha py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            label="Shop"
            title={(
              <>
                THE
                <br />
                COLLECTION
              </>
            )}
            subtitle="Curated for Chiang Mai golfers."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {shopCategories.map((category, idx) => (
              <Link
                key={category.slug}
                href={`/shop?category=${category.slug}`}
                className={`group relative aspect-[3/4] rounded-2xl overflow-hidden reveal reveal-up ${
                  idx % 4 === 1 ? 'reveal-delay-1' : idx % 4 === 2 ? 'reveal-delay-2' : idx % 4 === 3 ? 'reveal-delay-3' : ''
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-black uppercase text-white tracking-tight max-w-[10ch]">
                    {category.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="section-anchor section-cream cream-overlay py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
          <SectionHeader
            label="Featured"
            title={(
              <>
                EXCLUSIVE
                <br />
                DROPS
              </>
            )}
            subtitle="Limited pieces available in store."
          />

          <div className="grid gap-4 lg:gap-x-4 lg:gap-y-2 lg:grid-cols-4 lg:[grid-template-rows:repeat(4,_minmax(0,_1fr))]">
            <div className="reveal reveal-left rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(10,10,10,0.2)] h-full min-h-[260px] lg:col-span-2 lg:row-span-3">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/birdiez%20shop.png"
                className="w-full h-full object-cover"
              >
                <source src="/images/golfbagbold.mp4" type="video/mp4" />
              </video>
            </div>

            {highlightProduct && (
              <div className="reveal reveal-right lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-1">
                <ProductCard product={highlightProduct} />
              </div>
            )}

            {secondaryProducts.map((product, idx) => (
              <div
                key={product.id}
                className={`reveal reveal-up ${idx === 1 ? 'reveal-delay-1' : ''} ${idx === 2 ? 'reveal-delay-2' : ''} ${idx === 3 ? 'reveal-delay-3' : ''} ${secondaryPositionClasses[idx] ?? ''}`}
              >
                <ProductCard product={product} />
              </div>
            ))}

            {bagFeatureProducts.slice(0, 2).map((product, idx) => (
              <div
                key={product.id}
                className={`reveal reveal-up ${idx ? 'reveal-delay-2' : 'reveal-delay-1'} ${bagPositionClasses[idx] ?? ''}`}
              >
                <ProductCard product={product} />
              </div>
            ))}

            {bagFeatureProducts.length === 0 && (
              <div className="reveal reveal-up lg:col-span-2 lg:row-start-4 rounded-2xl border border-dashed border-white/30 p-6 text-center text-sm text-white/70">
                Bag products coming soon.
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="lifestyle" className="section-anchor section-smoke py-24">
        <div className="mx-auto max-w-6xl lg:max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)] reveal reveal-down">
              Lifestyle
            </p>
            <h2 className="section-title reveal reveal-up reveal-delay-1">
              PLAY HARD.
              <br />
              DRESS SHARP.
            </h2>
            <p className="script-accent reveal reveal-up reveal-delay-2">
              Performance matters. So does presence.
            </p>
            <p className="reveal reveal-up reveal-delay-3">
              Birdiez is built for golfers who care how they show up — on the range, on the course, and anywhere the day takes them. Our pieces move effortlessly from early practice sessions to city nights.
            </p>
            <p className="reveal reveal-up reveal-delay-4">
              Rooted in Chiang Mai’s welcoming golf community, we’re here for the conversations between shots, the new friendships, and the shared love of the game.
            </p>
            <p className="reveal reveal-up reveal-delay-5">
              Wear it to play. Wear it anywhere.
            </p>
          </div>

          <div className="rounded-3xl shadow-[0_25px_70px_rgba(10,10,10,0.25)] bg-[#EFE9DC]/10 p-3 reveal reveal-right reveal-delay-6">
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

      <section id="app-teaser" className="section-anchor section-matcha py-20 border-t border-[#706C61]/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-3xl shadow-[0_25px_70px_rgba(34,34,34,0.15)] bg-white/50 p-3 reveal reveal-left flex-shrink-0">
            <div className="relative group rounded-2xl overflow-hidden w-full max-w-[600px] mx-auto">
              <Image
                src="/images/birdiez%20app%20.png"
                alt="Birdiez app preview"
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
                <source src="/images/birdiez%20app%20.webm" type="video/webm" />
              </video>
            </div>
          </div>
          <div className="reveal reveal-right">
            <SectionHeader
              label="Community"
              title="Download the App"
              subtitle="Find players. Track scores."
              align="left"
            />
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="reveal reveal-up reveal-delay-3">
                Build your Chiang Mai golf circle with challenges, events, and up-to-date course intel. Our app makes discovering new partners and tracking your rounds effortless.
              </p>
              <p className="reveal reveal-up reveal-delay-4">
                Whether you're coordinating range meetups or planning weekend tournaments, Birdiez keeps every golfer in sync with real-time updates and shared scorecards.
              </p>
              <p className="reveal reveal-up reveal-delay-5">
                From new friendships to competitive leaderboards, the community lives right inside the app—wear Birdiez, then tap in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="section-anchor section-cream cream-overlay py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
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

          <div className="space-y-4 text-lg mb-8">
            <p className="font-bold text-2xl reveal reveal-up reveal-delay-3">MSport Driving Range</p>
            <p className="reveal reveal-up reveal-delay-4">Chiang Mai, Thailand</p>
            <p className="text-sm opacity-70 reveal reveal-up reveal-delay-5">Open Daily: 8:00 AM - 8:00 PM</p>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden bg-[#706C61]/10 flex items-center justify-center reveal reveal-scale">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/images/Msport.webm" type="video/webm" />
            </video>
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
