import "./style/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { ContextAPI } from "./context/ContextAPI";
import { useEffect, useState } from "react";
import TravelAgency from "./components/TravelAgency";

function App() {
    const URL = "http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18";
    const [results, setResults] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        void (async () => {
            try {
                const res = await (await fetch(URL)).json();

                if (res.results) {
                    setResults(res.results.data);
                    setIsLoading(false);
                }
            } catch (error) {
                alert(`si e' verificato un errore: ${error}`);
            }
        })();
    }, []);

    return isLoading ? (
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    ) : (
        <ContextAPI.Provider value={results}>
            <div className="App">
                {/* <Login /> */}
                <Header />
                <TravelAgency />
                <Footer />
            </div>
        </ContextAPI.Provider>
    );
}

export default App;
