import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import { alphabet } from "../../resource/logos/index";
import "./index.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class AcademyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "about"
    };
  }
  handleClick = e => {
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div className="AcademyHeader">
        <Link to={`/`}>
          <img src={alphabet} />{" "}
        </Link>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          className="Menu"
        >
          <Menu.Item key="about">
            {" "}
            <Link to={`/about`}>About</Link>
          </Menu.Item>

          <SubMenu
            title={<span className="submenu-title-wrapper">Courses</span>}
          >
            <Menu.Item key="option1">
              <Link to={`/course1`}>Option 1 </Link>
            </Menu.Item>

            <Menu.Item key="option2">
              <Link to={`/course2`}>Option 2 </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="enroll">
            <Link to={`/enroll`}>Enroll</Link>
          </Menu.Item>

          <Menu.Item key="contact">
            <Link to={`/contact`}>Contact</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default AcademyHeader;
