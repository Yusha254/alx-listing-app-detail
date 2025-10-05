import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function ListingSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property) => (
            <Card key={property.name} property={property} />
        ))}
    </section>
  );
}

