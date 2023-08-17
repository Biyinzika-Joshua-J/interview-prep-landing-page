import './globals.css'
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Land Your Dream Job',
  description: 'Land your dream dev job...',
}
import { Navbar, Footer } from '../../components'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
        <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>

    </html>
  )
}
