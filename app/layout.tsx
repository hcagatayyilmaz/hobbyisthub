import "./globals.css"
import Announcement from "./components/Announcement"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export const metadata = {
  title: "Hobbyist Up",
  description: "Starting point for your next hobby journey!"
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <Announcement />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
