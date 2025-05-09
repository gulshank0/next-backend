export function Signup() {
  return (
    <div className="h-screen flex justify-center items-center border rounded-2xl">
<div className="flex flex-col justify-center gap-8.5 border rounded-2xl h-120 w-100 p-8 m-5 ">   
  <p className="text-4xl flex justify-center pb-15 font-bold">Signup Card</p>
      <input placeholder="Enter your username" type="username" className="border p-2 rounded" />
      <input placeholder="Enter your password" type="password" className="border p-2 rounded" />
      <button className="bg-blue-500 text-white p-2 rounded" >Submit</button>
    </div>
    </div>
  );
}
