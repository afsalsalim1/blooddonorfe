import { Link } from 'react-router-dom'
import { Heart, ShieldCheck } from 'lucide-react'

function BecomeDonor() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">

      <Heart size={65} className="text-red-600 mx-auto" />

      <h1 className="text-4xl font-bold mt-6">
        Become a Blood Donor
      </h1>

      <p className="text-gray-500 mt-4 text-lg">
        Your registration can help connect people with potential donors.
      </p>

      <div className="bg-red-50 p-8 rounded-xl mt-10 text-left">

        <h2 className="text-xl font-bold mb-5">
          Before Registering
        </h2>

        <div className="space-y-4 text-gray-700">
          <p className="flex gap-3">
            <ShieldCheck className="text-red-600" />
            Provide accurate contact information.
          </p>

          <p className="flex gap-3">
            <ShieldCheck className="text-red-600" />
            Consult a qualified healthcare professional about eligibility.
          </p>

          <p className="flex gap-3">
            <ShieldCheck className="text-red-600" />
            Keep your donor availability information updated.
          </p>
        </div>

      </div>

      <Link to="/register"
        className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg mt-8">
        Register as Donor
      </Link>

    </div>
  )
}

export default BecomeDonor