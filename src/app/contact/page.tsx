'use client';

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-32 bg-white text-gray-800 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Contact Us</h1>

      <p className="text-center text-lg text-gray-600 mb-10">
        Have questions or want to collaborate? Reach out to us directly or use the form below.
      </p>

      <form
        action="https://formsubmit.co/salesforhava@gmail.com"
        method="POST"
        className="space-y-6"
      >
        {/* Hidden FormSubmit settings */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://hava.vercel.app/thanks" />

        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
