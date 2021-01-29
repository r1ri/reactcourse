import React from "react";

const ListFilter = (props) => {
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          style={{cursor:'pointer'}}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListFilter.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListFilter;
