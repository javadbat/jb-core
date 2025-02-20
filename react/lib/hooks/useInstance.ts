import { useLazyRef } from "./useLazyRef.js";


type BaseConstructableClass<T = any> = new (...args: any[]) => T;

// Type to get the constructor parameters of a class
type Initializers<T extends BaseConstructableClass> = ConstructorParameters<T>;

// useInstance function that accepts a Store class and its initializers
/**
 * create a instance of an class with lazy initialization
 * @param Store class to create instance of
 * @param initializers initializers to pass to the class constructor
 * @returns instance of the class
 */
export const useInstance = <T extends BaseConstructableClass>(Store: T, initializers: Initializers<T>): InstanceType<T> => {
  const vm = useLazyRef(() => new Store(...initializers));
  return vm.current;
};
