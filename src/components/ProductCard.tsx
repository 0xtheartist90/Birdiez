import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#706C61]/10 mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-wide opacity-60">{product.category}</p>
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="font-semibold">฿{product.price.toLocaleString()}</p>
      </div>
      
      <button className="mt-3 w-full accent-bg py-2.5 rounded-xl font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-[1.02]">
        Reserve In Store
      </button>
    </Link>
  );
}
