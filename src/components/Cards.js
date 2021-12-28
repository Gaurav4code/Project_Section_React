import styled from "styled-components";
import img4 from "../components/images/image4.png";
import img5 from "../components/images/image5.png";
import img6 from "../components/images/image6.png";
import img7 from "../components/images/image7.png";

import { Card } from "../components/Card";
export const Cards = () => {
  return (
    <Container>
      <Card title="Minify - Web Design" image={img4} />
      <Card title="Ant - Personal Portofolio" image={img5} />
      <Card title="Lumy - Dashboard UI Kit" image={img6} />
      <Card title="Keeper - Soccer Site" image={img7} />
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
