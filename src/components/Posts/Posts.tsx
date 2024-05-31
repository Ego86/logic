// components/Posts/Posts.tsx
import React, { ReactNode } from "react";
import styles from "./Posts.module.scss";

type IPost = {
  [x: string]: ReactNode;
  id: number;
  name: string;
  tags: string[];
  image: string;
};

type PostsProps = {
  posts: IPost[];
  isLoading: boolean;
  error: string | null;
};

const Posts: React.FC<PostsProps> = ({ posts, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.cardContainer}>
      {posts.map((post) => (
        <div style={{background: String(post.bgColor)}} key={post.id} className={styles.card}>
          <img src={String(post.image)} alt={String(post.name)} />
          <p>{post.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
