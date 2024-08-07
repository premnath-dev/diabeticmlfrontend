import { useState } from 'react';

function Form() {
   const [form, setForm] = useState({
      pregnancies: "",
      glucose: "",
      blood_presure: "",
      skin_thickness: "",
      insulin_level: "",
      bmi: "",
      diabetes_pedigree: "",
      age: ""
   });

   const handleSubmit = (event) => {
      event.preventDefault();

      console.log("Form submitted");
      console.log(form);
      // Send to Database/Send to Rest API
   };

   const onChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setForm({ ...form, [name]: value });
   }

   return (
      <form onSubmit={handleSubmit}>
         <h4>Diabetes Prediction Model</h4>
         <p>Example to Predict Probability of Diabetes</p>
         <input type="number" name="pregnancies" onChange={onChange} placeholder="Number of Pregnancies" />
         <input type="number" name="glucose" onChange={onChange} placeholder="Glucose level in Sugar" />
         <input type="number" name="blood_presure" onChange={onChange} placeholder="Blood Presure" />
         <input type="number" name="skin_thickness" onChange={onChange} placeholder="Skin Thickness" />
         <input type="number" name="insulin_level" onChange={onChange} placeholder="Insulin Level" />
         <input type="number" name="bmi" onChange={onChange} placeholder="Body Mass Index (BMI)" />
         <input type="number" name="diabetes_pedigree" onChange={onChange} placeholder="Diabetes Pedigree Function" />
         <input type="number" name="age" onChange={onChange} placeholder="Age" />
         <button type="submit">Submit Form</button>
      </form>
   );
}

export default Form;