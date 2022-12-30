import React from "react";

import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            email={robot.email}
            name={robot.name}
          />
        );
      })}
    </div>
  );
};

export default CardList;
