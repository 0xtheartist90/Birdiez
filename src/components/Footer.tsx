import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section-coal py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/shop?category=shirts" className="opacity-80 hover:opacity-100 transition-opacity">Shirts</Link></li>
              <li><Link href="/shop?category=gloves" className="opacity-80 hover:opacity-100 transition-opacity">Gloves</Link></li>
              <li><Link href="/shop?category=accessories" className="opacity-80 hover:opacity-100 transition-opacity">Accessories</Link></li>
              <li><Link href="/shop?category=clubs" className="opacity-80 hover:opacity-100 transition-opacity">Clubs (Secondhand)</Link></li>
              <li><Link href="/shop?category=bags" className="opacity-80 hover:opacity-100 transition-opacity">Bags (Secondhand)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Returns</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Location</h3>
            <p className="opacity-80">
              MSport Driving Range<br />
              Chiang Mai, Thailand
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Instagram</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Facebook</Link></li>
              <li><Link href="#app-teaser" className="opacity-80 hover:opacity-100 transition-opacity">Join the App</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#EFE9DC]/20 text-center opacity-60 text-sm">
          <p>&copy; {new Date().getFullYear()} Birdiez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
