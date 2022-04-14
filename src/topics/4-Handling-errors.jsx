import React from "react";
import { Button, Topic } from "../components";

/**
 * A simple function to fetch some data
 */
const asyncFetch = async (route) => {
  console.log("fetching route: ", route);

  // wrap our fetch call in a try catch block
  // check for the correct status code e.g. 200
  // what can we do in error situations?

  const response = await fetch(route);
  const responseData = await response.json();

  return responseData;
};

export const HandlingErrors = () => (
  <Topic title="4. Handling fetch errors">
    <ol>
      <li>
        Known errors from the api
        <Button
          onClick={() =>
            asyncFetch("https://api.chucknorris.io/jokes/randommm")
          }
        >
          Try me
        </Button>
      </li>
      <li>
        Try/catch errors{" "}
        <Button
          onClick={() =>
            asyncFetch("https://pokeapi.co/api/v2/pokemon/dittoooooo")
          }
        >
          Try me
        </Button>
      </li>
      <li>
        Note: we can display a message to the users too e.g.
        https://mui.com/material-ui/react-alert/
      </li>
    </ol>
  </Topic>
);
