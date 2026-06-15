const About = () => {
  return (
    <div>
      <div
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="relative z-10 text-4xl font-bold text-amber-300">About Us</h2>
      </div>

      <div className="p-10 bg-amber-50">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
          FoodHub provides fresh and tasty vegetarian and non-vegetarian meals
          with quick delivery and excellent customer service. Our chefs use only
          the finest ingredients to bring restaurant-quality food to your table.
        </p>
      </div>
    </div>
  );
};

export default About;