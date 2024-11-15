import {Raleway} from "next/font/google"

const relaway = Raleway({subsets: ["cyrillic"], weight: ["500"]})

function Banner() {
  return (
    <div className='bg-[url(/background.png)] bg-center flex justify-center items-center bg-black/60 text-black h-[45vh] w-full border-4 md:border-slate-300  rounded-xl '>
      <div
        className={`text-white bg-black/50 w-full p-8 flex justify-center rounded text-center text-2xl md:text-4xl mb-24 ${relaway.className}`}
      >
        The gateway to hobby excellence. Unleash your hobbyist spirit, fully
        equipped!
      </div>
    </div>
  )
}

export default Banner
