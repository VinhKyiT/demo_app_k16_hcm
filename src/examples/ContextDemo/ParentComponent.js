import React, {createContext} from 'react';
import ChildComponent from './ChildComponent';

// Tạo một Context
export const MyContext = createContext();

// Component cha cung cấp dữ liệu cho Context
function ParentComponent() {
  const data = {
    greet: 'Hello From Parent Component!',
    // alert: 'Xin chao',
  };
  return (
    <MyContext.Provider value={data}>
      <ChildComponent />
    </MyContext.Provider>
  );
}
export default ParentComponent;
