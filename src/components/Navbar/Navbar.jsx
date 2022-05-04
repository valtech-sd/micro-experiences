import styled from 'styled-components';

import Logo from '../../assets/vfs_black.png';
import { SIZES } from '../../utils/global';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${SIZES.xl} 0;
`;

const Navbar = () => {
  return (
    <Container>
      <img src={Logo} alt="Valtech Future Studio" width="200" />
    </Container>
  );
};

export default Navbar;
