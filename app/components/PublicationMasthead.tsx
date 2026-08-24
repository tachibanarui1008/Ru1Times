export function PublicationMasthead({
  edition,
  publishedAt,
  title,
  subtitle,
}: {
  edition: number;
  publishedAt: string;
  title: string;
  subtitle: string;
}) {
  const displayDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Asia/Shanghai",
  }).format(new Date(publishedAt));
  const issueLabel = `第 ${String(edition).padStart(3, "0")} 期`;

  return <header className="publication-masthead" id="top">
    <div className="publication-edition">
      <span>{issueLabel}</span>
      <time dateTime={publishedAt}>{displayDate}</time>
    </div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </header>;
}
