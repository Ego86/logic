// App.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Aside from "@components/layout/Aside/Aside";
import Posts from "@components/Posts/Posts";

type IPost = {
  id: number;
  name: string;
  tags: string[];
  image: string;
};

const App: React.FC = () => {
  const [dataPosts, setDataPosts] = useState<IPost[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("Все темы");

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((response) => {
        setDataPosts([...response.data]);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const allTags = ["Все темы", ...new Set(dataPosts.reduce<string[]>((acc, post) => {
    return acc.concat(post.tags);
  }, []))];

  const filteredPosts = selectedTag === "Все темы"
    ? dataPosts
    : dataPosts.filter(post => post.tags.includes(selectedTag));

  return (
    <main style={{ padding: "24px", height: "100vh", display: "flex" }}>
      <Aside tags={allTags} setSelectedTag={setSelectedTag} />
      <Posts posts={filteredPosts} isLoading={isLoading} error={error} />
    </main>
  );
};

export default App;
