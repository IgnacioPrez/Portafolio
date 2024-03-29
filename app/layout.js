import { Navbar } from '@/components'
import './globals.css'
import { Footer } from '@/components/footer-cont'
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  variable: '--font-openSans',
  display: 'optional',
  preload: false
})
export const metadata = {
  title: 'Ignacio Perez - Portafolio',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
