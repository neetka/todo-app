import { useState } from "react";
import axios from "axios"; // Import Axios

export function CreateTodo() {
  // React State for Title and Description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");



  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        id="title"
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <input
        style={{ padding: 10, margin: 10 }}
        id="desc"
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <button
        style={{ padding: 10, margin: 10 }}
        onClick={()=>{
            axios.post("http://localhost:4000/todo",{
                title:title,
                description:description

            }).then(()=>{
                alert("Todo added")
            })
        }} 
      >
        Add a todo
      </button>
    </div>
  );
}
