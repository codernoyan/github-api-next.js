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

export default async function Repo({ name }) {
  const repo = await getRepo(name);
  // languages
  const languages = await getLanguages(name);

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
      <h2>Name: {repo?.name}</h2>
      <p>Description: {repo?.description ? repo?.description : 'Not available'}</p>
      <p>Forks Count: {repo?.forks_count}</p>
      <p>Views Count: {repo?.watchers_count}</p>
      <div>
        <h2>Languages used:</h2>
        <ul>
          {
            Object.keys(languages)?.map((language, i) => (
              <li key={i}>{`${i + 1}. ${language}`}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h2>Created at: {showLocalDateTime(repo?.created_at)}</h2>
        {/* <h2>Last updated: {showLocalDateTime(repo?.updated_at)}</h2> */}
        <h2>Last Pushed: {showLocalDateTime(repo?.pushed_at)}</h2>
      </div>
      <Link href={repo?.html_url} className="underline decoration-slate-900 mt-2" target="_blank">View this repository</Link>
    </section>
  )
}