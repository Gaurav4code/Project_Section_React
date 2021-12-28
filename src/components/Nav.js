import styled from "styled-components";
import React from "react";

const Nav = () => {
  return (
    <Container>
      <Logo>Arlene Rey</Logo>
      <Links>
        <Link>
          <a href="/">Home</a>
        </Link>
        <Link>
          <a href="/">About</a>
        </Link>
        <Link>
          <a href="/">Projects</a>
        </Link>
        <Link>
          <a href="/">Contacts</a>
        </Link>
      </Links>
    </Container>
  );
};

export default Nav;
const Container = styled.div`
  margin-left: 166px;
  margin-top: 33px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0px;
  text-align: left;
`;
const Links = styled.div`
  width: 341px;
  height: 24px;
  margin-right: 165px;

  display: flex;
  justify-content: space-evenly;
`;
const Link = styled.div`
  a {
    text-decoration: none;
    color: black;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
  }
`;
