import React from "react";
import styles from "./layout.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return <main className={styles.main}>{props.children}</main>;
};

export default Layout;
