type ContentItem = string | { bold: string } | { br: string };

export function renderContentItem(a: ContentItem, i: number) {
  if (typeof a === "string") return a;
  if ("bold" in a) return <b key={i}>{a.bold}</b>;
  if ("br" in a)
    return (
      <span key={i}>
        <br />
        {a.br}
      </span>
    );
  return null;
}
