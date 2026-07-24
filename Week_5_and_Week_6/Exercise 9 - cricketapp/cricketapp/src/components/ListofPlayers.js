import React from 'react';

const ListofPlayers = () => {
  // ES6 array with 11 players and their scores
  const players = [
    { name: 'Rohit Sharma', score: 83 },
    { name: 'Shubman Gill', score: 65 },
    { name: 'Virat Kohli', score: 92 },
    { name: 'Shreyas Iyer', score: 45 },
    { name: 'KL Rahul', score: 70 },
    { name: 'Hardik Pandya', score: 55 },
    { name: 'Ravindra Jadeja', score: 88 },
    { name: 'Shardul Thakur', score: 30 },
    { name: 'Mohammad Siraj', score: 20 },
    { name: 'Kuldeep Yadav', score: 15 },
    { name: 'Jasprit Bumrah', score: 10 },
  ];

  // ES6 arrow function + filter: players with scores below 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🏏 List of All Players (ES6 map)</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Player Name</th>
            <th style={styles.th}>Score</th>
          </tr>
        </thead>
        <tbody>
          {/* ES6 map() method */}
          {players.map((player, index) => (
            <tr key={index} style={styles.row}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{player.name}</td>
              <td style={{ ...styles.td, color: player.score < 70 ? 'red' : 'green', fontWeight: 'bold' }}>
                {player.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={styles.heading}>⚠️ Players with Score Below 70 (ES6 Arrow Function + Filter)</h2>
      <ul style={styles.list}>
        {lowScorers.map((player, index) => (
          <li key={index} style={styles.listItem}>
            {player.name} — <span style={{ color: 'red' }}>{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', marginBottom: '20px' },
  heading: { color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '8px' },
  table: { width: '100%', borderCollapse: 'collapse', marginBottom: '20px' },
  headerRow: { backgroundColor: '#2c3e50', color: 'white' },
  th: { padding: '10px', textAlign: 'left', border: '1px solid #ddd' },
  row: { backgroundColor: '#fff' },
  td: { padding: '8px 10px', border: '1px solid #ddd' },
  list: { listStyle: 'disc', paddingLeft: '20px' },
  listItem: { marginBottom: '6px', fontSize: '1rem' },
};

export default ListofPlayers;
