import React from "react";
import { Button, Topic } from "../components";
/**
 * Using the Fetch API
 *
 * The MDN docs are always my go-to:
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 */

const fetchWithoutWaiting = () => {
  // the fetch function comes baked in as standard
  // choosing between axios and fetch is usually project setup or developer preference
  // fetch returns a promise of a Response object
  const dataAboutDitto = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  // this means we can't just access the result of fetch as it's likely not resolved yet
  // e.g. above the value of dataAboutDitto would not be available yet
  console.log("dataAboutDitto", dataAboutDitto);
};

const fetchThen = () => {
  // we can wait for the promise to resolve and access the response by chaining
  // a .then() method to the fetch
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => {
      // here we've waited for the response to be resolved,
      // however, this is the full response object
      console.log("dataAboutDitto response", response);
      // we need to get the data from the body, in this case it's JSON data
      // the .json() method on the response object again returns a promise so
      // we need to chain our last .then()
      return response.json();
    })
    .then((dataAboutDitto) => {
      // finally we have access to the data returned from the api
      console.log("dataAboutDitto is ", dataAboutDitto);
    });
};

const asyncFetch = async () => {
  // rather than chain methods to the fetch function, from
  // within an async function we can "await" the response to be returned
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  // this line won't run until the response is returned above
  console.log("response is ", response);

  const dataAboutDitto = await response.json();

  console.log("dataAboutDitto", dataAboutDitto);
};

export const FetchBasics = () => (
  <Topic title="1. Fetch basics">
    <ol>
      <li>
        Fetch without waiting
        <Button onClick={fetchWithoutWaiting}>Try me</Button>
      </li>
      <li>
        Fetch then...
        <Button onClick={fetchThen}>Try me</Button>
      </li>
      <li>
        Async fetching
        <Button onClick={asyncFetch}>Try me</Button>
      </li>
    </ol>
  </Topic>
);
