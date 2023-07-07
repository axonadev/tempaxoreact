import { Header, SideMenu } from "axonaui";
const Layout = ({ piva }) => {
  return (
    <>
      <Header
        logo={process.env.REACT_APP_IMGFOLDER + "/" + piva + "/logo.png"}
        titolo={"titolo"}
      />
      <SideMenu />
    </>
  );
};
export default Layout;
