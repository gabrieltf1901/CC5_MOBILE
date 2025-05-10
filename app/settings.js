import React, { useState } from 'react';
import { Switch } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: 16px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export default function Settings() {
  const [lightMode, setLightMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  return (
    <Container>
      <Row>
        <Label>Modo Claro</Label>
        <Switch
          value={lightMode}
          onValueChange={() => setLightMode(prev => !prev)}
          trackColor={{ false: '#ccc', true: '#fff' }}
          thumbColor={lightMode ? '#000' : '#fff'}
        />
      </Row>
      <Row>
        <Label>Notificações</Label>
        <Switch
          value={notificationsEnabled}
          onValueChange={() => setNotificationsEnabled(prev => !prev)}
          trackColor={{ false: '#ccc', true: '#fff' }}
          thumbColor={notificationsEnabled ? '#000' : '#fff'}
        />
      </Row>
    </Container>
  );
}
