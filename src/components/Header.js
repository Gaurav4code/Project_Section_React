import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <Head>
        <HeadText>Our Projects</HeadText>
      </Head>
      <Options>
        <Link>
          <a className="active" href="/">
            Web Design
          </a>
        </Link>
        <Link>
          <a href="/"> Mobile App Design</a>
        </Link>
        <Link>
          <a href="/"> Freebies</a>
        </Link>
      </Options>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
`;
const Head = styled.div``;
const HeadText = styled.h1`
  margin-left: 165px;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 62px;
  letter-spacing: 0em;
  text-align: left;
`;

const Options = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 165px;
  width: 994px;
  justify-content: flex-start;
`;

const Link = styled.div`
  margin-right: 80px;

  display: inline-block;
  a {
    text-decoration: none;
    width: 340px;

    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: left;
    color: black;
  }
  .active {
    color: #eebf63;

    border-bottom: solid 5px #eebf63;
  }
`;
