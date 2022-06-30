//interpolating array exercise
import React from "react";
import { useState } from "react";

export default function AwesomeAnimals() {
  return (
    <div>
      <p>AwesomeAnimals</p>
      <ul>
        {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
          (animal, index) => {
            return (
              <li key={index}>
                Awesomeness level {index + 1}: {animal}
              </li>
            );
          }
        )}{" "}
      </ul>
    </div>
  );
}
