import styled from 'styled-components/native';

interface UserAvatarProps {
  avatar: string;
  userName: string;
}

const Container = styled.View`
  width: 100%;
  height: 220px;
  background-color: #FF2B78;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border-width: 2px;
  border-color: #FFFFFF;
`;

const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  color: #FFFFFF;
`;

export function UserAvatar({ avatar, userName }: UserAvatarProps) {
  return (
    <Container>
      <Avatar source={{ uri: avatar }} />
      <UserName>{userName}</UserName>
    </Container>
  );
}


