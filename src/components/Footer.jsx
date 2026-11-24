import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold flex gap-2 items-center">
            <Heart className="text-red-500" />
            LifeLink
          </h2>
          <p className="text-gray-400 mt-3">
            Connecting blood donors with people in need.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-400">
            <Link to="/">Home</Link>
            <Link to="/find-donors">Find Donors</Link>
            <Link to="/become-donor">Become Donor</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Email: support@lifelink.com</p>
          <p className="text-gray-400 mt-2">Kerala, India</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-5 text-gray-400">
        © 2026 LifeLink. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer