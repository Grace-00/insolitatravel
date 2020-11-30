import "./style/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { ContextAPI } from "./context/ContextAPI";
import { useEffect, useState } from "react";
import TravelAgency from "./components/TravelAgency";
import InfoSectionContainer from "./components/InfoSectionContainer";
import { HashRouter as Router, Route } from "react-router-dom";



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

  function Home() {
    return isLoading ? (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <ContextAPI.Provider value={results}>
        <div className="Home App">
          <Header />
          <TravelAgency />
          <InfoSectionContainer />
          <Footer />
        </div>
      </ContextAPI.Provider>
    );
  }

  return (
    <Router>
      <Route exact path="/home">
          <Home/>
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
    </Router>
  );

  // funzionante
  // return isLoading ? (
  //   <div className="spinner-border" role="status">
  //     <span className="sr-only">Loading...</span>
  //   </div>
  // ) : (
  //   <ContextAPI.Provider value={results}>
  //     <Router>

  //       <Route exact path="/home">
  //         <div className="App">
  //           <Header />
  //           <TravelAgency />
  //           <InfoSectionContainer />
  //           <Footer />
  //         </div>
  //       </Route>
  //       <Route exact path="/">
  //         <Login />
  //       </Route>
  //     </Router>
  //   </ContextAPI.Provider>
  // );
}

export default App;
