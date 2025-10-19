import { useEffect , createContext , useContext , useState} from "react";
import axios from "axios";

const MarketContext = createContext();

export const MarketProvider = ({ children }) => {
    const [markets, setMarkets] = useState([]);

    useEffect(() => {
        const fetchMarkets = async () => {
            try {
                const res = await axios.get("http://localhost:3000/market/get-markets");
                setMarkets(res.data.markets);
            } catch (error) {
                console.error("Error fetching markets:", error);
            }
        }
        fetchMarkets();
    }, []);
    return (
        <MarketContext.Provider value={{ markets }}>
            {children}
        </MarketContext.Provider>
    )
};

export const useMarkets = () => useContext(MarketContext);