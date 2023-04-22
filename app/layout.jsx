import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter(
  { subsets: ['latin'] }
)

export const metadata = {
  title: 'Explore it',
  description: 'Noyan Dey is exploring next.js 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
