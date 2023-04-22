import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between bg-slate-900 text-white px-2 py-4">
      <h2 className="text-xl font-semibold cursor-pointer">Logo</h2>
      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/team">Team</Link></li>
        <li><Link href="/codes">Codes</Link></li>
      </ul>
    </nav>
  )
}