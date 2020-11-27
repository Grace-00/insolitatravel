import "./style/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContextAPI } from "./context/ContextAPI";
import { useEffect, useState } from "react";

function App() {
    const URL = "http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18";
    const [results, setResults] = useState(false);

    useEffect(() => {
        void (async () => {
            try {
                const res = await (await fetch(URL)).json();
                setResults(res.results.data);
            } catch (error) {
                alert(`si e' verificato un errore: ${error}`);
            }
        })();
    }, []);

    return (
        <ContextAPI.Provider value={results}>
            <div className="App">
                <Header />
                <Footer />
            </div>
        </ContextAPI.Provider>
    );
}

export default App;
