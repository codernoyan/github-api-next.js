async function getGithubUser(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const user = await response.json();
}

export default async function Codes() {
  const user = await getGithubUser('Preankasaha');
  const { login, avatar_url, html_url, created_at } = user || {};
  return (
    <section>
      <h2>{login}</h2>
    </section>
  )
}