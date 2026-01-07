import { useState } from 'react';

function ControlledInputs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: 18,
    skillLevel: 5,
    bio: '',
    country: '',
    interests: [],
    gender: '',
    favoriteColor: '#000000',
    birthDate: ''
  });

  // Update form data
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle checkboxes
  const handleInterestChange = (interest, checked) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <h1>Profile Editor</h1>
          <form>
            {/* Text input */}
            <div className="mb-3">
              <label>Name:</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.name} 
                onChange={e => updateField('name', e.target.value)} 
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label>Email:</label>
              <input 
                type="email" 
                className="form-control"
                value={formData.email} 
                onChange={e => updateField('email', e.target.value)} 
              />
            </div>

            {/* Number */}
            <div className="mb-3">
              <label>Age:</label>
              <input 
                type="number" 
                className="form-control"
                min="1" max="100"
                value={formData.age} 
                onChange={e => updateField('age', Number(e.target.value))} 
              />
            </div>

            {/* Range */}
            <div className="mb-3">
              <label>Skill Level: {formData.skillLevel}</label>
              <input 
                type="range" 
                className="form-range"
                min="1" max="10"
                value={formData.skillLevel} 
                onChange={e => updateField('skillLevel', Number(e.target.value))} 
              />
            </div>

            {/* Textarea */}
            <div className="mb-3">
              <label>Bio ({formData.bio.length}/200):</label>
              <textarea 
                className="form-control"
                maxLength="200"
                value={formData.bio} 
                onChange={e => updateField('bio', e.target.value)} 
              />
            </div>

            {/* Select */}
            <div className="mb-3">
              <label>Country:</label>
              <select 
                className="form-select"
                value={formData.country} 
                onChange={e => updateField('country', e.target.value)}
              >
                <option value="">Select...</option>
                <option value="nepal">Nepal</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
              </select>
            </div>

            {/* Multi-select checkboxes */}
            <div className="mb-3">
              <label>Interests:</label>
              {['coding', 'design', 'music', 'sports'].map(interest => (
                <div key={interest} className="form-check">
                  <input 
                    type="checkbox" 
                    className="form-check-input"
                    checked={formData.interests.includes(interest)}
                    onChange={e => handleInterestChange(interest, e.target.checked)}
                  />
                  <label className="form-check-label">{interest}</label>
                </div>
              ))}
            </div>

            {/* Radio */}
            <div className="mb-3">
              <label>Gender:</label>
              {['male', 'female', 'other'].map(gender => (
                <div key={gender} className="form-check">
                  <input 
                    type="radio" 
                    className="form-check-input"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={e => updateField('gender', e.target.value)}
                  />
                  <label className="form-check-label">{gender}</label>
                </div>
              ))}
            </div>

            {/* Color */}
            <div className="mb-3">
              <label>Favorite Color:</label>
              <input 
                type="color" 
                value={formData.favoriteColor} 
                onChange={e => updateField('favoriteColor', e.target.value)} 
              />
            </div>

            {/* Date */}
            <div className="mb-3">
              <label>Birth Date:</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.birthDate} 
                onChange={e => updateField('birthDate', e.target.value)} 
              />
            </div>
          </form>
        </div>

        {/* Live Preview */}
        <div className="col-md-6">
          <h2>Live Preview</h2>
          <div className="card p-3">
            <h3>{formData.name || 'Name'}</h3>
            <p>Email: {formData.email || 'email@example.com'}</p>
            <p>Age: {formData.age}</p>
            <p>Skill: {formData.skillLevel}/10</p>
            <p>Bio: {formData.bio || 'No bio'}</p>
            <p>Country: {formData.country || 'Not selected'}</p>
            <p>Interests: {formData.interests.join(', ') || 'None'}</p>
            <p>Gender: {formData.gender || 'Not specified'}</p>
            <p>Color: <span style={{color: formData.favoriteColor}}>{formData.favoriteColor}</span></p>
            <p>Birth Date: {formData.birthDate || 'Not set'}</p>
          </div>
        </div>
      </div>

      {/* Controlled vs uncontrolled: Controlled has value + onChange, React controls it */}
      {/* Uncontrolled uses useRef, React doesn't control value */}
    </div>
  );
}

export default ControlledInputs;