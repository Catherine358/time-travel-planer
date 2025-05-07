const DestinationCard = ({ year, city, description }) => {
    return (
        <article className="">
            <h2 className="text-[50px]">
                {city}, {year}
            </h2>
            <p>{description}</p>
        </article>
    );
};

export default DestinationCard;