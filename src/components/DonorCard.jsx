import { Card, Badge, Button } from "flowbite-react";
import { MapPin, Phone, Droplet } from "lucide-react";

function DonorCard({ donor }) {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-xl font-bold">
            {donor.name}
          </h5>
          <p className="text-gray-500 text-sm">
            Blood Donor
          </p>
        </div>

        <div className="bg-red-100 text-red-600 p-4 rounded-xl text-xl font-bold">
          {donor.bloodGroup}
        </div>
      </div>

      <div className="space-y-3 text-gray-600">
        <p className="flex gap-2">
          <MapPin size={18} />
          {donor.location}, {donor.district}
        </p>

        <p className="flex gap-2">
          <Droplet size={18} />
          {donor.bloodGroup}
        </p>

        <Badge color={donor.available ? "success" : "gray"}>
          {donor.available ? "Available (sample)" : "Unavailable"}
        </Badge>
      </div>

      <Button color="failure" disabled={!donor.available}
        onClick={() => alert("Demo only: donor contact is not connected yet.")}>
        <Phone size={16} className="mr-2" />
        Contact Donor
      </Button>
    </Card>
  );
}

export default DonorCard;