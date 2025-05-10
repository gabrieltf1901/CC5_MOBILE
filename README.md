APP IA

Mobile app em React Native que integra chat com IA usando Expo Router, estilizado em preto e branco.

📋 Descrição

Este projeto, app-ia, oferece uma interface simples e moderna para interagir com a API de Chat Completions da OpenAI. Com navegação baseada em arquivos (Expo Router) e design P&B, possui quatro telas principais:

Home: Boas-vindas e acesso ao chat.

Chat IA: Converse com a IA, com loading e tratamento de erros.

Sobre: Informações sobre desenvolvedores e stack.

Configurações: Toggle de Modo Claro e Notificações.

🗂 Estrutura de Pastas

app-ia/
├── app/
│   ├── _layout.js           # Configuração de navegação em abas
│   ├── index.js             # Tela Home
│   ├── chat-ia.js           # Tela Chat com IA
│   ├── sobre.js             # Tela Sobre
│   └── settings.js          # Tela Configurações
├── services/
│   └── openai.js            # Cliente para OpenAI (via axios ou fetch)
├── assets/                  # Imagens, fontes e ícones
├── .env                     # Variáveis de ambiente (não versionar)
├── babel.config.js          # Babel + plugin react-native-dotenv
├── package.json             # Dependências e scripts
└── README.md                # Documentação do projeto

⚙️ Tecnologias

React Native

Expo + Expo Router (File-based routing)

styled-components para estilo P&B

axios ou fetch para requisições HTTP

react-native-dotenv para variáveis de ambiente

expo-linking, react-native-safe-area-context, react-native-screens

🔧 Pré-requisitos

Node.js ≥ 16 (LTS)

npm ou Yarn

Expo CLI (usar via npx expo)

Expo Go instalado no dispositivo móvel

🚀 Instalação e Execução

Clone este repositório:

git clone https://github.com/SEU_USUARIO/SEU_REPO.git
cd app-ia

Crie o arquivo .env na raiz e defina:

OPENAI_API_KEY=seu_token_aqui

Instale dependências via Expo para garantir compatibilidade:

npx expo install styled-components @expo/vector-icons \
  react-native-safe-area-context react-native-screens expo-linking

Instale libs adicionais:

npm install axios react-native-dotenv

Inicie o Metro Bundler (limpando cache):

npx expo start -c

No Expo Go, escaneie o QR Code ou use emulador.

💡 Principais Commits e Branching

master/main: branch principal com versão estável.

feature/*: novas funcionalidades ou refinamentos.

Use git checkout -b feature/nome-da-feature para criar.

📜 Scripts (package.json)

Comando

Descrição

npx expo start

Inicia o app no dispositivo/emulador

npx expo build

Prepara build via EAS para publicação

npm run lint

Executa ESLint

🔄 Fluxo de Desenvolvimento

Branch: crie feature/* para cada tarefa.

Commit: mensagens claras e atômicas.

Push: git push -u origin feature/*.

Pull Request: abra PR para main e execute code review.

Merge: após validações e testes.

🚧 Boas Práticas

Nunca versionar .env; adicione ao .gitignore.

Para lidar com segredos, use GitHub Secrets ou variáveis de CI.

Sempre trate estados de loading e erros no chat.

Faça testes em dispositivos reais (iOS/Android).

© 2025 Gabriel e equipe. Desenvolvimento com 💡.
