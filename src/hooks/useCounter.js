import {useContext} from 'react';
import {CounterContext} from '~screens/Counter';

const useCounter = () => {
  return useContext(CounterContext);
};

export default useCounter;
