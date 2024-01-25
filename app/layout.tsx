import "./globals.css"
import Announcement from "./components/Announcement"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {GoogleAnalytics} from "@next/third-parties/google"

export const metadata = {
  title: "Hobbyist Up!",
  description: "Starting point for your next hobby journey!"
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <Announcement />
        <Navbar />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY} />
        <Footer />
      </body>
    </html>
  )
}
