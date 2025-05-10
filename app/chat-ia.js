import React, { useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { sendMessageToAI } from '../services/openai';

const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: 16px;
`;

const Messages = styled.ScrollView`
  flex: 1;
  margin-bottom: 16px;
`;

const Bubble = styled.View`
  background-color: ${({ user }) => (user ? '#fff' : '#333')};
  align-self: ${({ user }) => (user ? 'flex-end' : 'flex-start')};
  border-radius: 16px;
  padding: 10px;
  margin-bottom: 8px;
  max-width: 80%;
`;

const TextMsg = styled.Text`
  color: ${({ user }) => (user ? '#000' : '#fff')};
`;

const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #444;
  padding-top: 8px;
`;

const Input = styled.TextInput`
  flex: 1;
  color: #fff;
  background-color: #222;
  border-radius: 20px;
  padding: 10px 16px;
  margin-right: 8px;
`;

const SendBtn = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px 16px;
  border-radius: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const SendText = styled.Text`
  color: #000;
  font-weight: 600;
`;

export default function ChatIA() {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Função handleSend: chama a API e trata loading e erros
  const handleSend = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);

    // Adiciona a mensagem do usuário na thread
    const userMsg = { id: Date.now().toString(), text: input, user: true };
    setMsgs(prev => [...prev, userMsg]);
    setInput('');

    try {
      // Chama o serviço de IA
      const aiText = await sendMessageToAI(input);
      const aiMsg = { id: (Date.now() + 1).toString(), text: aiText, user: false };
      setMsgs(prev => [...prev, aiMsg]);
    } catch (err) {
      // Tratamento específico para rate limits (429) e erros gerais
      if (err.response?.status === 429) {
        Alert.alert(
          'Muitas requisições',
          'Você enviou muitas mensagens em pouco tempo. Aguarde alguns segundos e tente de novo.'
        );
      } else {
        Alert.alert('Erro', 'Ocorreu um erro inesperado. Tente novamente mais tarde.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Messages>
        {msgs.map(m => (
          <Bubble key={m.id} user={m.user}>
            <TextMsg user={m.user}>{m.text}</TextMsg>
          </Bubble>
        ))}
      </Messages>

      <InputRow>
        <Input
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#888"
          value={input}
          onChangeText={setInput}
        />
        <SendBtn onPress={handleSend} disabled={loading}>
          {loading ? <ActivityIndicator /> : <SendText>Enviar</SendText>}
        </SendBtn>
      </InputRow>
    </Container>
  );
}