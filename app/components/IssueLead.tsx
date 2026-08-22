export function IssueLead({
  eyebrow,
  title,
  subtitle,
  dek,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  dek: string;
}) {
  return <section className="issue-lead" aria-label="本期导读">
    <p>{eyebrow}</p>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p className="issue-lead-dek">{dek}</p>
  </section>;
}
