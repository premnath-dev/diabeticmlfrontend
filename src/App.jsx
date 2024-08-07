import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [state, setState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const displayResult = async (dataPromise) => {
    setIsLoading(true);
    setError("");
    setState("");
console.log(">>>",dataPromise);

    try {
      const result = await dataPromise;
      setState(result);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Form displayResult={displayResult} isLoading={isLoading}/>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {state && <p dangerouslySetInnerHTML={{ __html: state }} />}
    </>
  );
}

export default App;
