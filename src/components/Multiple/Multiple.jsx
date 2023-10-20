import React, { useState } from "react";
import "./multiple.css";

export default function Multiple() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        portfoliowebsite: "",
        position: "",
        phone: "",
        relocation: "",
        comments: ""
    });
    const handleReset = () => {
        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            portfoliowebsite: "",
            position: "",
            phone: "",
            relocation: "",
            comments: ""
        });
    };
        

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData, null, 2));  
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <div>
        <label className="multiple__text" htmlFor="firstName">First name*</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
        <label className="multiple__text" htmlFor="lastName">Last name*</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>

      <label className="multiple__text" htmlFor="email">Email*</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

      <label className="multiple__text" htmlFor="portfolioWebsite">Portfolio website</label>
      <input type="text/url" id="portfolioWebsite" name="portfolioWebsite" value={formData.portfolioWebsite} onChange={handleChange} />

      <label className="multiple__text" htmlFor="position">Position you are applying for*</label>
      <select id="position" name="position" value={formData.position} onChange={handleChange}>
        <option value="Security Analyst">Security Analyst</option>
        <option value="Tester">Tester</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Front End Developer">Front End Developer</option>
      </select>

      <label className="multiple__text" htmlFor="phone">Phone* (Must be 10 digits)</label>
      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} maxLength="10" pattern="\d{10}" />

      <p>Are you willing to relocate?</p>
      {["Yes", "No", "Not sure"].map(option => (
        <label key={option}>
          <input type="radio" name="relocate" value={option} checked={formData.relocate === option} onChange={handleChange} />
          {option}
        </label>
      ))}

      <label className="commentbox" htmlFor="comments">Reference / Comments / Questions</label>
      <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} />

      <button className="multiple__button" type="submit">Send Application</button>
      <button className="multiple__button" type="reset" onClick={handleReset}>
    Reset 
</button>

    </form>
  );
}
