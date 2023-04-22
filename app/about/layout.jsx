import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'About - Explore it',
  description: 'Noyan Dey is exploring next.js 13',
}

export default function AboutLayout({ children }) {
  return (
    <div className={robotoMono.className}>
      <h2>this is the about layout</h2>
      {children}
    </div>
  )
}