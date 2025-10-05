// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { LOGO_LIGHT } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-[#151117] text-gray-300 px-6 py-14">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top: Logo + Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo & Description */}
          <div className="md:w-1/2 space-y-4">
            <Link href="/">
              <Image
                src={LOGO_LIGHT}
                alt="alx"
                width={50}
                height={25}
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed md:max-w-md">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              apartments and tranquil countryside retreats to exotic beachside
              villas, ALX connects you with the perfect place to stay for any
              trip.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:w-1/2">
            {/* Explore */}
            <div>
              <h3 className="text-white font-semibold mb-4">Explore</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#">Apartments in Dubai</Link></li>
                <li><Link href="#">Hotels in New York</Link></li>
                <li><Link href="#">Villa in Spain</Link></li>
                <li><Link href="#">Mansion in Indonesia</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#">About us</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Career</Link></li>
                <li><Link href="#">Customers</Link></li>
                <li><Link href="#">Brand</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-white font-semibold mb-4">Help</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#">Support</Link></li>
                <li><Link href="#">Cancel booking</Link></li>
                <li><Link href="#">Refunds Process</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm gap-6">
          <p>
            Some hotels require you to cancel more than 24 hours before
            check-in. Details{" "}
            <Link href="#" className="text-[#34967c] hover:underline">
              here
            </Link>
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="#">Terms of Service</Link>
            <Link href="#">Policy service</Link>
            <Link href="#">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
