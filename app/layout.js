// app/layout.js
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import LoadingProvider from '@/components/LoadingProvider'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'KOI Build Co | Home Remodeling Olympia WA',
  description: 'Olympia\'s trusted remodeling company. Free estimates.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <LoadingProvider>
          <Navbar />
          <main>{children}</main>
          <Footer/>
        </LoadingProvider>
        
      </body>
    </html>
  )
}