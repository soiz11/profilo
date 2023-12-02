import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight:["100","200","300","400","500","600"] })

export const metadata = {
  title: 'Sohan.One',
  description: 'Profilo with NextJs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
