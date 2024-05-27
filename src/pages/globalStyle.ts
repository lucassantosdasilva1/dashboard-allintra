import styled from "styled-components";
import theme from "@/shared/theme";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  h1 {
    font-size: ${theme.fonts.sizes.extraExtraLarge}px;
    font-family: ${theme.fonts.family.secondary}, sans-serif;
    font-weight: 800;
  }

  h2 {
    font-size: ${theme.fonts.sizes.extraLarge}px;
    font-family: ${theme.fonts.family.secondary}, sans-serif;
    font-weight: 600;
  }

  h3 {
    font-size: ${theme.fonts.sizes.large}px;
    font-family: ${theme.fonts.family.secondary}, sans-serif;
    font-weight: 600;
  }
`;
