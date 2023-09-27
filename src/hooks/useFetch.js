import React from "react";

export default function useFetch(url) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data, setData];
}
