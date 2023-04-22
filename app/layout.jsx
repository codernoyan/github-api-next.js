import Header from './components/Header'
import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter(
  { subsets: ['latin'] }
)

const robotoMono = Roboto_Mono({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Explore github',
  description: 'Noyan Dey is exploring next.js 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
