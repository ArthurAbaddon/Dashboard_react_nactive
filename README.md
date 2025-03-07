Dashboard da Fábrica de Biscoitos

Este é o dashboard desenvolvido para o gerenciamento e monitoramento das operações da fábrica de biscoitos. A aplicação oferece uma interface móvel interativa para visualização de dados de produção, controle de estoque e métricas de desempenho, utilizando React Native, Expo e MQTT.
Funcionalidades

    Visão Geral de Produção: Exibe o status atual da produção, incluindo quantidade de biscoitos produzidos, tempo de operação e eficiência das máquinas.
    Controle de Estoque: Monitora os níveis de ingredientes e materiais utilizados na produção.
    Métricas de Desempenho: Gráficos interativos para acompanhar a performance de cada linha de produção.
    Alertas e Notificações: Notifica os operadores sobre falhas ou necessidades de manutenção nas máquinas em tempo real através de MQTT.

Tecnologias Utilizadas

    Frontend: React Native, Expo
    Comunicação em Tempo Real: MQTT
    Bibliotecas de UI: NativeBase, React Navigation
    Gráficos: React Native Chart Kit (ou outra biblioteca de gráficos que você estiver utilizando)
    Estado Global: Redux (se aplicável)

Instalação

1. Clone o repositório
  git clone https://github.com/usuario/fabrica-biscoitos-dashboard.git
  cd fabrica-biscoitos-dashboard

2. Instale as dependências
   npm install

3. Configuração do MQTT

Certifique-se de que o servidor MQTT esteja configurado corretamente para se conectar à sua aplicação. Adicione as configurações no arquivo de ambiente ou diretamente no código, dependendo da forma como você preferir.

Exemplo de configuração do MQTT:
    
    import { Client } from 'mqtt';
    
    const client = mqtt.connect('mqtt://broker.hivemq.com'); // ou seu broker MQTT
    
    client.on('connect', () => {
      console.log('Conectado ao broker MQTT');
      client.subscribe('fabrica/alerta'); // Assine os tópicos que deseja monitorar
    });
    
    client.on('message', (topic, message) => {
      // Lógica para tratar as mensagens recebidas
      console.log(`Mensagem recebida no tópico ${topic}: ${message.toString()}`);
    });

4. Execute o projeto
   Inicie o aplicativo com o Expo:
     npx expo start

Acesse o aplicativo através do emulador ou dispositivo físico utilizando o QR code gerado.


Contribuindo
    Faça um fork deste repositório.
    Crie uma nova branch (git checkout -b feature/nome-da-feature).
    Realize as alterações desejadas.
    Faça commit (git commit -am 'Adicionando nova feature').
    Envie a branch para o seu repositório (git push origin feature/nome-da-feature).
    Abra um Pull Request.


