import Header from "./Header";
import { NextStatelessComponent } from "next";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout: NextStatelessComponent<{}> = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
);

export default Layout;
