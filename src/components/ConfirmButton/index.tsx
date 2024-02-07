import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  width: 120px;
  height: 35px;
  margin-top: 10px;
  margin-bottom: 5px;
  background-color: #37C25E;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Text = styled.Text`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
`;

const ConfirmButton = () => {
  return (
    <ButtonContainer>
      <Text>ADICIONAR</Text>
    </ButtonContainer>
  );
};

export default ConfirmButton;
