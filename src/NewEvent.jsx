import { useState } from "react"
import "./App.css";

function NewEvent() {
    const[name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [event,setEvent] = useState("")
    const [students,setStudents] = useState([])
    const [editingIndex, setEditingIndex] = useState(null); // track student being edited
      const handleSubmit = (e) => {
        e.preventDefault();
        if (name === ""  || email === ""   || event ==="" ){
        
          alert ("please fill all fields");
            return;
        }
        const newStudent = { name , email , event };
        if (editingIndex !== null) {
      // Update existing student
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = newStudent;
      setStudents(updatedStudents);
      setEditingIndex(null); // Exit edit mode
    } else {
      // Add new student
        setStudents ([...students , newStudent]);
    }
        // clear form
        setName("");
        setEmail("")
        setEvent("")
    }
         
        const deleteStudent = (index) => {
            const updatedList = students.filter((_, i) =>
                i !== index);
            setStudents(updatedList);

            // Cancel edit mode if deleting the student being edited
    if (index === editingIndex) {
      setEditingIndex(null);
      setName("");
      setEmail("");
      setEvent("");
    }
        };

        const editStudent = (index) => {
    // Load student data into form
    const student = students[index];
    setName(student.name);
    setEmail(student.email);
    setEvent(student.event);
    setEditingIndex(index); // Enter edit mode
  };

        
        
      
    
    return(
        <div className="container">
            <h2>COLLEGE EVENT REGISTRATION</h2>
            <br />
            <br />
            <form onSubmit={handleSubmit}
            className="form">
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
           <select value={event} onChange={(e)  => setEvent(e.target.value)} >
            <option value="" >Select Event </option>
            <option>Coding Competion</option>
            <option>Seminar</option>
            <option>Cultural Fest</option>
            </select>
            <button type="submit">{editingIndex !== null ? "Update" : "Register"}</button>
            {editingIndex !== null && (
          <button
            type="button"
            onClick={() => {
              // Cancel edit mode
              setEditingIndex(null);
              setName("");
              setEmail("");
              setEvent("");
            }}
            style={{ 
              marginLeft: "10px",
              background: "gray"
            }}
          >
            Cancel
          </button>
        )}
            
            
            </form>

            <h3>Registered Students</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Event</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {students.length === 0 ?  (
                            <tr>
                                <td colSpan={4}>No registrations yet</td>
                            </tr>
                        ) :(
                            students.map((s,index) => (
                                <tr key={index}>
                                    <td>{s.name}</td>
                                    <td>{s.email}</td>
                                    <td>{s.event}</td>
                                    <td><button
                    className="edit-btn"
                    onClick={() => editStudent(index)}
                    style={{
                      background: "green",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      marginRight: "5px",
                      cursor: "pointer"
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(index)}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer"
                    }}
                  >
                    Delete
                  </button>
                  </td>
                  </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    )
}
export default NewEvent
           
         
                                   
