default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">MyApp</h3>
            <p className="text-gray-400">Built with React, Tailwind CSS & JSX</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-400 text-sm mt-6 pt-6 border-t border-gray-800">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>