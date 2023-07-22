import Link from 'next/link'
import Image from 'next/image'
import { Product } from '../types/Product'

export default function ProductCard({
  image,
  title,
  price,
  url,
  description,
  color,
}: Product) {
  return (
    <div className="flex flex-col max-w-screen-md justify-between items-center gap-2 border-2  border-orange-600	 rounded text-xs md:text-base">
      <div className="flex gap-2">
        <div className="w-full md:h-[200px] m-2 relative top-2 ">
          <Image
            src={image}
            alt={`${title}`}
            fill
            style={{ objectFit: 'contain' }}
          ></Image>
        </div>
        <div>
          <h1 className="text-xl font-bold p-4">{title}</h1>
          <p className="mt-2 px-4 text-sm">{description}</p>
        </div>
      </div>

      <Link
        href={url}
        target="_blank"
        className={`text-white w-full p-3 text-center bg-orange-600`}
      >
        Get on Amazon {`$${price}`}
      </Link>
    </div>
  )
}
