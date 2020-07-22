import Head from "next/head";
import styled from "styled-components";

import Header from "../components/account/header";
import Menu from "../components/account/menu";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Account = () => (
  <div className="container">
    <Head>
      <title>BoardRack | Account</title>
    </Head>
    <Container>
      <Header />
      <Menu />
    </Container>
  </div>
);

export default Account;
