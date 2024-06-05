import { useMemo, DependencyList } from "react";

const useComputed = <T>(
  computeFunction: () => any,
  dependencies: DependencyList
) => {
  return useMemo<T>(computeFunction, dependencies);
};

export default useComputed;
