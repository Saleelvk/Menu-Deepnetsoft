function Hero() {
  return (
    <div>
      <div className="text-center pt-20 relative h-[380px]">
        <div
          className="absolute inset-0 bg-cover bg-center h-full bg-no-repeat opacity-70"
          style={{
            backgroundImage: "url('/src/assets/images/Rectangle 103.png')",
          }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6 font-Oswald">MENU</h1>
          <p className="text-gray-200 text-lg font-KellySlab text-shadow-lg max-w-2xl mx-auto">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
