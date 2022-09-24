import React from 'react';
import Counter from "./Components/Counter/Counter";
import Coffee from "./Components/Coffee";
import Counterreducer from "./Components/Counter_reducer/Counterreducer";
import Usememo from "./Components/Usememo/Usememo";
import Zidingyihooks from "./Components/Zidingyihooks/Zidingyihooks";
const App = () => {
  return (
    <div>
      {/*<Counter initialState={1}/>*/}
      {/*<Coffee></Coffee>*/}
      {/*<Counterreducer></Counterreducer>*/}
      {/*<Usememo></Usememo>*/}
      <Zidingyihooks></Zidingyihooks>
    </div>
  );
};

export default App;