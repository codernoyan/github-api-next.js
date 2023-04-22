import Repo from "@/app/components/Repo";
import Link from "next/link";

export default function RepoPage({ params: { name } }) {
  return (
    <div className="mt-2 p-2">
      <div className="mt-2">
        <Link href="/codes/repos" className="bg-slate-100 font-semibold px-4 py-2 hover:bg-slate-900 hover:text-white transition-colors">Back to Repositories</Link>
      </div>
      <Repo name={name} />
    </div>
  )
}