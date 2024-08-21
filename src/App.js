import {useState} from 'react';

 function FormFeild({lableName= "Name", placeHol="Name" , req = "Name" , type = "text"}){
  const [val, setVal] = useState(" ");
   function updateVal(value){
    setVal(()=>value);
   }

  return(
    <div>
       <label>{lableName}</label>
      <input type={type} placeholder={"Enter your "+ placeHol} value={val} onChange={(e)=>updateVal(e.target.value)} />
      {val === "" && <div>{req} is Required</div>}
    </div>
  )
}

 function SelectionFeild( {lableName="Name", options=[]}){
  return(
    <div className="selectionFeild">
      <label for="cars">{lableName}:</label>
       <select id="selection">
            {options.map((item)=> <option key={item} value={item}>{item}</option>) }
       </select>
    </div>
  )
}

export default function App(){
  return(
    <div>
      <h1>Employee</h1>
         <FormFeild lableName="First Name" placeHol = "First Name" req = "First Name" />
         <FormFeild lableName="Middle Name" placeHol = "Middle Name" req = "Middle Name" />
         <FormFeild lableName="Last Name" placeHol = "Last Name" req = "Last Name" />
         <FormFeild lableName="Birth Date" placeHol = "DOB" req = "Date" type="date" />
         <FormFeild lableName="E-Mail" placeHol = "email" req = "Email" />
         <FormFeild lableName="Phone Number" placeHol = "phone number" req = "Phone Number" />
         <SelectionFeild lableName="Select Gender" options={["Selct","Male","Femal","Others"]}/>
         <FormFeild lableName="Start Time" placeHol = '' req = "Start time" type="time" />
         <FormFeild lableName="End Time" placeHol = '' req = "End time" type="time" />
         <FormFeild lableName="Job Position" placeHol = 'job position' req = "Job Position"  />
         <SelectionFeild lableName="Select Teams" options={["A","B","C"]}/>
         <SelectionFeild lableName="Designations" options={["Select","Student","Staff","Administrator", "Office-Worker"]}/>
         <FormFeild lableName="Billable Hours" placeHol = 'billable hours' req = "Billable Hours"  />
         <button>submit</button>
    </div>
  )
}