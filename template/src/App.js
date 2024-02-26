import "./App.css";
import { useToken, useEnv } from "axonalib";
import Layout from "./Layout/Layout";
import { LoadingSpinner, CssStruct } from "axonaui";

const App = () => {
  const { REACT_APP_CSSFOLDER, REACT_APP_SERVERAPI } = useEnv();

  const { connesso } = useToken(
    REACT_APP_SERVERAPI + "api/axo_login",
    localStorage.getItem("axn_token")
  );

  return (
    <CssStruct
      url={REACT_APP_CSSFOLDER}
      piva={localStorage.getItem("axn_piva")}
      template={"template1"}
    >
      <div className="App">
        {connesso === 0 && <LoadingSpinner />}
        {connesso === 1 && <Layout piva={localStorage.getItem("axn_piva")} />}
      </div>
    </CssStruct>
  );
};

export default App;
