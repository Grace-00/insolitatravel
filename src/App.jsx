import "./style/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { ContextAPI } from "./context/ContextAPI";
import { useEffect, useState } from "react";

function App() {
    const [results, setResults] = useState({});

    useEffect(() => {
        void (async () => {
            const res = await (
                await fetch(
                    "http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18"
                )
            ).json();
            setResults(res.results.data);
        })();
    }, []);

    return (
        <ContextAPI.Provider value={results}>
            <div className="App">
                {/* <Header /> */}
                <Login />
                {/* <Footer /> */}
            </div>
        </ContextAPI.Provider>
    );
}

export default App;
