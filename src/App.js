import React,{createContext,useEffect,useReducer} from "react";
import {Route,Switch} from "react-router-dom";
import {reducer} from "./reducer/Usereducer";
import Adopt from "./Adopt";
import About from "./About";
import Header from "./Header";
import Left from "./Left";
import Sell from "./Sell";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Profile from "./Profile";

export const UserContext=createContext();
function App() {
  const [state,dispatch]=useReducer(reducer);

  useEffect(()=>{
    dispatch({type:"User",payload:localStorage.getItem("user")});
  },[])

  useEffect(()=>{
    localStorage.setItem("user",state);
  },[state])
  
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
     <Header />
     <Switch>
     <Route exact path="/" component={Left}/>
     <Route path="/sell" component={Sell}/>
     <Route path="/adopt" component={Adopt} />
     <Route path="/login" component={Login}/>
     <Route path="/about" component={About}/>
     <Route path="/register" component={Register}/>
     <Route path="/logout" component={Logout}/>
     <Route path="/profile" component={Profile}/>
     </Switch>
    </UserContext.Provider>
    </>
  );
}

export default App;