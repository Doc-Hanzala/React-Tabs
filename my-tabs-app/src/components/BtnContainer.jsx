import React from "react";

const BtnContainer = ({ jobs, currentIndex, setCurrentIndex }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            onClick={() => setCurrentIndex(index)}
            className={
              currentIndex === index ? "job-btn active-btn" : "job-btn"
            }
            key={job.order}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
