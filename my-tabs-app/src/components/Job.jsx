import React from "react";
import Duties from "./Duties";

const Job = ({ jobs,currentIndex }) => {
  const {  title, dates, company, duties } = jobs[currentIndex];
  return (
    <article className="job">
      <h2 className="job-title">{title}</h2>
      <p className="company">{company}</p>
      <p className="date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default Job;
