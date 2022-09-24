import React from 'react';
import Counter from "./Components/Counter/Counter";

const App = () => {
  return (
    <div>
      <Counter initialState={1}/>
    </div>
  );
};

export default App;