import React from "react";
import "./ListName.css";

const Item = (props) => {
  return (
    <div>
      {props.id} - {props.name}
    </div>
  );
};

let listname = [
  { id: 1, name: "Makson" },
  { id: 2, name: "Tanya" },
  { id: 3, name: "Oleg" },
  { id: 4, name: "Marina" },
  { id: 5, name: "Alex" },
  { id: 6, name: "Sasha" },
  { id: 7, name: "Daria" },
];

let listItem = listname.map((item) => <Item name={item.name} id={item.id} />);

const ListName = () => {
  return <div className="listname">{listItem}</div>;
};

export default ListName;
