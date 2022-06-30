//array interpolation exercise, fetching data using axios.get

import { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, set_articles] = useState([]);

  //clear article list by "setting" state to blank array
  const clearArticles = () => {
    set_articles([]);
  };

  //added this function to "unclear" articles

  const showArticles = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    set_articles(res.data);
  };

  //useEffect to perform async function to fetch data on page mount
  useEffect(() => {
    async function doSomeDataFetching() {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button onClick={clearArticles}>Clear Articles</button>
      <button onClick={showArticles}>Show Articles</button>
      {articles.map((article) => {
        return (
          <ArticleCard
            key={article.id}
            title={article.title}
            content={article.body}
          />
        );
      })}
    </div>
  );
}
