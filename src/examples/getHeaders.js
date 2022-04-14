const getHeaders = (method = "GET", data) => {
  const baseHeaders = {
    method,
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };

  return data
    ? {
        ...baseHeaders,
        body: JSON.stringify(data),
      }
    : baseHeaders;
};

export default getHeaders;
