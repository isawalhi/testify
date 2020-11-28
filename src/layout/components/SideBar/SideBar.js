import React from "react";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import PlusCircleOutlined from "@ant-design/icons/PlusCircleOutlined";
import HomeOutlined from "@ant-design/icons/PlusCircleOutlined";

import styles from "./SideBar.module.css";

const { Sider } = Layout;
const SideBar = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className={styles.logo} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Main
        </Menu.Item>
        <Menu.Item key="2" icon={<PlusCircleOutlined />}>
          New
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
