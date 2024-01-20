import Link from "next/link"
import Image from "next/image"
import {Product} from "../types/Product"

export default function ProductCard({
  image,
  title,
  price,
  url,
  description,
  color
}: Product) {
  return (
    <div className='flex w-full flex-col max-w-screen-md justify-between items-center gap-2 border-2  border-orange-600	 rounded text-xs md:text-base'>
      <div className='flex flex-col md:flex-row w-full gap-2'>
        <div className='w-full h-[200px] md:w-1/2 m-2 relative top-2'>
          <Image
            src={image}
            alt={`${title}`}
            fill
            style={{objectFit: "contain"}}
          ></Image>
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='text-xl md:text-2xl font-bold p-2'>{title}</h2>
          <p className='mt-2 px-2 text-sm'>{description}</p>
        </div>
      </div>

      <Link
        href={url}
        target='_blank'
        className={`text-white w-full p-3 text-center bg-orange-600`}
      >
        Get on Amazon {`$${price}`}
      </Link>
    </div>
  )
}
