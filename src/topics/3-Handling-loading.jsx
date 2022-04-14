import React, { useState, useEffect } from "react";
import { Button, Topic } from "../components";

const mockDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * A simple function to fetch some data
 */
const asyncFetch = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const dataAboutDitto = await response.json();
  // our API is quick so lets mock some delay in the response
  await mockDelay(1500);
  return dataAboutDitto;
};

// add some loading state to our component
const LoadingDittoComponent = () => {
  // our data about ditto is initially undefined
  const [ditto, setDitto] = useState();

  // we use an asyncrounous function to await our response
  const getDitto = async () => {
    const ditto = await asyncFetch();
    // this code won't run until our data is returned
    // then we set our ditto data in state and update the loading indicator
    setDitto(ditto);
  };

  // fetch data about ditto on first mount
  useEffect(() => {
    getDitto();
  }, []);

  return (
    <div>
      {/* Conditionally mount our component when it isn't loading */}
      <div>
        Pokemon name: {ditto.name} #{ditto.id}
      </div>
    </div>
  );
};

export const HandlingLoading = () => {
  // let's add some state to track loading
  // we need to trigger it from the button below
  return (
    <Topic title="3. Handling loading while we wait">
      <ol>
        <li>
          Setting and unsetting a loading state variable
          <Button onClick={() => undefined}>Mount the loadable Ditto ⌛</Button>
          {/* Conditionally mount our component */}
        </li>
        <li>Note: Only rendering components that have the data available</li>
      </ol>
    </Topic>
  );
};
