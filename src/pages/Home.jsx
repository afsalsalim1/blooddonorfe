import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import {
  Heart,
  Droplet,
  Search,
  ClipboardList,
  Users,
  UserRound,
  ShieldCheck
} from "lucide-react";

function Home() {
  const features = [
    {
      icon: UserRound,
      title: "Find Donors",
      description: "Search for blood donors near you and save lives."
    },
    {
      icon: Droplet,
      title: "Request Blood",
      description: "Need blood? Post a request and get help from donors."
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Be part of a community that cares."
    },
    {
      icon: Heart,
      title: "Make a Difference",
      description: "Your donation can save a life. Be a hero."
    }
  ];

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-red from-red-50 via-white to-red-100">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Donate Blood
              <span className="block text-red-600">
                Save Lives
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8">
              LifeLink connects blood donors with people in need.
              Be a hero. Donate blood. Make a difference.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Button
                color="failure"
                as={Link}
                to="/find-donors"
                size="lg"
              >
                <Search size={18} className="mr-2" />
                Find Donors
              </Button>

              <Button
                color="light"
                as={Link}
                to="/request-blood"
                size="lg"
              >
                <ClipboardList size={18} className="mr-2" />
                Request Blood
              </Button>

            </div>
          </div>

          {/* Hero Illustration */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-red-100 flex items-center justify-center">

              <div className="absolute inset-5 rounded-full border-2 border-red-200"></div>

              <Droplet
                size={190}
                fill="#DC2626"
                color="#DC2626"
                strokeWidth={1}
              />

              <div className="absolute -right-3 bottom-10 bg-white shadow-lg rounded-xl p-4">
                <Heart
                  className="text-red-600"
                  fill="#DC2626"
                  size={35}
                />
                <p className="font-semibold text-gray-800 text-sm">
                  Save Lives
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="text-center p-7 hover:bg-red-50 rounded-xl transition duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-red-100 flex items-center justify-center">
                  <Icon
                    size={28}
                    className="text-red-600"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-6">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
}

export default Home;