import React from 'react';
import Themebutton from "./Themebutton";

const Toolbar = ({data}) => {
  return (
    <div>
      <Themebutton data={data}></Themebutton>
    </div>
  );
};

export default Toolbar;