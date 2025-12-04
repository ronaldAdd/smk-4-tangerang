// Enhanced version of the user's single product page with additional typical sections
// Sections added: Specifications, Shipping Info, Customer Reviews placeholder, FAQ, Brewing Guide, Flavor Notes

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import productsData from "../../data/products.json";

export default function ProductPage({ product, related }) {
  if (!product) return <div className="p-20 text-center">Product not found</div>;

  const hasVariants = Array.isArray(product.variants);
  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? product.variants[0] : null
  );

  const [quantity, setQuantity] = useState(1);
  const displayPrice = selectedVariant ? selectedVariant.price : product.price;

  return (
    <>
      <Head>
        <title>{product.name} | FNB TECH</title>
        <meta name="description" content={product.description} />
      </Head>

      <Navbar />

      {/* PRODUCT MAIN */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* IMAGE */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* DETAILS */}
          <div>
            <h1 className="text-4xl font-bold text-green-700 mb-4">{product.name}</h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.description}</p>

            <div className="text-3xl font-bold text-green-700 mb-6">${displayPrice}</div>

            {hasVariants && (
              <div className="mb-8">
                <h3 className="font-semibold text-green-700 mb-3">Choose Variant</h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedVariant?.label === v.label
                          ? "bg-green-700 text-white border-green-700"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* QUANTITY */}
            <div className="mb-8">
              <h3 className="font-semibold text-green-700 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-2 bg-white border border-green-600 text-green-700 font-bold rounded-lg hover:bg-green-700 hover:text-white transition"
                >–</button>

                <div className="text-2xl font-bold w-12 text-center text-green-700">{quantity}</div>

                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-2 bg-white border border-green-600 text-green-700 font-bold rounded-lg hover:bg-green-700 hover:text-white transition"
                >+</button>
              </div>
            </div>

            <a
              href="#"
              className="inline-block px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 text-lg font-semibold"
            >
              {hasVariants
                ? `Order ${selectedVariant?.label} × ${quantity}`
                : `Order × ${quantity}`}
            </a>

            <hr className="my-10" />

            {/* PRODUCT INFORMATION */}
            <h2 className="text-2xl font-bold text-green-700 mb-4">Product Information</h2>
            <ul className="space-y-3 text-gray-600">
              {(product.details ?? []).map((d, i) => (
                <li key={i}>• {d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEW: FLAVOR NOTES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Flavor Notes</h2>
          <p className="text-gray-600 leading-relaxed">
            {product.flavorNotes || "Rich, balanced, and crafted for enthusiasts."}
          </p>
        </div>
      </section>

      {/* NEW: BREWING GUIDE */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Brewing Guide</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Water Temperature: 92–96°C</li>
            <li>• Ratio: 1:15 coffee to water</li>
            <li>• Brew Time: 2–3 minutes</li>
          </ul>
        </div>
      </section>

      {/* NEW: SPECIFICATIONS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Specifications</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Weight: {product.weight || "250g"}</li>
            <li>• Packaging: {product.packaging || "Sealed eco‑friendly bag"}</li>
            <li>• Origin: {product.origin || "Indonesia"}</li>
          </ul>
        </div>
      </section>

      {/* NEW: SHIPPING INFO */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Shipping Information</h2>
          <p className="text-gray-600 leading-relaxed">
            Fast shipping worldwide. Orders are processed within 24 hours.
          </p>
        </div>
      </section>

      {/* NEW: CUSTOMER REVIEWS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Customer Reviews</h2>
          <p className="text-gray-600 italic">(Reviews system coming soon)</p>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-14">Related Products</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {(related ?? []).map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src={item.image} className="rounded-lg mb-4" />
              <h3 className="text-xl text-green-700 font-semibold mb-2">{item.name}</h3>
              <p className="text-black font-bold mb-3">${item.price}</p>
              <a href={`/products/${item.slug}`} className="text-black font-semibold">View →</a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = productsData.products;
  const paths = products.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = productsData.products;
  const product = products.find((p) => p.slug === params?.slug);

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return {
    props: {
      product: product || null,
      related: related || [],
    },
  };
};
