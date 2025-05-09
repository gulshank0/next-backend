import axios from "axios";

async function fetchData() {
  const res = await axios.get(
    "http://localhost:3000/api/user"  ,
  );
  console.log("resposen is" + JSON.stringify(res.data));
  return res.data;
}

export default async function User() {
  const data = await fetchData();
  return (
    <div>
      {data.email}
    
      <br />
      {data.profession}
    </div>
  );
}
