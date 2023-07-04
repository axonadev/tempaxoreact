import "./App.css";
import { useToken } from "axonalib";
import Layout from "./Layout/Layout";
import { LoadingSpinner } from "axonaui";

const App = () => {
  const { connesso } = useToken(
    process.env.REACT_APP_SERVERAPI + "api/axo_login",
    localStorage.getItem("axn_token")
  );

  return (
    <div className="App">
      {connesso === 0 && <LoadingSpinner />}
      {connesso === 1 && <Layout />}
    </div>
  );
};

export default App;
