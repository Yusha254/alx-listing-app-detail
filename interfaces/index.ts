//Interfaces
import { ReactNode } from "react";

export interface PropertyProps {
  id: number;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description: string;
}

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "search" | "profile" | "info" | "primary" | "secondary";
  icon?: ReactNode; // for react-icons later
}

export interface CardProps {
  property: PropertyProps;
}

export interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}