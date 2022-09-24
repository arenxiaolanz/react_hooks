import React, {useState,useMemo} from 'react';

const Usememo = () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState(1)
  const [d, setD] = useState(1)

  const c = useMemo(() => {
    console.log('use Memo')
    return a+b
  },[a,b])

  return (
    <div>
      <p>a:{a}</p><br/>
      <p>b:{b}</p><br/>
      <p>c:{c}</p><br/>
      <p>d:{d}</p><br/>
      <button onClick={() => {
        setA(a + 1)
      }}>a+
      </button>
      <br/>
      <button onClick={() => {
        setB(b + 1)
      }}>b+
      </button>
      <br/>
      <button onClick={() => {
        setD(d + 1)
      }}>d+
      </button>
      <br/>
    </div>
  );
};

export default Usememo;