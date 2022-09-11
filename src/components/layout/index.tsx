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
      {/* <Container> */}
        <main>{ children }</main>
      {/* </Container> */}
    </>
  )
}

export default Layout;