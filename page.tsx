export default function Home() {
  return (
    <main style={{padding: "40px", maxWidth: "900px", margin: "auto"}}>
      <h1>Backstage Wire</h1>
      <p>Music news and the culture around it.</p>

      <section style={{marginTop: "40px"}}>
        <h2>Latest Stories</h2>

        <article>
          <h3>Richmond’s Indie Scene Is Quietly Exploding</h3>
          <p>From DIY venues to viral TikTok moments, the next wave of artists is coming from unexpected places.</p>
        </article>

        <article>
          <h3>Festival Season Is Back</h3>
          <p>Tour buses are rolling again and crowds are returning to the fields.</p>
        </article>

        <article>
          <h3>New Music Friday Highlights</h3>
          <p>The releases everyone is talking about this week.</p>
        </article>
      </section>
    </main>
  );
}
