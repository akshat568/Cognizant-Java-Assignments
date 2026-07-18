import React from 'react';
import CalculateScore from './Components/CalculateScore';
import './App.css';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="John Doe"
        School="Springfield High School"
        Total={420}
        goal={500}
      />
    </div>
  );
}

export default App;
