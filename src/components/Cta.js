import styled from "styled-components";
import { motion } from "framer-motion";
export const Cta = () => {
  const Variants = {
    hover: {
      scale: 1.2,
      color: "#eebf63"
    }
  };
  return (
    <Container>
      <Text>
        Interested working
        <br />
        with me?
      </Text>
      <Button variants={Variants} whileHover="hover">
        <i class="fas fa-envelope-square" />
        Email Me
      </Button>
    </Container>
  );
};

const Container = styled.div`
  height: 224px;
  width: 1110px;
  display: flex;
  justify-content: space-evenly;
  border-radius: 25px;

  margin-top: 100px;

  margin-left: 165px;
  margin-right: 165px;
  background: #eebf63;
`;

const Text = styled.h1`
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 62px;
  letter-spacing: 0em;
  text-align: left;
  height: 124px;
  width: 457px;

  padding-top: 45px;

  color: white;
`;
const Button = styled(motion.button)`
  height: 70px;
  width: 259px;
  left: 941px;
  margin-top: 77px;
  border: none;
  border-radius: 10px;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  padding: 0 50px;
  i {
    font-size: 21px;
    margin-right: 16px;
  }
`;
