const DestinationCard = ({ year, city, description }) => {
    return (
        <article className=" bg-white max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 my-10">
            <h3 className="text-gray-700 font-bold text-l mb-2">
                {city}, {year}
            </h3>
            <p className="text-gray-700 text-base">{description}</p>
        </article>
    );
};

export default DestinationCard;