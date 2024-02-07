import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface ButtonProps {
  onPress: () => void;
}

const ButtonContainer = styled(TouchableOpacity)`
  width: 150px;
  height: 40px;
  margin-right: 20px;
  margin-top: 10px;
  background-color: #FF2B78;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  shadow-color: #000000;
  shadow-opacity: 1;
  shadow-radius: 2px;
  elevation: 8;
`;

const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
`;

export function SeeButton({ onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress}>

      <AntDesign name="bars" size={25} color="#FFFFFF" />

      <ButtonText>Ver Tarefas</ButtonText>

    </ButtonContainer>
  );
}
