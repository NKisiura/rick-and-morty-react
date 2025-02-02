import { useCallback, useEffect, useRef } from "react";

export const useConcurrentDispatchAborter = () => {
  const requestAbortFnMapRef = useRef(new Map<string, () => void>());

  const aborter = useCallback(
    ({ abort }: { abort: () => void }, identifier: string) => {
      const prevRequestAbortFunction =
        requestAbortFnMapRef.current.get(identifier);

      if (prevRequestAbortFunction) {
        prevRequestAbortFunction();
        requestAbortFnMapRef.current.delete(identifier);
      }

      requestAbortFnMapRef.current.set(identifier, abort);
    },
    [],
  );

  useEffect(() => {
    return () => {
      requestAbortFnMapRef.current.forEach((abortFn) => {
        abortFn();
      });

      requestAbortFnMapRef.current.clear();
    };
  }, []);

  return aborter;
};
