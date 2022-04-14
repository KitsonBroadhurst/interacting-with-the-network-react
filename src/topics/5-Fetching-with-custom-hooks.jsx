import React, { useState, useEffect } from "react";
import { ErrorAlert, Topic } from "../components";

// write a custom hook to return loading, data and errors
const useFetch = (route) => {
  // store our output in state
  // add useEffect to fetch on route change
  // bonus, don't call setState when the component is unmounted
  // return { data, loading, error };
};

const ChuckNorrisJoke = ({ joke, error }) => {
  return <div>{error ? <ErrorAlert message={error} /> : <p>{joke}</p>}</div>;
};

export const FetchingWithCustomHooks = () => {
  const { loading, data, error } = useFetch(
    "https://api.chucknorris.io/jokes/random"
  );

  const joke = data?.value;

  return (
    <Topic title="5. Fetching data with custom hooks">
      <ol>
        <li>Wrap our fetch function into a custom hook</li>
        {loading ? (
          <div>We're loading!</div>
        ) : (
          <ChuckNorrisJoke joke={joke} error={error} />
        )}
      </ol>
    </Topic>
  );
};
