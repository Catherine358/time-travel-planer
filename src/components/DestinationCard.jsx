const DestinationCard = ({ year, city, description }) => {
    return (
        <article className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 my-10">
            <h2 className="font-bold text-xl mb-2">
                {city}, {year}
            </h2>
            <p className="text-grey-700 text-base">{description}</p>
        </article>
    );
};

export default DestinationCard;