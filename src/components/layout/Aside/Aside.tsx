// components/layout/Aside/Aside.tsx
import React, { useState } from "react";
import styles from "./Aside.module.scss";

type AsideProps = {
  tags: string[];
  setSelectedTag: (tag: string) => void;
};

const Aside: React.FC<AsideProps> = ({ tags, setSelectedTag }) => {
  const [activeTag, setActiveTag] = useState<string>("Все темы");

  const handlePostClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    tag: string
  ) => {
    event.preventDefault();
    setActiveTag(tag);
    setSelectedTag(tag);
  };

  return (
    <aside className={styles.aside}>
      <ul>
        {tags.map((tag, index) => (
          <li
            className={`${styles.categoryItem} ${
              activeTag === tag ? styles.active : ""
            }`}
            key={index}
            onClick={(event) => handlePostClick(event, tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
