import getHeaders from "./getHeaders";
import { NotificationType } from "mockImport";

const savePages = async (route, data, addNotification) => {
  const urlRoot =
    process.env.NODE_ENV !== "production"
      ? `http://${location.hostname}:8080`
      : process.env.SERVER_HOST || `${location.origin}`;

  const url = `${urlRoot}/api/${route}`;

  try {
    const headers = getHeaders("POST", data);
    const response = await fetch(url, headers);

    const responseData = await response.json();

    if (response.status !== 201) {
      console.log("There was an error saving pages: ", responseData.errors);
      addNotification(
        "There was an error saving, please refresh the page and try again.",
        NotificationType.Error
      );
    }

    return responseData;
  } catch (e) {
    console.log("There was an error saving pages for URL: ", route);
    console.log("Error is: ", e);
    addNotification(
      "There was an error saving, please refresh the page and try again.",
      NotificationType.Error
    );
  }
};

export default savePages;
