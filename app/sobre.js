import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: 16px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Paragraph = styled.Text`
  color: #eee;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 12px;
`;

export default function Sobre() {
  return (
    <Container>
      <Title>Sobre os Desenvolvedores</Title>
      <Paragraph>Projeto <Text style={{ fontWeight:'bold', color:'#fff' }}>app-ia</Text> desenvolvido por Gabriel.</Paragraph>
      <Paragraph>Versão: 1.0.0</Paragraph>
      <Paragraph>Stack: React Native, Expo, Expo Router, OpenAI</Paragraph>
    </Container>
  );
}
