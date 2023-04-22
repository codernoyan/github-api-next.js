import Link from "next/link";

async function getRepos() {
  const response = await fetch('https://api.github.com/users/Preankasaha/repos');
  const repos = await response.json();
  return repos;
}

export default async function Repos() {
  const repos = await getRepos();
  return (
    <section className="px-2 mb-6">
      <h2 className="text-xl font-bold">Repos of Divai</h2>
      {/* repos list */}
      <div className="mt-4">
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            repos?.map(({ id, name, description, owner, watchers_count }) => (
              <li key={id} className="bg-slate-100 p-2 rounded-sm">
                <Link href={`/codes/repos/${name}`}>
                  <h3><span className="font-semibold">Name:</span> {name}</h3>
                  <p><span className="font-semibold">Description:</span>
                    {description ? description : 'Not available'}
                  </p>
                  <h3><span className="font-semibold">Owner:</span> {owner?.login}</h3>
                  <h3><span className="font-semibold">Views:</span> {watchers_count}</h3>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}