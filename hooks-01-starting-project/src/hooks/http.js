import { useReducer, useCallback } from "react";

const initialState = {
  loading: true,
  error: null,
  data: null,
  extra: null,
  identifier: null
};

const httpReducer = (currhttpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier
      };
    case "RESPONSE":
      return {
        ...currhttpState,
        loading: false,
        data: action.responseDat,
        extra: action.extra
      };
    case "ERROR":
      return { loading: false, errorMessage: action.error };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("Should Not be here");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null
  });

  const clear = useCallback(() => dispatchHttp({ type: "CLEAR" }), []);

  const sendRequest = useCallback(
    (url, method, body, reqExtra, reqIdentifier) => {
      dispatchHttp({ type: "SEND", identifier: reqIdentifier });
      fetch(url, {
        method: method,
        body: body,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          return response.json();
        })
        .then(responseData => {
          dispatchHttp({
            type: "RESPONSE",
            data: responseData,
            extra: reqExtra
          });
        })
        .catch(error => {
          dispatchHttp({ type: "ERROR", errorMessage: error.message });
        });
    },
    []
  );

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.reqIdentifier,
    clear: clear
  };
};

export default useHttp;
