// StatCard component for showing stats
function StatCard({ icon, number, label }) {
  return (
    <div className="card p-3 m-2 text-center">
      <div style={{fontSize: '2em'}}>{icon}</div>
      <div style={{fontSize: '2em', fontWeight: 'bold'}}>{number}</div>
      <div>{label}</div>
    </div>
  );
}

export default StatCard;