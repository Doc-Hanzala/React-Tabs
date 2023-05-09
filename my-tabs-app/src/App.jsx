import { useEffect, useState } from "react";
import BtnContainer from "./components/BtnContainer";
import Job from "./components/Job";

const url = "https://course-api.com/react-tabs-project";



function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex,setCurrentIndex] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <main>
        <div className="loading"></div>
      </main>
    );
  }

  return (
    <main>
      <BtnContainer jobs={jobs} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <Job jobs={jobs} currentIndex={currentIndex}  />
    </main>
  );
}

export default App;
