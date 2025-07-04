export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-8">
              About Dr. Serena Blake
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Finding time and opportunities to care for ourselves can be incredibly 
                challenging in today's busy and demanding world. I believe therapy 
                offers a dedicated space for self-care, providing the support and tools 
                needed to improve this essential practice.
              </p>
              
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                Dr. Blake is committed to creating a safe, supportive space for you to thrive. 
                Her therapeutic approach is primarily psychodynamic and humanistic, enriched by 
                influences from positive psychology, existentialism, and mindfulness practices.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                <p className="text-gray-600">8 years of practice</p>
                <p className="text-gray-600">500+ sessions</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">1287 Maplewood Drive</p>
                <p className="text-gray-600">Los Angeles, CA 90026</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden bg-gray-200">
              <img
                src="/image.png"
                alt="Dr. Serena Blake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}