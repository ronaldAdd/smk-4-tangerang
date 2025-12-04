import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-16 font-[Outfit] mt-5 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Company</h4>
          <p className="text-gray-600 text-sm leading-relaxed">4110 Tench Rd, Suite H</p>
          <p className="text-gray-600 text-sm leading-relaxed">Suwanee, GA 30024</p>

          <div className="mt-4 text-gray-600 text-sm leading-relaxed">
            <p>877-454-7031</p>
            <p className="mt-2 font-medium text-gray-900">Pick-up Hours</p>
            <p>8 AM - 4:30 PM</p>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Shop</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">Shop All</Link></li>
            <li><Link href="#">Gift Cards</Link></li>
            <li><Link href="#">Coffee Sample Packs</Link></li>
            <li><Link href="#">Coffee by Region</Link></li>
            <li><Link href="#">Coffee by Roast</Link></li>
            <li><Link href="#">Specialty Coffee</Link></li>
            <li><Link href="#">Costa Rica Coffee</Link></li>
            <li><Link href="#">Guatemala Coffee</Link></li>
            <li><Link href="#">Sumatra Coffee</Link></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Information</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">Our Story</Link></li>
            <li><Link href="#">Brew Journal</Link></li>
            <li><Link href="#">Wholesale Coffee</Link></li>
            <li><Link href="#">Customer Service</Link></li>
            <li><Link href="#">Shipping Policy</Link></li>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Return Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Stay Connected</h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Sign up for updates, exclusive offers, and new arrivals.
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full flex-1 px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
            />
            <button className="w-full sm:w-auto px-5 py-2 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12 px-6">
        © 2025 FNB TECH. All rights reserved.
      </div>
    </footer>
  );
}
