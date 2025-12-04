import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FisheryPage() {
  return (
    <>
      <Head>
        <title>FNB Fishery — Sustainable Aquaculture Solutions</title>
        <meta
          name="description"
          content="FNB Fishery: Smart aquaculture solutions combining IoT, AI, training and sustainable partnerships to optimize shrimp, fish and crab production."
        />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
        rel="stylesheet"
      />

      </Head>

      <Navbar />

      {/* HERO */}
      <header className="relative pt-40 pb-32 bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544552866-00a431f51e3b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25" />

        <div className="relative max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            FNB Fishery, your Partner for Sustainable Aquaculture
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Your gateway to thriving aquaculture. We’re more than land providers—we’re partners
            dedicated to empowering fish farmers.
          </p>

          <button className="mt-10 px-10 py-4 bg-[#00C88C] text-black font-semibold rounded-xl shadow-lg hover:opacity-90 transition">
            Contact Us
          </button>
        </div>
      </header>

      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-[#006E29]">About FnB Fishery</h2>
          <p className="mt-6 text-gray-700 text-lg">
            We offer more than land—we offer partnership, technology support, and industry knowledge
            to enhance shrimp, fish, and crab farming operations.
          </p>
          <p className="mt-4 text-gray-600">
            Our commitment to innovation, community development, and sustainability drives us as we
            redefine success in aquaculture.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <h3 className="text-center text-4xl font-bold text-[#006E29]">
            What does FnB Fishery do?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-[#006E29]">Inquiry</h4>
              <p className="mt-3 text-gray-600 text-sm">
                FnB Fishery provides high-quality seafood to domestic and global markets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-[#006E29]">Sustainability</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Using technology to detect fish population and ensure sustainable harvesting.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-[#006E29]">Partnership</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Works with partners across Indonesia under strict quality and cold-chain standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APP FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold text-[#006E29]">FnB Fishery App</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Supply The Food Needs Through Aquaculture
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h4 className="text-lg font-bold text-[#006E29]">Smart Feeder</h4>
              <p className="mt-2 text-gray-600">
                IoT feeding integrated with mobile app for optimized harvest.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h4 className="text-lg font-bold text-[#006E29]">Pond Monitoring</h4>
              <p className="mt-2 text-gray-600">
                Automate water quality reporting and analysis.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h4 className="text-lg font-bold text-[#006E29]">Seeds & Supply</h4>
              <p className="mt-2 text-gray-600">
                Find the best priced and quality-controlled shrimp & fish pond resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SMART FEEDER */}
      <section className="py-20 bg-[#E8FFF3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-bold text-[#006E29]">FnB Fishery Smart Feeder</h3>
            <p className="mt-4 text-gray-700">
              A smart feeder drastically reduces manual labor and improves operational efficiency.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <h3 className="text-4xl font-bold text-[#006E29]">
            Solution for the World of Aquaculture
          </h3>

          <div className="space-y-6 text-gray-700">
            <p>
              We integrate modern aquaculture with automated feeding systems, monitoring, and
              environmentally sustainable practices.
            </p>

            <p>
              We empower fish farmers with training, expert consultancy, and scalable tools to boost
              production and reduce mortality rates.
            </p>
          </div>
        </div>
      </section>

    {/* CTA */}
    <section
    id="contact"
    className="py-16 md:py-20 bg-[#00C88C] text-center px-6"
    >
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug">
        Join Our Ecosystem — Your Next Step Starts Here
    </h3>

    <button
        className="mt-8 px-6 sm:px-10 py-4 bg-black text-white text-sm sm:text-base font-bold rounded-xl hover:opacity-90 transition"
    >
        Contact Us
    </button>
    </section>


      <Footer />
    </>
  );
}
