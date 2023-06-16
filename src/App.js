import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages & components

import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

function App() {

  const { authIsReady ,user} = useAuthContext();

  return (
    <div>
      {authIsReady && (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home/>}
            </Route>

            <Route exact path="/login">
              {user && <Redirect to="/"/>}
              {!user && <Login />}
            </Route>

            <Route exact path="/signup">
              {user && <Redirect to="/"/>}
              {!user && <Signup />}
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App
