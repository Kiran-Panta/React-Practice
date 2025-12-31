// SkillTag component for skill badges
function SkillTag({ skill, type }) {
  // Color based on type prop
  const colorClass = type === 'tech' ? 'bg-primary' : type === 'soft' ? 'bg-success' : 'bg-info';
  
  return (
    <span className={`badge ${colorClass} me-1`}>{skill}</span>
  );
}

export default SkillTag;