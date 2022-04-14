import React, { useState, useEffect } from "react";
import { Button, Topic } from "../components";

/**
 * A simple function to fetch some data
 */
const asyncFetch = async (name, callback) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  const dataAboutDitto = await response.json();
  console.log(`${name} - dataAboutDitto is `, dataAboutDitto);
  callback();
};

const BrokenFetch = () => {
  const [count, setCount] = useState(0);
  // by fetching data in a component without useEffect it will fire on every render 😱
  asyncFetch("BrokenFetch", () => setCount(count + 1));

  return <div>Broken component triggers a fetch on each render!</div>;
};

const FetchWithUseEffect = () => {
  // fill me in...
  return <div>Our component which won't crash...</div>;
};

export const FetchingInComponents = () => {
  const [breakThePage, setBreakThePage] = useState(false);
  const [showHappyComponent, setShowHappyComponent] = useState(false);
  return (
    <Topic title="2. Fetching data in components">
      <ol>
        <li>
          The wrong way{" "}
          <Button onClick={() => setBreakThePage(true)}>
            Show the broken fetch
          </Button>
          (Note: you might need to refresh the page after clicking)
          {breakThePage ? <BrokenFetch /> : null}
        </li>
        <li>
          With useEffect{" "}
          <Button onClick={() => setShowHappyComponent(true)}>
            Show the happy fetch
          </Button>
          {showHappyComponent ? <FetchWithUseEffect /> : null}
        </li>
      </ol>
    </Topic>
  );
};
