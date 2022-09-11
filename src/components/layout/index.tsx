import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header/index";

type Props = {
  children?: React.ReactNode,
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{ children }</main>
    </>
  )
}

export default Layout;