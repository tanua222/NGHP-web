import {getExchangeAxios} from '../../utils/ServiceInvoker';

const useExchange = () => {
    const someRequestFunction = () => {
        return new Promise((res, rej) => {
            getExchangeAxios()
                .get('/some-endpoint')
                .then(() => {
                    res('success');
                })
                .catch(() => {
                    rej('failure');
                });
        });
    };

    return {someRequestFunction};
};

export default useExchange;
