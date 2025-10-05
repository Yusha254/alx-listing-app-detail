import { useState } from "react";
import Image from "next/image";
import HERO_IMAGE from "@/public/assets/hero.jpg";
import Pill from "@/components/layout/Pill";
import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

// Filters you want to display:
const filters = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay later",
  "Self CheckIn",
  "Instant Book",
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter the properties based on activeFilter
  const filteredProperties =
    activeFilter === "All"
      ? PROPERTYLISTINGSAMPLE
      : PROPERTYLISTINGSAMPLE.filter((property) =>
          property.category.some(
            (cat) =>
              cat.toLowerCase() === activeFilter.toLowerCase() // exact match
          )
        );

  return (
  <div className="container mx-auto px-6 py-4 sm:px-6 lg:px-8 space-y-10">
    {/* Hero Section */}
    <section className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-sm md:text-lg max-w-xl">
          The best prices for over 2 million properties worldwide
        </p>
      </div>
    </section>

    {/* Filter Pills */}
    <section className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          active={activeFilter === filter}
          onClick={() => setActiveFilter(filter)}
        />
      ))}
    </section>

    {/* Property Cards Grid */}
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProperties.map((property) => (
        <Card key={property.name} property={property} />
      ))}
    </section>
  </div>
);

}
