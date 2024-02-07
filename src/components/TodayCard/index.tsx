import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface TodayCardProps {
    number: number;
  }
const CardContainer = styled.View`
  width: 180px;
  height: 190px;
  background-color: #32B8D6;
  border-radius: 10px;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 10px 10px;
`;

const NumberText = styled.Text`
  font-size: 32px;
  margin-left: 10px;
  font-weight: bold;
  color: #FFFFFF;
`;

const TitleText = styled.Text`
  font-size: 24px;
  margin-left: 10px;
  font-weight: 600; /* Semibold */
  color: #FFFFFF;
`;

const SubtitleText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  color: #FFFFFF;
`;

const IconContainer = styled.View`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const TodayCard: React.FC<TodayCardProps> = ({ number }) => {
  return (
    <CardContainer>

      <IconContainer>
        <AntDesign name="staro" size={55} color="#FFFFFF" />
      </IconContainer>

      <NumberText>{number}</NumberText>
      
      <TitleText>Para hoje</TitleText>

      <SubtitleText>{number} Tarefas para hoje</SubtitleText>

    </CardContainer>
  );
};

export default TodayCard;
