import React from "react";
import { useState } from "react";

export default function LikePageButton() {
  const [liked, setLiked] = useState(false);

  const likePage = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button onClick={likePage}>
        {liked ? "You like this" : "Like Page"}
      </button>
    </div>
  );
}
