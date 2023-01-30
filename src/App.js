import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import Hooks from "./pages/Hooks/Hooks";
import NewUser from "./pages/NewUser/NewUser";
import Product from "./pages/products/Product";
import CompanyMaster from "./pages/companyMasters/CompanyMaster";
import { ApolloProvider } from "@apollo/client";
import AddCompanyMaster from "./pages/companyMasters/AddCompanyMaster";
import { ToastContainer } from "react-toastify";
import CompanyAddressDetails from "./pages/companyAddressDetails/CompanyAddressDetails";
import AddCompanyAddressDetails from "./pages/companyAddressDetails/AddCompanyAddressDetails";
import client from "./graphql/Client";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "react-toastify/dist/ReactToastify.css";
// import Quiz from "./pages/Quiz/Quiz";
// import Keycode from "./pages/Quiz/Keycode";
// import Tabs from "./pages/codechallenge/Tabs";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            {/* <Route exact path="/">
            <Tabs />
          </Route> */}
            {/* <Route exact path="/">
              <Keycode />
            </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/companymasters">
              <CompanyMaster />
            </Route>
            <Route path="/addcompanymasters">
              <AddCompanyMaster />
            </Route>
            <Route path="/companyaddressdetails">
              <CompanyAddressDetails />
            </Route>
            <Route path="/addcompanyaddressdetails">
              <AddCompanyAddressDetails />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/hooks">
              <Hooks />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/Products">
              <Product />
            </Route>
          </Switch>
        </div>
        <ToastContainer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
