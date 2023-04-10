import Link from "next/link";
import Image from "next/image";
import { Product } from "../types/Product";

export default function ProductCard({
  image,
  title,
  price,
  url,
  description,
}: Product) {
  return (
    <div className="flex flex-col  items-center gap-2 border-2 border-black rounded p-4">
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="w-full h-[120px] relative">
        <Image
          src={image}
          alt={`${title}`}
          fill
          className="object-cover"
        ></Image>
      </div>

      <p>{description}</p>
      <Link
        href={url}
        target="_blank"
        className="bg-black text-white w-full p-4 text-center "
      >
        Get on Amazon {`$${price}`}
      </Link>
    </div>
  );
}
