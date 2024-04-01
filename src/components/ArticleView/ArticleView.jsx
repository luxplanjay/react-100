export default function ArticleView({ article: { topic, text } }) {
  return (
    <article>
      <h2>{topic}</h2>
      <p>{text}</p>
    </article>
  );
}
