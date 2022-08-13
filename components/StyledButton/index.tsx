import styled, { css } from "styled-components";

const variants = {
  primary: {
    color: "red",
    backgroundColor: "#1D3461",
    border: "none",
  },
  success: {
    color: "red",
    backgroundColor: "green",
    border: "none",
  },
  transparent: {
    color: "#111111",
    backgroundColor: "transparent",
    border: "1px solid black",
  },
} as const;

type StyledButtonProps = {
  //keyof typeof→ typeofが変数を型に変換、keyでconst化
  variant: keyof typeof variants;
};
//{variant} → props.variantで参照可能なため{}で展開したものを入れている
export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => {
    const style = variants[variant];
    return css`
      color: ${style.color};
      backgroundcolor: ${style.backgroundColor};
      border: ${style.border};
    `;
  }}

  border-radius:12px;
  font-size: 14px;
  height: 38px;
  line-height: 22px;
  letter-spacing: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
