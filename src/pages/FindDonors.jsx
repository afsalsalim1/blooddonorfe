import { useState } from 'react'
import { TextInput, Select } from 'flowbite-react'
import { Search } from 'lucide-react'

import DonorCard from '../components/DonorCard'

function FindDonors() {
  

 
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-center">
        Find Blood Donors
      </h1>

      <p className="text-gray-500 text-center mt-3">
        Search donors based on blood group and location.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-sm border mt-10 grid md:grid-cols-3 gap-4">

        <Select
          >
          <option value="">All Blood Groups</option>
        
        </Select>

        <TextInput
          icon={Search}
          placeholder="Enter city"
        
        />

        <button
        
          className="bg-red-600 text-white rounded-lg py-2 hover:bg-red-700"
        >
          Search
        </button>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

     

      </div>

    
        <p className="text-center text-gray-500 mt-10">
          No donors found.
        </p>
     
    </div>
  )
}

export default FindDonors