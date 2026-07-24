import React from 'react';
import CohortDetails from './CohortDetails';
import './App.css';

const cohorts = [
  {
    id: 1,
    cohortName: 'React Fundamentals - Batch A',
    trainer: 'Sarah Johnson',
    startDate: '2026-06-01',
    endDate: '2026-07-31',
    status: 'ongoing',
    participants: 25
  },
  {
    id: 2,
    cohortName: 'Java Spring Boot - Batch B',
    trainer: 'Michael Chen',
    startDate: '2026-04-01',
    endDate: '2026-06-15',
    status: 'completed',
    participants: 30
  },
  {
    id: 3,
    cohortName: 'Full Stack Development - Batch C',
    trainer: 'Priya Sharma',
    startDate: '2026-07-01',
    endDate: '2026-09-30',
    status: 'ongoing',
    participants: 20
  },
  {
    id: 4,
    cohortName: 'DevOps Essentials - Batch D',
    trainer: 'Robert Williams',
    startDate: '2026-03-01',
    endDate: '2026-05-30',
    status: 'completed',
    participants: 18
  }
];

function App() {
  return (
    <div className="App">
      <h1>My Academy - Cohort Dashboard</h1>
      <p>Displaying ongoing and completed cohorts</p>
      <div style={{ padding: '20px' }}>
        {cohorts.map(cohort => (
          <CohortDetails
            key={cohort.id}
            cohortName={cohort.cohortName}
            trainer={cohort.trainer}
            startDate={cohort.startDate}
            endDate={cohort.endDate}
            status={cohort.status}
            participants={cohort.participants}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
