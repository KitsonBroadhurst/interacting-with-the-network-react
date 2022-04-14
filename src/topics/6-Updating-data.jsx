import React from "react";
import { Button, Topic } from "../components";

// we can do more with the fetch api than just get data:
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

/**
 * A simple function to post some data
 */
const asyncPost = async (route, data) => {
  console.log("post data to route: ", route);
  try {
    // update the fetch below to POST our data to the API
    const response = await fetch(route);
    const responseData = await response.json();

    console.log("responseData is ", responseData);

    if (response.status !== 201) {
      console.log("There was a pages fetch error: ", responseData.errors);
      return;
    }

    return responseData;
  } catch (error) {
    console.log("There was an error fetching pages for URL: ", route);
    console.log("Error is: ", error);
  }
};

export const UpdatingData = () => (
  <Topic title="6. Updating data">
    <ol>
      <li>
        Save onClick
        <Button
          onClick={() =>
            asyncPost("https://jsonplaceholder.typicode.com/posts", {
              title: "foo",
              body: "bar",
              userId: 1,
            })
          }
        >
          Try me
        </Button>
      </li>
    </ol>
  </Topic>
);
