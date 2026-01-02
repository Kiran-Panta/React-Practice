import ProfileCard from '../components/ProfileCard';
import StatCard from '../components/StatCard';
import SkillTag from '../components/SkillTag';
import Counter from '../components/Counter';
import ToggleCard from '../components/ToggleCard';

function Home() {
  return (
    <main className="container my-4">
      <h1>Namaste! Ma Kiran Panta hun — React Intern at Tech Yatra</h1>
      
      <Counter />
      
      <div className="row">
        <div className="col-md-4">
          <ToggleCard 
            question="What is JSX?" 
            answer="JSX is syntax that looks like HTML but is JavaScript. Babel converts it to React.createElement." 
          />
        </div>
        <div className="col-md-4">
          <ToggleCard 
            question="What is a component?" 
            answer="A reusable piece of UI, like a function that returns JSX." 
          />
        </div>
        <div className="col-md-4">
          <ToggleCard 
            question="What is useState?" 
            answer="A hook to add state to functional components. Returns [state, setter]." 
          />
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6">
          <ProfileCard 
            name="Kiran Panta" 
            role="React Intern" 
            company="Tech Yatra" 
            bio="Learning React and web development." 
            skills={["React", "JS", "HTML"]} 
          />
        </div>
        <div className="col-md-6">
          <ProfileCard 
            name="John Doe" 
            role="Senior Dev" 
            company="Tech Corp" 
            bio="Experienced developer." 
            skills={["Node", "Python", "AWS"]} 
          />
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-3">
          <StatCard icon="✅" number="15" label="Days Completed" />
        </div>
        <div className="col-md-3">
          <StatCard icon="🧩" number="10" label="Components Built" />
        </div>
        <div className="col-md-3">
          <StatCard icon="📚" number="50" label="Concepts Learned" />
        </div>
        <div className="col-md-3">
          <StatCard icon="⏰" number="80" label="Hours Practiced" />
        </div>
      </div>
      
      <div>
        <SkillTag skill="React" type="tech" />
        <SkillTag skill="Communication" type="soft" />
        <SkillTag skill="Problem Solving" type="soft" />
        <SkillTag skill="CSS" type="tech" />
        <SkillTag skill="JavaScript" type="tech" />
      </div>
    </main>
  );
}

export default Home;