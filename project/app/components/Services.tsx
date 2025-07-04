export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Evidence-based approaches to help you manage anxiety, reduce stress, and develop healthy coping strategies for daily challenges."
    },
    {
      title: "Relationship Counseling",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection with your partner."
    },
    {
      title: "Trauma Recovery",
      image: "https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Compassionate, trauma-informed care to help you process difficult experiences and develop resilience for healing and growth."
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Areas of Focus
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 overflow-hidden rounded-full aspect-square">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Office Hours
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>In-person:</strong> Tuesday & Thursday, 10 AM–6 PM</p>
                <p><strong>Virtual via Zoom:</strong> Monday, Wednesday & Friday, 1 PM–5 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Session Fees
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Individual Session:</strong> $200</p>
                <p><strong>Couples Session:</strong> $240</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}