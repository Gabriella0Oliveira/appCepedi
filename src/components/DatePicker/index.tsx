import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

const DatePickerContainer = styled.View`
  margin: 10px;
  justify-content: center;
  flex-direction: row;
`;

const DatePartContainer = styled.View`
  width: 110px;
  height: 60px;
  margin: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #FF2B78;
`;

const TitleText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: #FF2B78;
  text-align: center;
`;

const InputContainer = styled.View`
  flex: 1;
  flexDirection: row;
  align-items: center;
`;

const MonthInput = styled(Picker)`
  flex: 1;
  justify-content: center;
  text-align: right;
`;

const DayInput = styled(Picker)`
  flex: 1;
`;

const HourInput = styled.TextInput`
  flex: 1;
  text-align: center;
  font-size: 16px;
`;

const DatePicker = ({
  selectedDay,
  setSelectedDay,
  selectedMonth,
  setSelectedMonth,
  selectedHour,
  setSelectedHour,
}: {
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
  selectedMonth: string;
  setSelectedMonth: React.Dispatch<React.SetStateAction<string>>;
  selectedHour: string;
  setSelectedHour: React.Dispatch<React.SetStateAction<string>>;
}) => {
  
  const [daysInMonth, setDaysInMonth] = useState(31);
  const months = [
    'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'
  ];

  useEffect(() => {
    
    switch (selectedMonth) {
      case 'jan':
      case 'mar':
      case 'mai':
      case 'jul':
      case 'ago':
      case 'out':
      case 'dez':
        setDaysInMonth(31);
        break;

      case 'abr':
      case 'jun':
      case 'set':
      case 'nov':
        setDaysInMonth(30);
        break;

      case 'fev':
        setDaysInMonth(28);
        break;

      default:
        setDaysInMonth(31);
        break;
    }
  }, [selectedMonth]);

  return (
    <DatePickerContainer>
      
      <DatePartContainer>
        <TitleText>MÊS</TitleText>
        <InputContainer>
          <MonthInput
            selectedValue={selectedMonth}
            onValueChange={(itemValue: string) => setSelectedMonth(itemValue)}
          >
            {months.map((month) => (
              <MonthInput.Item key={month} label={month} value={month} />
            ))}
          </MonthInput>
        </InputContainer>
      </DatePartContainer>

      <DatePartContainer>
        <TitleText>DIA</TitleText>
        <InputContainer>
          <DayInput
            selectedValue={selectedDay}
            onValueChange={(itemValue: string) => setSelectedDay(itemValue)}
          >
            {Array.from({ length: daysInMonth }, (_, index) => (index + 1).toString())
              .map((day) => (
                <DayInput.Item key={day} label={day} value={day} />
              ))}
          </DayInput>
        </InputContainer>
      </DatePartContainer>

      <DatePartContainer>
        <TitleText>HORA</TitleText>
        <InputContainer>
          <HourInput
            placeholder="00:00"
            value={selectedHour}
            onChangeText={(text: string) => {
               
                const numericText = text.replace(/[^\d]/g, '');

                const formattedText = numericText.length > 2
                    ? `${numericText.slice(0, 2)}:${numericText.slice(2, 4)}`
                    : numericText;

                setSelectedHour(formattedText);
            }}
            maxLength={5}
          />
        </InputContainer>
      </DatePartContainer>
    </DatePickerContainer>
  );
};

export default DatePicker;
