import Link from "next/link";

async function getGithubUser(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const user = await response.json();
  return user;
}

export default async function Codes() {
  const user = await getGithubUser('Preankasaha');
  const { login, avatar_url, html_url, created_at, public_repos } = user || {};

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
    <section className="flex justify-center mt-2">
      <div className="space-y-1">
        {/* <Image src={avatar_url} height={400} width={400} alt="avtar" /> */}
        <img src={avatar_url} alt="avtar" className="h-80 w-full" />
        <h2><span className="font-semibold">User Name:</span> {login}❤️</h2>
        <h2><span className="font-semibold">Total Repositories:</span> {public_repos}</h2>
        <h2><span className="font-semibold">Created at:</span> {showLocalDateTime(created_at)}</h2>
        <hr />
        <div className="flex justify-between item-center">
          <Link href={html_url} className="bg-slate-900 text-white font-semibold px-4 py-2 hover:bg-slate-100 hover:text-black transition-colors" target="_blank">Visit Profile</Link>
          <Link href="/codes/repos" className="bg-slate-100 font-semibold px-4 py-2 hover:bg-slate-900 hover:text-white transition-colors">View Repositories</Link>
        </div>
      </div>
    </section>
  )
}