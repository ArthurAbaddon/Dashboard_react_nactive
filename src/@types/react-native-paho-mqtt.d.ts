declare module "react-native-paho-mqtt" {
  export class Client {
    constructor(options: { uri: string; clientId: string; storage: any });
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    subscribe(topic: string): Promise<void>;
    unsubscribe(topic: string): Promise<void>;
    send(message: Message): Promise<void>;
    onMessageArrived: (message: Message) => void;
  }

  export class Message {
    constructor(payloadString: string);
    destinationName: string;
  }
}