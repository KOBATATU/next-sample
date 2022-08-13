import { NextPage } from "next";
import styled, { css } from "styled-components";

type ButtonProps = {
  color: string;
  backgroundColor: string;
};
const fontSize = css`
  font-size: 1em;
`;

const Text = styled.p`
  ${fontSize};
  font-weight: bold;
`;

const TextBorder = styled(Text)`
  padding: 1px;
`;

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};

  ${fontSize}
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`;

const Page: NextPage = () => {
  return (
    <div>
      <Button backgroundColor="transparent" color="#FF0000">
        Hello
      </Button>

      <Button backgroundColor="1E90FF" color="white">
        Hello
      </Button>
    </div>
  );
};

export default Page;
