import { ApiPromise, WsProvider } from '@polkadot/api';

const connectToApi = async (network:string) => {
    switch (network){
        case 'astar':{
            const provider = new WsProvider('wss://astar-rpc.dwellir.com');
            const api = await ApiPromise.create({ provider });
            return api;
            
        }
    }
  
};

export default connectToApi;