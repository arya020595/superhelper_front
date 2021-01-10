import './App.css';
import NavBar from './NavBar';
import FootBar from './FootBar';
import Login from './Login';
import Register from './Register';
import AccountDetail from './AccountDetail';
import AccountEdit from './AccountEdit';
import AccountList from './AccountList';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/account" exact component={AccountList} />
            <Route path="/account/detail/:id" component={AccountDetail} />
            <Route path="/Account/edit/:id" component={AccountEdit} />
            <Route path="/" component={Login} exact />
          </Switch>
        </Router>
      <FootBar />
    </div>
  );
}

export default App;
