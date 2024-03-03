import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BASE_URL from '../../config'




export default function Update() {
  const [Display, setDisplay] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/get-data`)
      .then((res) => {
        console.log(res);
        setDisplay(res.data.Display);
      })
      .catch((err) => console.log(err));
  },[]);


  const updateData=()=>{
    axios.put(`https://investor-thoughts.onrender.com/UpdateUsers/${id}`,{Display})
    .then((res) => {
        console.log(res);
        setDisplay(res.data.Display);
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={updateData}>
      <input type="text" value={Display} onChange={(e) => setDisplay(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}
