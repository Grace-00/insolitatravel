import "./style/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContextAPI } from "./context/ContextAPI";
import { useEffect, useState } from "react";
import TravelAgency from "./components/TravelAgency";

function App() {
    const [results, setResults] = useState("");

    useEffect(() => {
        void (async () => {
            try { const res = await (await fetch("http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18")).json();
            setResults(res.results.data);
        } catch (error) {
            alert(`si è verificato un errore: ${error}`)
        }
        })();
    }, []);

    return (
        <ContextAPI.Provider value={results}>
            <div className="App">
                <Header />
                <TravelAgency />
                <Footer />
            </div>
        </ContextAPI.Provider>
    );
}

export default App;
