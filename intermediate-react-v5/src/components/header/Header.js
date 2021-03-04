/** @jsx jsx */
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { jsx, css, keyframes } from "@emotion/react";

const grow = keyframes`
    from {
        transform: scale(0.5);
    }
    to {
        transform: scale(1.7);
    }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Header = () => (
  <StyledHeader>
    <Link to="/">Adopt me</Link>
    <span
      css={css`
        font-size: 60px;
        animation: ${grow} 1s infinite alternate ease-in-out;
      `}
      role="img"
      aria-label="Small dog face"
    >
      🐶
    </span>
  </StyledHeader>
);

export default Header;
