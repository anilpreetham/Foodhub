const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-96 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-55"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl font-bold text-amber-300 drop-shadow-lg">
            Welcome to FoodHub
          </h1>
          <p className="mt-4 text-xl text-amber-100">
            Delicious Veg and Non-Veg Food Delivered Fast.
          </p>
          <a
            href="/veg"
            className="inline-block mt-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Explore Menu
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-amber-50 py-12 px-8">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-4xl mb-3">🔥</div>
            <h3 className="text-xl font-bold text-amber-800">Fresh & Hot</h3>
            <p className="text-gray-600 mt-2">Every dish prepared fresh with quality ingredients.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-amber-800">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">Delivered to your door within 30 minutes.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="text-xl font-bold text-amber-800">Top Rated</h3>
            <p className="text-gray-600 mt-2">Loved by thousands of happy customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;