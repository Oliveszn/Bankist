import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  // const [workouts, setWorkouts] = useState(null)

  // useEffect(() => {
  //   const fetchWorkouts = async () => {
  //     const response = await fetch('/api/workouts')
  //     const json = await response.json()

  //     if (response.ok) {
  //       setWorkouts(json)
  //     }
  //   }

  //   fetchWorkouts()
  // }, [])

  return (
    <div className="">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
