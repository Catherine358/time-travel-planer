import {useState} from "react";
import './App.css'
import Form from "./components/Form.jsx";
import DestinationList from "./components/DestinationList.jsx";

function App() {
    const [destinations, setDestination] = useState([]);

    const handleSubmit = (newTrip) => {
        setDestination((prevState) => ([...prevState, newTrip]));
    };

  return (
    <main>
       <h1>Time Travel Planer</h1>
        <Form onSubmit={handleSubmit} />
        <DestinationList destinations={destinations} />
    </main>
  )
}

export default App
