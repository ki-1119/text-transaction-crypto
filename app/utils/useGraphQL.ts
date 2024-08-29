import { useEffect, useState } from 'react';

const serverUrl = 'http://localhost:8080/v1/graphql';

const useGraphQL = (query: string) => {
  const [data, setData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const response = fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': 'zxNnubCXe5ndyz8wco7okbeVlRCr91sYQaL4E6rNdKQ=',
      },
      body: JSON.stringify({
        query,
      }),
    }).then((res) => {
      if (!res.ok) {
        setError(true);
      } else {
        setData(res.json().data);
      }
    });
  }, []);
  return [isLoading, data, error];
};

export default useGraphQL;
