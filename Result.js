import React  ,{useEffect,useState}  from "react";
import axios from "axios";
import './Result.css'
function Result(){
    const [students, setStudents] = useState([]);
    useEffect(() => {
          
           async function fetchData() {
               try {
                   const response = await axios.get('http://localhost:4500/getusers');
   
                   // const response =await instance({
                   //   method:'get',
                   //   url:"/getUsers/"
                   // })
                   setStudents(response.data);
   
               } catch (err) {
                   console.error(err);
                   
               }
           }
   
           fetchData();
       }, []);


    return(
        <>
<h1><u> Result</u>
    </h1>  
    { 
    students.map((student)=>(
<>
<div className="card">
    <div className="card-content">
    <h2> Question: {student.ques}</h2>
<p>Option: {student.opt}</p>

    </div>


</div>
        

</>
    ))}

        </>
    )
}
export default Result;