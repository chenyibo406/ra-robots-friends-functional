import React, { useState, useEffect } from "react";

import CardList from "./components/CardList";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";

import "./App.css";

const App = ({ store }) => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");
  // const [count, setCount] = useState(0);

  console.log(store.getState());

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
  }, [robots, searchfield]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robots) => {
    return robots.name
      .toLocaleLowerCase()
      .includes(searchfield.toLocaleLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RobotFriends</h1>
      {/* <button onClick={() => setCount(count + 1)}>Click Me!</button> */}
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
