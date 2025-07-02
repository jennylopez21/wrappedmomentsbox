export default function About({ t }) {
  return (
    <section id="about">
      <h2>{t.about}</h2>
      <p dangerouslySetInnerHTML={{ __html: t.aboutText }} />
    </section>
  );
}
