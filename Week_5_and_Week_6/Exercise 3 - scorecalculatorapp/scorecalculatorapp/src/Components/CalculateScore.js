import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { Name, School, Total, goal } = props;
  const average = (Total / goal) * 100;

  return (
    <div className="score-container">
      <h2>Student Score Calculator</h2>
      <table className="score-table">
        <tbody>
          <tr>
            <td><strong>Student Name:</strong></td>
            <td>{Name}</td>
          </tr>
          <tr>
            <td><strong>School:</strong></td>
            <td>{School}</td>
          </tr>
          <tr>
            <td><strong>Total Marks Obtained:</strong></td>
            <td>{Total}</td>
          </tr>
          <tr>
            <td><strong>Goal (Maximum Marks):</strong></td>
            <td>{goal}</td>
          </tr>
          <tr>
            <td><strong>Average Score (%):</strong></td>
            <td className="average">{average.toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CalculateScore;
