'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-32 bg-white text-gray-800 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-blue-800 mb-10 text-center">
        Why We Started Hava
      </h1>

      <section className="space-y-6 text-lg leading-relaxed text-gray-700">
        <p>
          We saw a pressing need in developing nations, especially in countries like India,
          where large-scale drone companies sell essential products like agricultural drones
          at inflated prices. For example, the average agricultural drone in India costs
          around ₹3.5 lakhs (≈ $4,000) — making them inaccessible to small-scale farmers.
        </p>

        <p>
          Hava was born out of the mission to democratize drone technology. Instead of selling
          entire drone systems, we create affordable, powerful drone attachments that can be
          mounted onto existing 6kg drones — reducing costs by up to 50%.
        </p>

        <p>
          Our solution brings the price down to around $2,000, without compromising on functionality.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-10">We are a social-first business:</h2>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>No transaction fees</li>
          <li>100% transparent, with all transactions made public</li>
          <li>Focused on empowering local farmers and small businesses</li>
        </ul>

        <p className="mt-8 italic text-gray-600">
          We believe in technology for good, and our mission is to make high-end drone utility
          affordable and accessible.
        </p>
      </section>
    </main>
  );
}
