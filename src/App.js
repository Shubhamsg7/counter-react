import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ReplayIcon from '@material-ui/icons/Replay';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


const App = () => {

  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const reset = () => {
    setNum(0);
  };
  
  const decNum = () => {
    setNum(num - 1);
  };


  return (
    <>
      <div className="container">
        <Card className="card">
          <h1>{num}</h1>
          <div className="btn-container">
                <Button className="btn decrease" onClick={decNum}><RemoveIcon /></Button>
                <Button className="btn reset" onClick={reset}><ReplayIcon /></Button>
                <Button className="btn increase" onClick={incNum}><AddIcon /></Button>
            </div>
        </Card>
      </div>
    </>
  );
}

export default App;
