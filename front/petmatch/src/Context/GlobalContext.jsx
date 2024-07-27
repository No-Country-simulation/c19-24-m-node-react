import { createContext, useEffect, useState } from "react";
// import { getPokemonData, getPokemons } from "../Helpers/PokeApi";
import { getPets } from "../Helpers/API";

const PetsContext = createContext();

const PetsProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [allPets, setAllPets] = useState([]);

    const getAllPets = async () => {
        setLoading(true);

        try {
            const data = await getPets();

            setAllPets(data);

            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        getAllPets();
    }, []);

    const data = {
        loading,
        setLoading,
        error,
        setError,
        allPets,
    };

    return <PetsContext.Provider value={data}>{children}</PetsContext.Provider>;
};

export { PetsProvider };
export default PetsContext;