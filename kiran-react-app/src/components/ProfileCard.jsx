// ProfileCard component accepts props for data
function ProfileCard({ name, role, company, bio, skills }) {
  // Destructuring props: {name} extracts name from props object
  const avatar = name.charAt(0).toUpperCase(); // first letter for avatar

  return (
    <div className="card p-4 m-2 shadow">
      <div className="avatar bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
        {avatar}
      </div>
      <h3>{name}</h3>
      <p><strong>{role}</strong> at {company}</p>
      <p>{bio}</p>
      <div>
        {skills.map(skill => <span key={skill} className="badge bg-secondary me-1">{skill}</span>)}
      </div>
    </div>
  );
}

export default ProfileCard;

// Defense Q: Props bhanne ke ho? Children props ke ho?
// Props are data passed to components from parent. Like arguments to function.
// Children props are special prop for content between opening/closing tags.