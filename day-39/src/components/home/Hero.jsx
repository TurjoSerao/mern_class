
const Hero = () => {
    return (
       <div className="px-6 sm:px-10">
  <div className="max-w-screen-xl mx-auto">
    <div className="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
      <div className="max-w-3xl max-lg:mx-auto max-lg:text-center">
        <h1 className="text-slate-900 md:text-5xl text-4xl font-bold !leading-tight">Simple <span className="text-indigo-600">Solutions</span> for Complex Problems</h1>
        <p className="text-slate-600 text-base leading-relaxed mt-6">Simplify your daily operations and focus on growth. Our intuitive platform helps you organize tasks, monitor progress, and stay connected — no matter your industry.</p>
        <div className="mt-12 flex flex-wrap gap-6 max-lg:justify-center">
          <button type="button" className="bg-indigo-600 hover:bg-indigo-700 border border-indigo-700 transition-all text-base text-white font-medium rounded-full px-6 py-3 cursor-pointer outline-0">Try It for Free</button>
          <button type="button" className="bg-transparent hover:bg-slate-100 border border-indigo-700 transition-all text-base text-slate-900 font-medium rounded-full px-6 py-3 cursor-pointer outline-0">See How It Works</button>
        </div>
      </div>
      <div className="relative lg:h-screen">
        <img src="https://readymadeui.com/images/real-estate-img.webp" alt="app-img" className="w-full h-full object-cover object-top lg:absolute lg:right-0 lg:top-0 lg:bottom-0" />
      </div>
    </div>
  </div>
</div>

    );
};

export default Hero;