import React from "react";
import { BiRightArrow } from "react-icons/bi";

const Duties = ({ duties }) => {
  return (
    <div className="duties">
      {duties.map((duty, index) => {
        return (
          <div key={index} className="duty">
            <BiRightArrow />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
