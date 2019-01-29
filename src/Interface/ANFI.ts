export declare class RPCHandler {
    Call(name: string, data: object, callback: (e: any, d: any) => void): void;
}

export declare class RPSHandler {
    Subscribe(name: string, cb: (e: object, d: object) => void): () => void;
    Publish(name: string, data: object): void;
}

export declare class LPSHandler {
    Subscribe(channel: string, cb: (d: any) => void): { pub: (data: object) => void; unsub: () => void; };
    Publish(channel: string, data: object): void;
}

export declare class ANFI {
    readonly RPC: RPCHandler;
    readonly RPS: RPSHandler;
    readonly LPS: LPSHandler;
}