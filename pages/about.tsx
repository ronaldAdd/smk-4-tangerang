import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About | FNB TECH</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* COMPANY OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0d1c15]">Who We Are</h2>
            <p className="mt-4 text-[#0d1c15] leading-relaxed">
              FNB Tech is a holding company overseeing several leading brands in the coffee and agritech industry,
              including FnB Coffee, Specialtycoffee.id, Kopiluwak.coffee, Originalluwak.com, Kopi.online,
              and Specialtycoffee.shop.
            </p>
            <p className="mt-4 text-[#0d1c15] leading-relaxed">
              We build an integrated ecosystem to support farmers, roasters, importers,
              distributors, agriculture companies, fishery businesses, and livestock sectors.
            </p>
          </div>

          <div>
            <img
              src="https://www.bsigroup.com/siteassets/images/1-1-squ/gl-gmkt-brand-fdr-mt-mp-021398820901-1023-img.jpg"
              alt="FNB Tech Overview"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0d1c15]">Vision & Mission</h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold text-[#0d1c15]">Our Vision</h3>
              <p className="mt-3 text-gray-700">
                To become the leading technology platform for the coffee, agritech, fishery, and farm industries in Indonesia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold text-[#0d1c15]">Our Mission</h3>
              <ul className="mt-3 space-y-3 text-gray-700 list-disc list-inside">
                <li>Digitalizing the coffee and agriculture supply chain</li>
                <li>Connecting farmers, roasters, and importers on a single platform</li>
                <li>Providing high–quality products for businesses and retail</li>
                <li>Supporting industry growth through modern technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR BRANDS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0d1c15]">Our Brands</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {['FnB Coffee','Specialtycoffee.id','Kopiluwak.coffee','Originalluwak.com','Kopi.online','Specialtycoffee.shop'].map((b) => (
              <div key={b} className="p-4 bg-[#0f172a] rounded-xl shadow text-center font-medium text-white min-h-[70px] flex items-center justify-center">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0d1c15]">Leadership</h2>
          <p className="mt-3 text-[#0d1c15]">Led by professionals with years of experience.</p>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[1,2,3].map((idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow">
                <img
                  src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-06.jpg"
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                />
                <h3 className="mt-4 font-bold text-lg text-[#0d1c15]">Leader Name {idx}</h3>
                <p className="text-sm text-gray-700">{idx===1? 'CEO' : idx===2 ? 'COO' : 'CTO'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
