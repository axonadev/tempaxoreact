import { Header, SideMenu, ContentForm } from "axonaui";
import Project from "../Pages/Project";
const Layout = ({ piva }) => {
  return (
    <>
      <Header
        logo={process.env.REACT_APP_IMGFOLDER + "/" + piva + "/logo.png"}
        titolo={"titolo"}
      />
      <SideMenu />
      <ContentForm>
        <Project />
      </ContentForm>
    </>
  );
};
export default Layout;
