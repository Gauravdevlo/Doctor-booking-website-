export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Psychological Care for
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium mb-8 leading-tight">
          Change, Insight, and Well-Being
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
          Offering individual psychotherapy for adults in Los Angeles through compassionate, 
          evidence-based approaches including CBT, mindfulness, and trauma-informed care.
        </p>
        <a href="#contact" className="btn-secondary text-lg">
          SCHEDULE A CONSULTATION
        </a>
      </div>
    </section>
  )
}