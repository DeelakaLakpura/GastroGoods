
import { MdEmojiFoodBeverage } from "react-icons/md";
import { GiFishBucket, GiMeat, GiMilkCarton, GiPotato } from "react-icons/gi";
import { FaCarrot, FaShoppingBag } from "react-icons/fa";

export const categories = [
  {
    label: "All",
    icon: FaShoppingBag,
  },
  {
    label: "Vegetables",
    icon: FaCarrot,
  },
  {
    label: "Dairy",
    icon: GiMilkCarton,
  },
  {
    label: "Meat",
    icon: GiMeat,
  },
  {
    label: "Fish & Seafood",
    icon: GiFishBucket,
  },
  {
    label: "Snacks",
    icon: GiPotato,
  },
  {
    label: "Beverages",
    icon: MdEmojiFoodBeverage,
  },
];
