import { NextPage } from "next";
import styled from "styled-components";

const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
`;

const Page: NextPage = () => {
  return (
    <div>
      <Text>Themeから参照したもの</Text>
    </div>
  );
};

export default Page;
