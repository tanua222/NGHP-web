import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';

import {REACT_APP_NODE_JS_BACKEND_URL} from '../utils/axiosInstances';

const useAxiosGet = (
    url,
    initialFetch = true,
    api = REACT_APP_NODE_JS_BACKEND_URL,
    initialRes = {},
) => {
    const [response, setResponse] = useState(initialRes);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    //Cancel token to eliminate duplicate requests
    const {CancelToken} = axios;
    const source = CancelToken.source();

    const reFetchData = useCallback(
        async (resetIsLoading = true, config = null) => {
            if (resetIsLoading) setIsLoading(true);

            try {
                api.get(url, {
                    cancelToken: source.token,
                    params: config,
                })
                    .then((res) => {
                        if (!res.data)
                            throw Object.assign(new Error('No Data!'), {
                                code: 404,
                            });

                        // Pagination result
                        if (res.data.content) {
                            const paginationObject = {
                                pageNumber: res.data.pageable.pageNumber + 1,
                                totalPages: res.data.totalPages,
                                totalElements: res.data.totalElements,
                                numberOfElements: res.data.numberOfElements,
                                startingPoint:
                                    res.data.pageable.offset +
                                    (res.data.numberOfElements ? 1 : 0),
                                endingPoint:
                                    res.data.pageable.offset +
                                    res.data.numberOfElements,
                            };

                            setResponse({
                                content: res.data.content,
                                pagination: paginationObject,
                            });
                        } else setResponse(res.data);
                        setError('');
                        setIsLoading(false);
                    })
                    .catch((e) => {
                        if (!axios.isCancel(e)) {
                            setError('Unexpected error occurred');
                            setIsLoading(false);
                        }
                    });
            } catch (err) {
                if (err.response && err.response.status === 400) {
                    setError(err.response.data);
                } else if (!axios.isCancel(err)) {
                    setError('Unexpected error occurred');
                }
            }
        },
        [api, url],
    );

    useEffect(() => {
        if (initialFetch) reFetchData();
        return () => source.cancel();
    }, [initialFetch, reFetchData]);

    return {
        response,
        error,
        isLoading,
        reFetchData,
        setResponse,
    };
};

export default useAxiosGet;
