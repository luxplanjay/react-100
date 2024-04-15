import css from "./ArticleList.module.css";

export default function ArticleList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.objectID}>
          <a className={css.link} href={item.url}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
