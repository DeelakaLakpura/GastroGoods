"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { AiOutlineFundView } from "react-icons/ai";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  console.log(productRating);

  return (
    <div
    
      className="col-span-1
    cursor-pointer
    border-[1.3px]
    border-green-400
    bg-slate-50
    rounded-md
    p-2
    transition
    hover:scale-105
    text-center
    text-sm
    "
    >
      <div
        className="
      flex
      flex-col
      items-center
      w-full
      gap-1
      "
      >
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
        <Button onClick={() => router.push(`/product/${data.id}`)} icon={AiOutlineFundView} label="View Product" ></Button>
      </div>
    </div>
  );
};

export default ProductCard;
