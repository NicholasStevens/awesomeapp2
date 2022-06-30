import React from "react";
import { useState } from "react";

export default function LikeCounter() {
  const intial_numLikes = 0;
  const [numLikes, set_numlikes] = useState(intial_numLikes);

  const increment = () => {
    set_numlikes(numLikes + 1);
  };

  return (
    <div>
      <p>
        This Pokemon has <b>{numLikes}</b> likes
      </p>
      <button onClick={increment}>Like</button>
    </div>
  );
}
