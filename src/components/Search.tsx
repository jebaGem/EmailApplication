import React from "react";
import ReactDOM from "react-dom";

export function Search() {
 const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event:any) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
     
    </div>
  );
}