export declare type fetcherFn<Data> = (...args: any) => Data | Promise<Data>;
export interface ConfigInterface<Data = any, Error = any, Fn extends fetcherFn<Data> = fetcherFn<Data>> {
    errorRetryInterval?: number;
    loadingTimeout?: number;
    focusThrottleInterval?: number;
    dedupingInterval?: number;
    refreshInterval?: number;
    refreshWhenHidden?: boolean;
    refreshWhenOffline?: boolean;
    revalidateOnFocus?: boolean;
    revalidateOnReconnect?: boolean;
    shouldRetryOnError?: boolean;
    fetcher?: Fn;
    suspense?: boolean;
    initialData?: Data;
    onLoadingSlow?: (key: string, config: ConfigInterface<Data, Error>) => void;
    onSuccess?: (data: Data, key: string, config: ConfigInterface<Data, Error>) => void;
    onError?: (err: Error, key: string, config: ConfigInterface<Data, Error>) => void;
    onErrorRetry?: (err: Error, key: string, config: ConfigInterface<Data, Error>, revalidate: revalidateType, revalidateOpts: RevalidateOptionInterface) => void;
}
export interface RevalidateOptionInterface {
    retryCount?: number;
    dedupe?: boolean;
}
declare type keyFunction = () => string | any[] | null;
export declare type keyInterface = keyFunction | string | any[] | null;
export declare type updaterInterface<Data = any, Error = any> = (shouldRevalidate?: boolean, data?: Data, error?: Error, shouldDedupe?: boolean) => boolean | Promise<boolean>;
export declare type triggerInterface = (key: keyInterface, shouldRevalidate?: boolean) => void;
export declare type mutateInterface<Data = any> = (key: keyInterface, data: Data | Promise<Data>, shouldRevalidate?: boolean) => void;
export declare type broadcastStateInterface<Data = any, Error = any> = (key: string, data: Data, error?: Error) => void;
export declare type responseInterface<Data, Error> = {
    data?: Data;
    error?: Error;
    revalidate: () => Promise<boolean>;
    isValidating: boolean;
};
export declare type revalidateType = (revalidateOpts: RevalidateOptionInterface) => Promise<boolean>;
export declare type pagesWithSWRType<Data, Error> = (swr: responseInterface<Data, Error>) => responseInterface<Data, Error>;
export declare type pagesPropsInterface<Offset, Data, Error> = {
    offset: Offset;
    withSWR: pagesWithSWRType<Data, Error>;
};
export declare type pageComponentType<Offset, Data, Error> = (props: pagesPropsInterface<Offset, Data, Error>) => any;
export declare type pageOffsetMapperType<Offset, Data, Error> = (SWR: responseInterface<Data, Error>, index: number) => Offset;
export declare type pagesResponseInterface = {
    pages: any;
    pageCount: number;
    pageSWRs: responseInterface<any, any>[];
    isLoadingMore: boolean;
    isReachingEnd: boolean;
    isEmpty: boolean;
    loadMore: () => void;
    resetPages: () => void;
};
export declare type actionType<Data, Error> = {
    data?: Data;
    error?: Error;
    isValidating?: boolean;
};
export {};
