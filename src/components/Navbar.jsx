import { Link, NavLink } from 'react-router-dom'
import { Heart } from 'lucide-react'

function Navbar() {
  const linkClass = ({ isActive }) =>
    `font-medium hover:text-red-600 ${
      isActive ? 'text-red-600' : 'text-gray-700'
    }`

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        <Link to="/" className="flex items-center gap-2">
          <Heart className="text-red-600" size={30} />
          <span className="text-2xl font-bold text-gray-900">
            Life<span className="text-red-600">Link</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/find-donors" className={linkClass}>Find Donors</NavLink>
          <NavLink to="/become-donor" className={linkClass}>Become Donor</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

        </div>

        <div className="flex gap-2">
          <Link to="/login"
            className="px-4 py-2 text-red-600 font-semibold">
            Login
          </Link>

          <Link to="/register"
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Register
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar