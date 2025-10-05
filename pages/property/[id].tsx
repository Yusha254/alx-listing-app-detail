import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => item.id.toString() === id
  );

  if (!property) return <p className="text-center mt-20">Property not found</p>;

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
    <div className="container mx-auto p-6 space-y-12">
      <PropertyDetail property={property} />
      <ReviewSection reviews={mockReviews} />
    </div>
  );
}
