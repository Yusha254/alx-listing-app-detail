import { PropertyProps } from "@/interfaces/index";
import { FaStar, FaMapMarkerAlt, FaBath } from "react-icons/fa";
import { IoBedSharp, IoPeopleSharp } from "react-icons/io5";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const mockReviews = [
    {
      name: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment:
        "Absolutely loved this villa! The view was incredible and the amenities were top-notch.",
    },
    {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      comment:
        "Great stay overall, but WiFi could have been stronger. Would still recommend!",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Title + Location */}
      <div>
        <h1 className="text-4xl font-bold">{property.name}</h1>

        <div className="flex items-center gap-3 mt-3 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">{property.rating}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-500" />
            <span>
              {property.address.city}, {property.address.country}
            </span>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="w-full">
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[400px]">
          <img
            src={property.image}
            alt={property.name}
            className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg"
            alt="Second"
            className="col-span-2 w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg"
            alt="Third"
            className="col-span-1 w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg"
            alt="Fourth"
            className="col-span-1 w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-2">
          {[property.image,
            "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg",
            "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
            "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`image-${i}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* 🛏️ Bathroom / Bedroom / Occupants Info */}
      <div className="flex flex-wrap items-center gap-6 text-gray-700 text-base mt-4">
        <div className="flex items-center gap-2">
          <IoBedSharp className="text-lg text-gray-600" />
          <span>{property.offers.bed} bedrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <FaBath className="text-lg text-gray-600" />
          <span>{property.offers.shower} bathrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <IoPeopleSharp className="text-lg text-gray-600" />
          <span>{property.offers.occupants} guests</span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>

      {/* Amenities */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
        <ul className="flex flex-wrap gap-3">
          {property.category.map((amenity, index) => (
            <li
              key={index}
              className="bg-gray-100 px-3 py-2 rounded-md text-sm text-gray-700"
            >
              {amenity}
            </li>
          ))}
        </ul>
      </div>

      {/* Booking Section */}
      <BookingSection price={property.price} />

      {/* Reviews */}
      <ReviewSection reviews={mockReviews} />
    </div>
  );
};

export default PropertyDetail;
