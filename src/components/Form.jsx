import {useState} from "react";

const initialState = {
    city: '',
    description: '',
    year: ''
};

const Form = ({ onSubmit }) => {
    const [newTrip, setNewTrip] = useState(initialState);

    const handleChange = (key, newValue) => {
        setNewTrip((prevState) => (({ ...prevState, [key]: newValue})));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(newTrip);
        setNewTrip(initialState);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label
                        htmlFor="city"
                        className="block text-gray-700 text-sm font-bold md:text-right mb-1 md:mb-0 pr-4"
                    >
                        City:
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        id="city"
                        onChange={(e) => handleChange('city', e.target.value)}
                        required
                        value={newTrip.city}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label
                        htmlFor="year"
                        className="block text-gray-700 text-sm font-bold md:text-right mb-1 md:mb-0 pr-4"
                    >
                        Year:
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        id="year"
                        type="number"
                        onChange={(e) => handleChange('year', e.target.value)}
                        required
                        value={newTrip.year}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label
                        htmlFor="description"
                        className="block text-gray-700 text-sm font-bold md:text-right mb-1 md:mb-0 pr-4"
                    >
                        Description:
                    </label>
                </div>
                <div className="md:w-2/3">
                   <textarea
                       id="description"
                       onChange={(e) => handleChange('description', e.target.value)}
                       required
                       value={newTrip.description}
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   />
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button
                        type="submit"
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    >
                        Plan trip
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;