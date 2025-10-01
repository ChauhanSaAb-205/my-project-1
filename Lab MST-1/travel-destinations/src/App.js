import React,{useState} from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function App(){
  const[id,setid]=useState("");
  const[placeName,setplaceName]=useState("");
  const[countryName,setcountryName]=useState("");
  const[destinations,setdestinations]=useState([]);
  const handleAdd=()=>{
    if(!id||!placeName||!countryName){
      alert("please fill all fields!");
      return;
    }
    const newDestinations={id,placeName,countryName};
    setdestinations([...destinations,newDestinations]);
    setid("");
    setplaceName("");
    setcountryName("");
  };
  const handleDelete=(id)=>{
    setdestinations(destinations.filter((dest)=>dest.id!==id));
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Travel Destinations</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder=""
          value={id}
          onChange={(e) => setid(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Place Name"
          value={placeName}
          onChange={(e) => setplaceName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Country"
          value={countryName}
          onChange={(e) => setcountryName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAdd}>Add Destination</button>
      </div>

      <ul>
        {destinations.map((dest) => (
          <li key={dest.id}>
            <b>{dest.placeName}</b> ({dest.country})  
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(dest.id)}
            >
               Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;