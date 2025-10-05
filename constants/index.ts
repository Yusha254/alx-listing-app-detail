//Constants
import { PropertyProps } from "@/interfaces/index";
import HeroImage from "@/public/assets/hero.jpg";
import LogoDark from "@/public/assets/ALX_LOGO_DARK.png";
import LogoLight from "@/public/assets/ALX_LOGO_LIGHT.png";

export const HERO_IMAGE = HeroImage;
export const LOGO_DARK = LogoDark;
export const LOGO_LIGHT = LogoLight;

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    description: "A luxurious seaside villa with sweeping ocean views and a private infinity pool — perfect for relaxation and sunsets.",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    discount: ""
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    description: "Nestled in the Aspen mountains, this cozy chalet features a fireplace, mountain views, and a tranquil retreat atmosphere.",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
    discount: "30"
  },
  {
    id: 3,
    name: "Cozy Desert Retreat",
    description: "A stylish desert hideaway surrounded by stunning dunes and clear skies, ideal for couples or solo travelers.",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg",
    discount: ""
  },
  {
    id: 4,
    name: "City Lights Penthouse",
    description: "A modern penthouse offering breathtaking views of New York’s skyline and luxurious urban comfort.",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_1280.jpg",
    discount: "15"
  },
  {
    id: 5,
    name: "Riverside Cabin",
    description: "A peaceful riverside retreat with private dock and complimentary kayaks — perfect for nature lovers.",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "https://cdn.pixabay.com/photo/2022/06/02/11/12/felucca-7237715_1280.jpg",
    discount: "20"
  },
  {
    id: 6,
    name: "Modern Beachfront Villa",
    description: "An elegant beachfront villa with a private pool, dedicated chef, and stunning sea views in Bali.",
    address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "https://cdn.pixabay.com/photo/2020/04/17/12/28/pool-5055009_1280.jpg",
    discount: ""
  },
  {
    id: 7,
    name: "Lakeside Chalet",
    description: "Experience lakeside serenity with mountain views, hiking trails, and a cozy alpine vibe.",
    address: { state: "Banff", city: "Alberta", country: "Canada" },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://cdn.pixabay.com/photo/2017/08/10/18/33/chalet-2626127_1280.jpg",
    discount: "10"
  },
  {
    id: 8,
    name: "Tropical Garden Villa",
    description: "A lush tropical escape surrounded by palm trees, with private gardens and open-air living spaces.",
    address: { state: "Koh Samui", city: "Surat Thani", country: "Thailand" },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: { bed: "3", shower: "3", occupants: "5-6" },
    image: "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_1280.jpg",
    discount: "25"
  },
  {
    id: 9,
    name: "Urban Loft",
    description: "A sleek and modern loft in the heart of Berlin, designed for the ultimate city experience.",
    address: { state: "Berlin", city: "Berlin", country: "Germany" },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://cdn.pixabay.com/photo/2021/10/30/18/03/berlin-6755246_1280.jpg",
    discount: ""
  },
  {
    id: 10,
    name: "Secluded Forest Cabin",
    description: "Hidden deep in the forest, this cabin offers a private hot tub and complete seclusion for true peace.",
    address: { state: "Whistler", city: "British Columbia", country: "Canada" },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://cdn.pixabay.com/photo/2020/12/19/10/45/mountains-5844031_1280.jpg",
    discount: "40"
  },
  {
    id: 11,
    name: "Cliffside Villa",
    description: "An Amalfi Coast masterpiece perched on a cliff with an infinity pool and jaw-dropping sea views.",
    address: { state: "Amalfi", city: "Salerno", country: "Italy" },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "https://cdn.pixabay.com/photo/2017/06/12/21/03/infinity-pool-2396808_1280.jpg",
    discount: "50"
  },
  {
    id: 12,
    name: "Coastal Escape Villa",
    description: "A relaxing beachside villa with modern design, perfect for families or romantic getaways.",
    address: { state: "Noosa", city: "Queensland", country: "Australia" },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://cdn.pixabay.com/photo/2020/06/04/04/12/beach-5257079_1280.jpg",
    discount: ""
  },
  {
    id: 13,
    name: "Historical Villa",
    description: "A beautifully restored Tuscan villa offering classic Italian charm and modern comforts.",
    address: { state: "Florence", city: "Tuscany", country: "Italy" },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://cdn.pixabay.com/photo/2020/04/23/03/21/italy-5080894_1280.jpg",
    discount: "35"
  },
  {
    id: 14,
    name: "Downtown Apartment",
    description: "A minimalist Tokyo apartment with panoramic city views and easy access to public transport.",
    address: { state: "Tokyo", city: "Tokyo", country: "Japan" },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: { bed: "1", shower: "1", occupants: "2" },
    image: "https://cdn.pixabay.com/photo/2020/01/15/19/05/shibuyasky-4768679_1280.jpg",
    discount: ""
  },
  {
    id: 15,
    name: "Luxury Safari Lodge",
    description: "An unforgettable safari lodge in Serengeti featuring guided tours, luxury tents, and wildlife views.",
    address: { state: "Serengeti", city: "Mara", country: "Tanzania" },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "https://cdn.pixabay.com/photo/2022/08/10/10/04/safari-7376766_1280.jpg",
    discount: "20"
  },
  {
    id: 16,
    name: "Countryside Cottage",
    description: "A charming English countryside cottage with a cozy fireplace and traditional design.",
    address: { state: "Cotswolds", city: "Gloucestershire", country: "UK" },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "2", shower: "1", occupants: "2-4" },
    image: "https://cdn.pixabay.com/photo/2019/03/01/18/52/house-4028391_1280.jpg",
    discount: "25"
  },
  {
    id: 17,
    name: "Riverfront Mansion",
    description: "An elegant mansion along the Seine River with private gardens and classic Parisian architecture.",
    address: { state: "Paris", city: "Île-de-France", country: "France" },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: { bed: "4", shower: "3", occupants: "6-8" },
    image: "https://cdn.pixabay.com/photo/2018/08/03/15/02/channel-3582081_1280.jpg",
    discount: "30"
  },
  {
    id: 18,
    name: "Ski Chalet",
    description: "A luxurious ski-in/ski-out chalet in Zermatt with a warm fireplace and breathtaking alpine views.",
    address: { state: "Zermatt", city: "Valais", country: "Switzerland" },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://cdn.pixabay.com/photo/2019/12/29/17/45/winter-4727668_1280.jpg",
    discount: ""
  },
  {
    id: 19,
    name: "Island Paradise Villa",
    description: "A breathtaking Seychelles beachfront villa offering complete privacy and unmatched luxury.",
    address: { state: "Mahe", city: "Victoria", country: "Seychelles" },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: { bed: "5", shower: "5", occupants: "8-10" },
    image: "https://cdn.pixabay.com/photo/2016/10/22/18/52/beach-1761410_1280.jpg",
    discount: "60"
  },
  {
    id: 20,
    name: "Clifftop Retreat",
    description: "A contemporary villa overlooking the Cape Town coastline with sweeping ocean views and private pool.",
    address: { state: "Cape Town", city: "Western Cape", country: "South Africa" },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://cdn.pixabay.com/photo/2016/08/02/09/46/cape-town-1562907_1280.jpg",
    discount: ""
  }
];
