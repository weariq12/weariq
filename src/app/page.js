"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-700 to-black text-white">
      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <h1 className="text-6xl font-extrabold tracking-widest">
          WEARIQ
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
          Premium Streetwear for the Bold.
        </p>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Product 1 */}
          <div className="bg-neutral-900 p-6 rounded-2xl hover:scale-105 transition duration-300">
            <img
              src="/images/tee1.png"
              alt="Oversized Tee"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <h2 className="mt-6 text-2xl font-semibold">
              Oversized Tee
            </h2>
            <p className="text-gray-400 mt-2">₹999</p>
            <button
              onClick={() => window.location.href="https://rzp.io/rzp/dQqyU61"}
              className="mt-6 w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Buy Now
            </button>
          </div>

          {/* Product 2 */}
          <div className="bg-neutral-900 p-6 rounded-2xl hover:scale-105 transition duration-300">
            <img
              src="/images/hoodie1.png"
              alt="Premium Hoodie"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <h2 className="mt-6 text-2xl font-semibold">
              Premium Hoodie
            </h2>
            <p className="text-gray-400 mt-2">₹1799</p>
            <button className="mt-6 w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
              Buy Now
            </button>
          </div>

        </div>
      </section>

    </main>
  );<div className="bg-neutral-900 p-6 rounded-2xl hover:scale-105 transition duration-300">
  <img
    src="/images/tee2.png"
    alt="New Product"
    className="w-full h-[400px] object-cover rounded-xl"
  />
  <h2 className="mt-6 text-2xl font-semibold">
    New Tee
  </h2>
  <p className="text-gray-400 mt-2">₹1099</p>
  <button
    onClick={() => window.location.href="YOUR_RAZORPAY_LINK"}
    className="mt-6 w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
  >
    Buy Now
  </button>
</div>
}