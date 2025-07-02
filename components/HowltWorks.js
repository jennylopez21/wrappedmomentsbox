export default function HowItWorks({ t }) {
  return (
    <section id="how">
      <h2>{t.how}</h2>
      <ol>
        <li>{t.step1}</li>
        <li>{t.step2}</li>
        <li>{t.step3}</li>
      </ol>
    </section>
  );
}
