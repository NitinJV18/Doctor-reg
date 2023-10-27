import React, { useState } from 'react';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState({});
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [specialtyOptions] = useState([
    'Cardiology', 'Orthopedics', 'Dermatology', 'Pediatrics', 'Neurology' 
  ]);
  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!dob || calculateAge(dob) < 22)
      newErrors.dob = 'Age must be at least 22';
    if (selectedSpecialties.length === 0)
      newErrors.specialties = 'At least one specialty is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleSpecialtyChange = (e) => {
    const selectedOption = e.target.value;

    if (!selectedSpecialties.includes(selectedOption)) {
      setSelectedSpecialties([...selectedSpecialties, selectedOption]);
    }
  };

  const removeSpecialty = (specialty) => {
    setSelectedSpecialties(selectedSpecialties.filter((item) => item !== specialty));
  };


  const handleRegistration = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Registration successful!');
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form className='form-container-in'>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
          
            <select className='dropDown' value={''} onChange={handleSpecialtyChange}>
              <option value="" disabled hidden>
                Select a Specialty
              </option>
              {specialtyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
        </div>
        <ul>
          {selectedSpecialties.map((specialty) => (
            <li key={specialty}>
              {specialty}
              <button className='submit-button' style={{padding:"5px", fontWeight:"100",margin:"5px"}} onClick={() => removeSpecialty(specialty)}>Remove</button>
            </li>
          ))}
        </ul>
        {errors.name && <div className="error">{errors.name}</div>}
        {errors.specialties && <div className="error">{errors.specialties}</div>}
        {errors.email && <div className="error">{errors.email}</div>}
        {errors.dob && <div className="error">{errors.dob}</div>}
        <button className='submit-button' onClick={handleRegistration}>Register</button>
      </form>
    </div>
  );
}

export default Registration;
