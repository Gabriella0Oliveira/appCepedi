import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

const LogoContainer = styled.View`
  margin-top: 70px;
  align-items: left;
`;

const LogoTextContainer = styled.View`
margin-left: 10px;
align-items: left;
`;

const LogoText = styled.Text`
  font-size: 26px;
  color: #FF25A8;
  font-weight: 500;
`;

const Line = styled.View`
  width: 100%;
  height: 2px;
  background-color: #FF25A8;
`;

const Logo = ({ }) => {
  return (
    <LogoContainer>
      <LogoTextContainer>
        <LogoText>
          <AntDesign name= "pushpino" size={26} color="#FF25A8" /> PinkYourTask
        </LogoText>
      </LogoTextContainer>
      <Line />
    </LogoContainer>
  );
};

export default Logo;
