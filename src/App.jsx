import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import FindDonors from './pages/FindDonors'
import DonorDetails from './pages/DonorDetails'
import BecomeDonor from './pages/BecomeDonor'
import Contact from './pages/Contact'
import About from './pages/About'
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-donors" element={<FindDonors />} />
        <Route path="/donor/:id" element={<DonorDetails />} />
        <Route path="/become-donor" element={<BecomeDonor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App