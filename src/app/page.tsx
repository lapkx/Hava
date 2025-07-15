import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-sky-100 to-white flex flex-col items-center justify-center text-center px-6 py-20">
      {/* Decorative drone image background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        <Image
          src="/images/drone-placeholder.png"
          alt="Drone Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Company Name */}
      <h1 className="text-7xl font-extrabold text-blue-800 drop-shadow-sm mb-4 tracking-tight">
        Hava
      </h1>

      {/* Motto */}
      <p className="text-2xl text-gray-700 max-w-xl mb-10 italic">
        Innovation that Elevates.
      </p>

      {/* Call to Action */}
      <a
        href="/products"
        className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Explore Our Products
      </a>

      {/* Optional tagline section */}
      <div className="mt-16 max-w-2xl text-gray-600 text-base">
        <p>
          We create smart drone attachments for real-world problems. Affordable, powerful, and
          designed with small-scale farmers in mind.
        </p>
      </div>
    </main>
  );
}
