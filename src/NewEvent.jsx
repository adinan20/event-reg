import { useState } from "react"
import "./App.css";

function NewEvent() {
    const[name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [event,setEvent] = useState("")
    const [students,setStudents] = useState([])
      const handleSubmit = (e) => {
        e.preventDefault();
        if (name === ""  || email === ""   || event ==="" ){
        
          alert ("please fill all fields");
            return;
        }
        const newStudent = { name , email , event };
        setStudents ([...students , newStudent]);
        // clear form
        setName("");
        setEmail("")
        setEvent("")
    }
         
        const deleteStudent = (index) => {
            const updatedList = students.filter((_, i) =>
                i !== index);
            setStudents(updatedList);
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
            <button type="submit">Register</button>
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
                                    <td><button className="delete-btn" onClick={() =>
                                        deleteStudent(index)}>delete</button></td>
                                </tr>
                            ))
                        )}
                    </tbody>
                    </table>
        </div>

    )
}
export default NewEvent