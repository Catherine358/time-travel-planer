import {useState, useEffect} from "react";
import './App.css'
import Form from "./components/Form.jsx";
import DestinationList from "./components/DestinationList.jsx";

function App() {
    const [destinations, setDestination] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAllCountries = async () => {
        try {
            setLoading(true);
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
            console.log('data ', data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        fetchAllCountries();
    }, []);

    const handleSubmit = (newTrip) => {
        setDestination((prevState) => ([...prevState, newTrip]));
    };

    if (loading) {
        return (
            <p>Page is loading...</p>
        );
    }

  return (
    <main>
       <h1>Time Travel Planer</h1>
        <Form onSubmit={handleSubmit} />
        <DestinationList destinations={destinations} />
    </main>
  )
}

export default App
