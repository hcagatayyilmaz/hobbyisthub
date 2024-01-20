import {
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPinterest,
  FaReddit,
  FaFacebook,
  FaTwitter
} from "react-icons/fa"
import Link from "next/link"

function Footer() {
  return (
    <div className='mx-auto max-w-screen-xl flex items-center justify-between text-xl py-8 px-4'>
      <div className='hover:animate-bounce'>
        <span className='text-yellow-400 font-bold'>H</span>obbyist Up
      </div>
      <div className='flex text-2xl gap-4'>
        <Link
          href={"https://discord.gg/b5kakq3z"}
          rel='noopener noreferrer'
          target='_blank'
          className='hover:animate-bounce'
        >
          <FaDiscord />
        </Link>
        <Link
          href={"https://instagram.com/hobbyistup"}
          rel='noopener noreferrer'
          target='_blank'
          className='hover:animate-bounce'
        >
          <FaInstagram />
        </Link>
        {/* <Link
          href={"https://facebook.com/hobbistup"}
          rel='noopener noreferrer'
          target='_blank'
        >
          <FaFacebook />
        </Link> */}
        <Link
          href={"https://pin.it/3zUAGNF"}
          rel='noopener noreferrer'
          target='_blank'
          className='hover:animate-bounce'
        >
          <FaPinterest />
        </Link>
      </div>
    </div>
  )
}

export default Footer
