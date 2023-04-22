import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="space-y-2">
        <h1 className="text-xl font-semibold">Wanna see your GitHub profile</h1>
        <div className="flex justify-center">
          <Link href="/codes" className="bg-slate-900 text-white font-semibold px-4 py-2 hover:bg-slate-100 hover:text-black transition-colors">Click here</Link>
        </div>
      </div>
    </main>
  )
}
