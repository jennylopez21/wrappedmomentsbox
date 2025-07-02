export default function Benefits({ t }) {
  return (
    <section id="benefits">
      <h2>{t.benefits}</h2>
      <ul className="benefit-list">
        <li dangerouslySetInnerHTML={{ __html: t.benefit1 }} />
        <li dangerouslySetInnerHTML={{ __html: t.benefit2 }} />
        <li dangerouslySetInnerHTML={{ __html: t.benefit3 }} />
      </ul>
    </section>
  );
}
