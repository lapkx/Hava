'use client';

import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen px-6 py-32 bg-white text-gray-800">
      <h1 className="text-5xl font-bold text-blue-800 mb-4 text-center">
        Our Products
      </h1>

      <p className="text-center text-lg text-gray-600 mb-16">
        Affordable drone attachments that transform existing drones into powerful tools.
      </p>

      <div className="grid gap-16 max-w-6xl mx-auto">
        {/* Product 1: GYAN */}
        <div className="group transition-transform duration-300 hover:scale-[1.015] flex flex-col lg:flex-row items-center gap-10 bg-blue-50 rounded-2xl p-8 shadow-lg">
          <Image
            src="/images/drone-placeholder.png"
            alt="GYAN"
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">GYAN</h2>
            <p className="text-gray-700 mb-4">
              GYAN is our flagship drone extension module, engineered to transform any standard 6kg
              drone into a fully functional agricultural spraying unit. Includes:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Smart attachment system</li>
              <li>Adaptive spraying mechanism</li>
              <li>Weather-resistant materials</li>
              <li>Real-time operation support</li>
            </ul>
            <p className="italic text-sm text-gray-600 mb-4">
              “Hava helped us cut our spraying costs in half. GYAN was easy to install, and the
              support team was incredibly responsive.” — Ajay Singh, Maharashtra Farmer
            </p>
            <Link
              href="/get-a-quote"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Product 2: AAKASHCAM */}
        <div className="group transition-transform duration-300 hover:scale-[1.015] flex flex-col lg:flex-row items-center gap-10 bg-gray-100 rounded-2xl p-8 shadow-lg">
          <Image
            src="/images/drone-placeholder.png"
            alt="AAKASHCAM"
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">AAKASHCAM (Coming Soon)</h2>
            <p className="text-gray-700 mb-4">
              AAKASHCAM is a high-resolution camera-equipped drone attachment designed for:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Land surveying</li>
              <li>Crop health analysis</li>
              <li>Infrastructure inspection</li>
              <li>Real-time terrain mapping</li>
            </ul>
            <p className="text-sm text-gray-500 mb-4">Release Date: January 1, 2026</p>
            <Link
              href="/get-a-quote"
              className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-full transition"
            >
              Coming Soon
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
