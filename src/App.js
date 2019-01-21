import React, { Component, PureComponent } from "react";
import { Route, Switch, BrowserRouter, HashRouter } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Row, Col, Breadcrumb } from "antd";

import About from "./view/About";
import Course1 from "./view/Course1";
import Course2 from "./view/Course2";
import Contact from "./view/Contact";
import Enroll from "./view/Enroll";
import Home from "./view/Home";
import AcademyHeader from "./components/AcademyHeader/AcademyHeader";
import SimpleMap from "./components/SimpleMap";

const { Header, Footer, Content, Sider } = Layout;

class App extends Component {
  render() {
    const header = <Route path="/" component={AcademyHeader} />;
    const content = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/course1" component={Course1} />
        <Route exact path="/course2" component={Course2} />
        <Route exact path="/enroll" component={Enroll} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    );
    const footer = (
      <div>
        <p>© AliceAcademy</p>
      </div>
    );

    return (
      <HashRouter>
        <Layout className="App">
          <Header className="AppHeader">{header}</Header>
          <Content className="AppContent">{content}</Content>
          <Footer className="AppFooter">{footer}</Footer>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
