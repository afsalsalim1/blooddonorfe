import { Heart, Target, Eye, Users, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-red-50 py-20 px-6 text-center">

        <Heart size={55} className="text-red-600 mx-auto" />

        <h1 className="text-4xl md:text-5xl font-bold mt-5">
          About <span className="text-red-600">LifeLink</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg">
          LifeLink is a blood donor finder platform designed to
          connect people in need of blood with potential donors.
          Our goal is to make donor discovery easier and faster.
        </p>

      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold">
            Who We Are
          </h2>

          <p className="text-gray-600 mt-5 leading-7">
            LifeLink is a digital platform created to simplify
            the process of finding blood donors. Users can search
            for potential donors based on blood group and location.
          </p>

          <p className="text-gray-600 mt-4 leading-7">
            We aim to build a community where people can connect,
            support each other and contribute to saving lives.
          </p>

        </div>

        <div className="bg-red-50 rounded-2xl p-12 text-center">
          <Heart size={150} className="text-red-600 mx-auto" fill="#dc2626" />
          <h3 className="text-2xl font-bold mt-5">
            Every Drop Matters
          </h3>
        </div>

      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Our Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <Target size={45} className="text-red-600" />

              <h3 className="text-2xl font-bold mt-5">
                Our Mission
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                To make blood donor searching simple and accessible
                by connecting potential donors with people who need
                blood.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <Eye size={45} className="text-red-600" />

              <h3 className="text-2xl font-bold mt-5">
                Our Vision
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                To create a connected community where finding
                potential blood donors becomes easier and more
                convenient.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="text-center p-7 border rounded-xl">
            <Heart size={45} className="text-red-600 mx-auto" />
            <h3 className="font-bold text-xl mt-4">Compassion</h3>
            <p className="text-gray-500 mt-3">
              Supporting people through the power of donation.
            </p>
          </div>

          <div className="text-center p-7 border rounded-xl">
            <ShieldCheck size={45} className="text-red-600 mx-auto" />
            <h3 className="font-bold text-xl mt-4">Trust</h3>
            <p className="text-gray-500 mt-3">
              Respecting donor privacy and responsible information handling.
            </p>
          </div>

          <div className="text-center p-7 border rounded-xl">
            <Users size={45} className="text-red-600 mx-auto" />
            <h3 className="font-bold text-xl mt-4">Community</h3>
            <p className="text-gray-500 mt-3">
              Building connections between donors and recipients.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white text-center py-16 px-6">

        <h2 className="text-3xl font-bold">
          Be Part of LifeLink
        </h2>

        <p className="mt-4">
          Join our community and become a potential lifesaver.
        </p>

        <Link
          to="/register"
          className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg mt-7 hover:bg-gray-100"
        >
          Join Now
        </Link>

      </section>

    </div>
  )
}

export default About