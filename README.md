- NOME: GABRIEL TORRES FERNANDES - RM553635
- LINK DO VÍDEO - https://youtu.be/qDWSR5Slop8

# APP IA

Mobile app em React Native com chat integrado à API da OpenAI, usando Expo Router e design moderno em preto e branco.

---

## 📋 Descrição

**app-ia** oferece uma interface simples e elegante para interagir com o modelo GPT-3.5-turbo da OpenAI. A navegação é baseada em arquivos (Expo Router) e o estilo utiliza apenas tons de preto, branco e cinza.

### Telas Principais

* **Home**: tela inicial com botão para iniciar conversa.
* **Chat IA**: chat com loading, tratamento de erros e histórico de mensagens.
* **Sobre**: informações sobre o projeto, versão e stack utilizada.
* **Configurações**: controle de Modo Claro e Notificações.

---

## 🗂 Estrutura de Pastas

```text
app-ia/
├── app/
│   ├── _layout.js       # Navegação em abas
│   ├── index.js         # Home
│   ├── chat-ia.js       # Chat IA
│   ├── sobre.js         # Sobre
│   └── settings.js      # Configurações
├── services/
│   └── openai.js        # Cliente OpenAI (axios ou fetch)
├── assets/              # Imagens, fontes, ícones
├── .env                 # Variáveis de ambiente (não versionar)
├── babel.config.js      # Configuração Babel + dotenv
├── package.json         # Dependências e scripts
└── README.md            # Documentação do projeto
```

---

## ⚙️ Tecnologias

* **React Native**
* **Expo** + **Expo Router**
* **styled-components**
* **axios** (ou **fetch** nativo)
* **react-native-dotenv**
* **react-native-safe-area-context**
* **react-native-screens**
* **expo-linking**

---

## 🔧 Pré-requisitos

1. **Node.js** ≥ 16 (LTS)
2. **npm** ou **Yarn**
3. **Expo CLI** (usar via `npx expo`)
4. **Expo Go** no dispositivo móvel ou emulador

---

## 🚀 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/gabrieltf1901/CC5_MOBILE
   cd app-ia
   ```
2. Crie `.env` na raiz e adicione sua chave:

   ```env
   OPENAI_API_KEY=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
   ```
3. Configure o Babel (`react-native-dotenv`):

   ```js
   // babel.config.js
   module.exports = function(api) {
     api.cache(true);
     return {
       presets: ['babel-preset-expo'],
       plugins: [['module:react-native-dotenv', {
         moduleName: '@env',
         path: '.env',
         allowUndefined: true
       }]]
     };
   };
   ```
4. Instale dependências:

   ```bash
   npx expo install styled-components @expo/vector-icons \
     react-native-safe-area-context react-native-screens expo-linking
   npm install axios react-native-dotenv
   ```
5. Inicie o projeto:

   ```bash
   npx expo start -c
   ```
6. Escaneie o QR Code com o **Expo Go** ou use um emulador.

---

## 📜 Scripts úteis

| Comando          | Descrição                            |
| ---------------- | ------------------------------------ |
| `npx expo start` | Inicia o app no dispositivo/emulador |
| `npx expo build` | Gera build via EAS                   |
| `npm run lint`   | Executa ESLint                       |


---

## 🚧 Boas Práticas

* **.env** deve estar no `.gitignore`.
* Não versionar chaves de API; use GitHub Secrets para CI.
* Sempre trate estados de loading e erros no chat.
* Teste em dispositivos reais (iOS/Android).

---
