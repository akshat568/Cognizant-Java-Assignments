import React from 'react';

const IndianPlayers = () => {
  // ES6 Destructuring + Spread/Merge
  const T20players = ['Rohit Sharma', 'Virat Kohli', 'KL Rahul', 'Hardik Pandya', 'Jasprit Bumrah'];
  const RanjiTrophyPlayers = ['Prithvi Shaw', 'Sarfaraz Khan', 'Abhimanyu Easwaran', 'Rinku Singh', 'Yash Dayal'];

  // ES6 Spread operator to merge two arrays
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  // ES6 Destructuring to separate odd and even indexed players
  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🇮🇳 Indian Players (ES6 Destructuring &amp; Spread)</h2>

      <div style={styles.row}>
        <div style={styles.column}>
          <h3 style={{ color: '#e74c3c' }}>Odd Team Players</h3>
          <ul style={styles.list}>
            {oddPlayers.map((player, i) => (
              <li key={i} style={styles.listItem}>{player}</li>
            ))}
          </ul>
        </div>
        <div style={styles.column}>
          <h3 style={{ color: '#2980b9' }}>Even Team Players</h3>
          <ul style={styles.list}>
            {evenPlayers.map((player, i) => (
              <li key={i} style={styles.listItem}>{player}</li>
            ))}
          </ul>
        </div>
      </div>

      <h3 style={styles.heading}>🔀 Merged Squad: T20 + Ranji Trophy (ES6 Spread)</h3>
      <div style={styles.mergedContainer}>
        {allPlayers.map((player, index) => (
          <span key={index} style={styles.badge}>{player}</span>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px', backgroundColor: '#eaf4fb', borderRadius: '10px', marginBottom: '20px' },
  heading: { color: '#2c3e50', borderBottom: '2px solid #e74c3c', paddingBottom: '8px' },
  row: { display: 'flex', gap: '30px', marginBottom: '20px' },
  column: { flex: 1, backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' },
  list: { listStyle: 'decimal', paddingLeft: '20px' },
  listItem: { marginBottom: '6px', fontSize: '1rem', color: '#333' },
  mergedContainer: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  badge: { backgroundColor: '#2c3e50', color: '#fff', padding: '5px 12px', borderRadius: '20px', fontSize: '0.9rem' },
};

export default IndianPlayers;
