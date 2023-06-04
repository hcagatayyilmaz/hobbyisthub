import Link from 'next/link'
import Image from 'next/image'
import { Product } from '../types/Product'

export default function ProductCard({
  image,
  title,
  price,
  url,
  description,
}: Product) {
  return (
    <div className="flex flex-col justify-between items-center gap-2 border-2 border-black rounded ">
      <div>
        <h1 className="text-2xl font-bold p-4">{title}</h1>

        <div className="w-full h-[200px] relative">
          <Image
            src={image}
            alt={`${title}`}
            fill
            style={{ objectFit: 'contain' }}
          ></Image>
        </div>
        <p className="mt-2 px-4">{description}</p>
      </div>

      <Link
        href={url}
        target="_blank"
        className="bg-black text-white w-full p-4 text-center "
      >
        Get on Amazon {`$${price}`}
      </Link>
    </div>
  )
}
