import React from 'react';
import { useRouter } from 'expo-router';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Button = styled.TouchableOpacity`
  background-color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 600;
`;

export default function Home() {
  const router = useRouter();

  return (
    <Container>
      <Title>Bem-vindo ao app-ia</Title>
      <Button onPress={() => router.push('/chat-ia')}>
        <ButtonText>Iniciar Chat IA</ButtonText>
      </Button>
    </Container>
  );
}
