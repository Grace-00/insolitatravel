import React from 'react';
import "./style/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { ContextAPI } from "./context/ContextAPI";
import {  useEffect, useState } from "react";
import TravelAgency from "./components/TravelAgency";
import InfoSectionContainer from "./components/InfoSectionContainer";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Mappa from "./components/Mappa";
import CardContainer from "./components/CardContainer";
import AuthApi from './components/AuthApi.js';
import Cookies from 'js-cookie';

function App() {
    const [auth,setAuth] =React.useState (false)
    const readCookie=()=>{
        const user= Cookies.get("user");
        if(user){
            setAuth(true);
        }
    }
    React.useEffect(()=>{
        readCookie();
    },[])
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
                    <Mappa />
                    <TravelAgency />
                    <CardContainer/>
                    <InfoSectionContainer />
                    <Footer />
                </div>
            </ContextAPI.Provider>
        );
    }

    const Routes=()=>{
        const Auth= React.useContext(AuthApi)
        return(
        <Switch>
            <ProtectedLogin path="/login" component={Login} auth={Auth.auth}/>
            <ProtectedRoute path="/home" auth={Auth.auth} component={Home}/>
        </Switch>)
    }

const ProtectedRoute=({auth, component:Component, ...rest }) =>{
    return(
        <Route 
        {...rest}
        render={()=>auth ? (
        <Component/>
        ):(
            <Redirect to="/login"/>
        )}
        />
    )
}
const ProtectedLogin=({auth, component:Component, ...rest }) =>{
    return(
        <Route 
        {...rest}
        render={()=>!auth ? (
        <Component/>
        ):(
            <Redirect to="/home"/>
        )}
        />
    )
}
    return (
        <AuthApi.Provider value={{auth, setAuth}}>
        <Router>
        <Redirect exact from="/" to="/login" />

        <Routes/>
        </Router>
        </AuthApi.Provider>
    );
}

export default App;
