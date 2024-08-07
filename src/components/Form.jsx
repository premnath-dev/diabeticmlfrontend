import { useReducer } from "react";
import getData from "./data";

const initialState = {
  pregnancies: "",
  glucose: "",
  blood_pressure: "",
  skin_thickness: "",
  insulin_level: "",
  bmi: "",
  diabetes_pedigree: "",
  age: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const Form = ({ displayResult, isLoading }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    Object.entries(state).forEach(([key, value], index) => {
      formData[index + 1] = value;
    });
    const promise1 = new Promise((resolve, reject) => {
      getData(formData)
        .then((data) => {
          console.log("getData resolved with:", data);
          resolve(data);
        })
        .catch((error) => {
          console.log("getData rejected with:", error);
          reject(error);
        });
    });

    displayResult(promise1);
    dispatch({ type: "RESET" });
  };

  return (
    <form onSubmit={handleSubmit} className="diabetes-form">
      <h4>Diabetes Prediction Model</h4>
      <p>Example to Predict Probability of Diabetes</p>
      {Object.entries(initialState).map(([key, value]) => (
        <input
          key={key}
          type="number"
          required
          name={key}
          value={state[key]}
          onChange={handleChange}
          placeholder={key
            .replace(/_/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase())}
        />
      ))}
      <button type="submit" disabled={isLoading}>Submit Form</button>
    </form>
  );
};

export default Form;
