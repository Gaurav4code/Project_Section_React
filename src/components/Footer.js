import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <Text>Let's Connect</Text>
      <Icons>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        <i class="fas fa-basketball-ball"></i>
      </Icons>
      <BackTop>
        Back to Top
        <i class="fas fa-arrow-up"></i>
      </BackTop>
    </Container>
  );
};

const Container = styled.div`
  width: 1110px;
  display: flex;
  justify-content: space-between;
  border-radius: 25px;

  margin-top: 100px;

  margin-left: 165px;
  margin-right: 165px;
`;
const Text = styled.h1`
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 46px;
  letter-spacing: 0em;
  text-align: left;
`;
const Icons = styled.div`
  margin-top: 30px;
  .fab {
    border-radius: 0px;
    font-size: 31px;
    margin-right: 25px;
  }
  .fas {
    border-radius: 0px;
    font-size: 31px;
  }
`;
const BackTop = styled.h2`
  //styleName: Heading 4;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  .fas {
    margin-left: 13px;
  }
`;
