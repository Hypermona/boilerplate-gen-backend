import React, { useEffect, useState } from "react";
import { Counter } from "../components/Counter";

function Home() {
  const [data, setData] = useState({ message: "This data is from the frontend." });
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2>Welcome to AnyBoilerplate home page</h2>
      <br />
      <h2>{data.message}</h2>
      <Counter />
      <br />
    </div>
  );
}

export default Home;
