export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-sage-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold">Dr. Serena Blake, PsyD</h3>
                <p className="text-sm text-gray-400">Clinical Psychologist</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating a safe, supportive space for healing, growth, and well-being 
              through compassionate, evidence-based psychological care.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-400">
              <p>(323) 555-0192</p>
              <p>serena@blakepsychology.com</p>
              <p>1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Office Hours</h4>
            <div className="space-y-2 text-gray-400">
              <p><strong className="text-white">In-person:</strong><br />
              Tue & Thu, 10 AM–6 PM</p>
              <p><strong className="text-white">Virtual:</strong><br />
              Mon, Wed & Fri, 1 PM–5 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dr. Serena Blake, PsyD. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Licensed Clinical Psychologist | California License #PSY12345
          </p>
        </div>
      </div>
    </footer>
  )
}