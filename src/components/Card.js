import styled from "styled-components";
import img4 from "../components/images1/image4.png";
import layers from "../components/images1/layers.png";
import eye from "../components/images1/show.png";
export const Card = (props) => {
  return (
    <Container>
      <Picture src={props.image} />
      <Details>
        <Text>{props.title}</Text>
        <Options>
          <Link>
            <img src={layers} />
            View Study Case
          </Link>
          <Link>
            <img src={eye} />
            Live Preview
          </Link>
        </Options>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  width: 346px;
`;
const Picture = styled.img``;
const Details = styled.div``;

const Text = styled.h3`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
`;
const Options = styled.div`
  width: 346px;
  display: flex;
  justify-content: space-between;
`;
const Link = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  img {
    margin-right: 13px;

    margin-top: 5px;
  }
`;
