import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface ToDoCardProps {
  number: number;
}

const CardContainer = styled.View`
  width: 180px;
  height: 140px;
  background-color: #FF9040;
  border-radius: 10px;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 10px;
`;

const NumberText = styled.Text`
  font-size: 32px;
  margin-left: 10px;
  font-weight: bold;
  color: #FFFFFF;
`;

const TitleText = styled.Text`
  font-size: 26px;
  font-weight: 600; /* Semibold */
  color: #FFFFFF;
  margin-left: 10px;
  text-align: left;
`;

const SubtitleText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  color: #FFFFFF;
  text-align: left;
`;

const IconContainer = styled.View`
  position: absolute;
  top: 15px;
  right: 20px;
`;

const ToDoCard: React.FC<ToDoCardProps> = ({ number }) => {
  return (
    <CardContainer>

      <IconContainer>
        <AntDesign name="calendar" size={35} color="#FFFFFF" />
      </IconContainer>

      <NumberText>{number}</NumberText>

      <TitleText>A concluir</TitleText>

      <SubtitleText>{number} Tarefas agendadas</SubtitleText>
    </CardContainer>
  );
};

export default ToDoCard;
