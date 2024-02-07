import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { TaskContext } from '../../context/TaskContext';

interface OptionsProps {
    onOptionPress: (option: string) => void;
}

const Container = styled.View`
width: 150px;
height: 240px;
flex-direction: column;
align-items: stretch;
margin-top: 50px;
background-color: #FF2B78;
justify-content: center;
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;
`;

const OptionContainer = styled.TouchableOpacity`
margin-left: 10px;
font-size: 18px;
font-weight: 600;
`;

const OptionText = styled.Text`
  font-size: 18px;
  color: #FFFFFF;
  margin: 10px; 
  text-align: left;
`;


const Options: React.FC<OptionsProps> = ({ onOptionPress }) => {
    return (
     <Container>
        <OptionContainer onPress = {() => onOptionPress('Feita')}>
            <OptionText><AntDesign name="checkcircleo" size={25} color="white"/>   Feita</OptionText>
        </OptionContainer> 

        <OptionContainer onPress = {() => onOptionPress('Fazer')}>
            <OptionText><AntDesign name="calendar" size={25} color="white"/>   Fazer</OptionText>
        </OptionContainer>

        <OptionContainer onPress = {() => onOptionPress('Hoje')}>
            <OptionText><AntDesign name="star" size={25} color="white"/>   Para hoje</OptionText>
        </OptionContainer>

        <OptionContainer onPress = {() => onOptionPress('Atrasada')}>
            <OptionText><AntDesign name="clockcircle" size={25} color="white"/>   Pendente</OptionText>
        </OptionContainer>
        
        <OptionContainer onPress = {() => onOptionPress('Excluir')}>
            <OptionText><AntDesign name="delete" size={25} color="white"/>   Exluir</OptionText>
        </OptionContainer>

        

     </Container>
    );
  };

  export default Options;
  