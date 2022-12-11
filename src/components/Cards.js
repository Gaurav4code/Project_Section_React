import styled from "styled-components";
import img4 from "../components/images1/image4.png";
import img5 from "../components/images1/image5.png";
import img6 from "../components/images1/image6.png";
import img7 from "../components/images1/image7.png";
import { motion } from "framer-motion";

import { Card } from "../components/Card";

export const Cards = () => {
  const VariantsLeft = {
    hidden: {
      opacity: 0,
      x: "-50vh"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1
      }
    },
    hover: {
      scale: 1.1
    }
  };
  const VariantsRight = {
    hidden: {
      opacity: 0,
      x: "50vh"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1
      }
    },
    hover: {
      scale: 1.1
    }
  };

  return (
    <Container>
      <CardFlow
        variants={VariantsLeft}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Card title="Minify - Web Design" image={img4} />
      </CardFlow>
      <CardFlow
        variants={VariantsRight}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Card title="Ant - Personal Portofolio" image={img5} />
      </CardFlow>
      <CardFlow
        variants={VariantsLeft}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Card title="Lumy - Dashboard UI Kit" image={img6} />
      </CardFlow>
      <CardFlow
        variants={VariantsRight}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Card title="Keeper - Soccer Site" image={img7} />
      </CardFlow>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  margin-left: 165px;
  margin-right: 165px;

  width: 1110px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 100px;
`;
const CardFlow = styled(motion.div)``;
