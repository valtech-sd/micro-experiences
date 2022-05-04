import styled from 'styled-components';
import { Button } from 'antd';

import Logo from '../../assets/FS_Logo_White.png';
import { COLORS, SIZES, FONT_SIZES } from '../../utils/global';

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: ${SIZES.xxl} ${SIZES.xl};
`;

const StyledButton = styled(Button)`
  width: 200px;
  height: 50px;
  color: black;
  display: flex !important;
  place-content: center;
  place-items: center;
  margin-top: ${SIZES.lg};
  border: 1px solid ${COLORS.green} !important;
  background: ${COLORS.green} !important;

  &:hover {
    color: black;
  }
`;

const Text = styled.p`
  color: white;
  margin-top: ${SIZES.lg};
  font-size: ${FONT_SIZES.xs};
`;

const Footer = () => {
  return (
    <Container>
      <img src={Logo} alt="Valtech Future Studio" width="150" />
      <StyledButton href="https://futurestudio.valtech.com" type="primary">
        Contact Us
      </StyledButton>
      <Text>© 2022 VALTECH FUTURE STUDIO. ALL RIGHTS RESERVED.</Text>
    </Container>
  );
};

export default Footer;
