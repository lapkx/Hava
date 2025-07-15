'use client';

export default function GetAQuotePage() {
  return (
    <main className="min-h-screen px-6 py-32 bg-white text-gray-800 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
        Request a Quote
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        To get a quote, please email us at:{" "}
        <a
          href="mailto:salesforhava@gmail.com"
          className="text-blue-600 underline"
        >
          salesforhava@gmail.com
        </a>
      </p>

      <section className="space-y-10 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">For GYAN</h2>
          <p>Please include the following in your email:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Product name (GYAN)</li>
            <li>Quantity required</li>
            <li>Use case (e.g., crop type, field size)</li>
            <li>Any specific features you need</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">For AAKASHCAM</h2>
          <p>Please include the following:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Product name (AAKASHCAM)</li>
            <li>Quantity</li>
            <li>Your intended use</li>
            <li>Any customization requests</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
