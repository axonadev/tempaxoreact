import { Header } from "axonaui";
const Layout = ({ piva }) => {
  return (
    <>
      <Header
        logo={process.env.REACT_APP_IMGFOLDER + "/" + piva + "/logo.png"}
        titolo={"titolo"}
      />
    </>
  );
};
export default Layout;
