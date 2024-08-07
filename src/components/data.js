import ky from "ky";

async function getData(data) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return new Promise(async (resolve, reject) => {
    console.log("Making API call with data:", data);
    try {
      const response = await ky.post("https://flaskdiabeticml.onrender.com/predict", {
        body: formData,
      });
      console.log("API response:", response);
      if (!response.ok) {
        console.log("Response not OK, status text:", response.statusText);
        reject(response.statusText);
      } else {
        const text = await response.text();
        console.log("Response text:", text);
        resolve(text);
      }
    } catch (error) {
      console.log("Error in API call:", error);
      reject(error);
    }
  });
}

export default getData