import './App.css'
import DestinationCard from "./components/DestinationCard.jsx";

function App() {

  return (
    <main>
       <h1>Time Travel Planer</h1>
      <DestinationCard
          city="Paris"
          year={1914}
          description="Dance and drink coffee with Hemingway."
      />
    </main>
  )
}

export default App
