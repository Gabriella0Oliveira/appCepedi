import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface ButtonProps {
  onPress: () => void;
}

const ButtonContainer = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #FF2B78;
  border-bottom-left-radius: 30px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: bold;
  align-self: center;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export function AddButtonIcon({ onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress}>
        <ButtonText>
        <AntDesign name="plus" size={30} color="#FFFFFF"/>
        </ButtonText>
    </ButtonContainer>
  );
}
