export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center text-center px-6 py-12">
      <h1 className="text-6xl font-bold text-blue-900 mb-4">Hava</h1>
      <p className="text-xl text-gray-700 mb-8 italic">Innovation that Elevates.</p>
      <a
        href="/products"
        className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-blue-700 transition"
      >
        Explore Our Products
      </a>
    </main>
  );
}
