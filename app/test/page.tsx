// 'use client'
// pages/users.tsx
import useAxios from "axios-hooks";
// define UserResponse for type-safty
type test = {
  test: string;
};

interface TestResponse {
  Test: test[];
  total: number;
  skip: number;
  limit: number;
}

export default function Test() {
  //use the useAxios hook and pass the AxiosRequestConfig
  const [{ data, loading, error }] = useAxios<TestResponse>({
    baseURL: "https://127.0.0.1:8000/api",
    url: "/tests",
  });

  return (
    <div>
      <h1>Users Page</h1>
      {loading && <p>Loading...</p>}
      {!!error && <p>{error.message}</p>}
      {!!data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </div>
  );
};
