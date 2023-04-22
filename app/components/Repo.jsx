import Link from "next/link";

async function getRepo(name) {
  const response = await fetch(`https://api.github.com/repos/Preankasaha/${name}`);
  const repo = response.json();
  return repo;
}

async function getLanguages(name) {
  const response = await fetch(`https://api.github.com/repos/Preankasaha/${name}/languages`);
  const languages = response.json();
  return languages;
};
async function getCmmits(name) {
  const response = await fetch(`https://api.github.com/repos/Preankasaha/${name}/commits`);
  const commits = response.json();
  return commits;
};

export default async function Repo({ name }) {
  // repos
  const repo = await getRepo(name);
  // languages
  const languages = await getLanguages(name);

  // commits
  const commits = await getCmmits(name);

  // date format
  function showLocalDateTime(dateString) {
    const date = new Date(dateString);
    const options = {
      timeZone: 'Asia/Dhaka',
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat(undefined, options);
    const formattedDate = formatter.format(date);
    // console.log(formattedDate);
    return formattedDate;
  }

  return (
    <section className="mt-4 space-y-2">
      <h2><span className="font-semibold">Name:</span> {repo?.name}</h2>
      <p><span className="font-semibold">Description:</span> {repo?.description ? repo?.description : 'Not available'}</p>
      <p><span className="font-semibold">Forks Count:</span> {repo?.forks_count}</p>
      <p><span className="font-semibold">Views Count:</span> {repo?.watchers_count}</p>
      <p><span className="font-semibold">Total Commits:</span> {commits?.length}</p>
      <div>
        <h2 className="font-semibold">Languages used:</h2>
        <ul>
          {
            Object.keys(languages)?.map((language, i) => (
              <li key={i}>{`${i + 1}. ${language}`}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h2><span className="font-semibold">Created at:</span> {showLocalDateTime(repo?.created_at)}</h2>
        {/* <h2>Last updated: {showLocalDateTime(repo?.updated_at)}</h2> */}
        <h2><span className="font-semibold">Last Pushed:</span> {showLocalDateTime(repo?.pushed_at)}</h2>
      </div>
      <div className="mt-4">
        <Link href={repo?.html_url} className="bg-slate-100 font-semibold px-4 py-2 hover:bg-slate-900 hover:text-white transition-colors" target="_blank">View this repository</Link>
      </div>
    </section>
  )
}