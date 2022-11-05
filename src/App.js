import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [stat, setStat] = useState([]);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((r) => r.json())
      .then((r) => setStat(r.data));
  }, []);
  console.log(stat);

  const handle = () => {
    setCount(count + 1);
    setData((pre) => [...pre, stat[count]]);
  };

  return (
    <div className="App">
      <button onClick={handle}>click</button>
      {data.map((ii) => (
        <li>{ii.email}</li>
      ))}
    </div>
  );
}
