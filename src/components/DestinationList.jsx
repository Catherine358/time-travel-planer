import DestinationCard from "./DestinationCard.jsx";

const DestinationList = ({ destinations }) => {
    return (
        <>
            <h2 className="text-white text-xl font-bold">My Time Travel Destinations:</h2>
            <ul>
                {destinations.map((destination, index) => {
                    const { city, year, description } = destination;
                    return (
                        <li key={city + index}>
                            <DestinationCard city={city} year={year} description={description} />
                        </li>
                    )})}
            </ul>
        </>
    );
};

export default DestinationList;