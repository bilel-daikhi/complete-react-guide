import { useRef, useState } from "react";  
import MultiSelectDropdown from "./MultiSelectDropdown";
const NewForm= (props)=>{
  // Ref is used similar to useState, ref vives a reference to the dom element, componet that used ref are named uncontroled component
  // uncontrolled state of the component 
  const childRef = useRef();
  const inputNameRef =useRef();
  const handleMultiSelectChange = (selectedOptions) => {
    setInputTechnologies(selectedOptions);
  };
// make this new Form about project details

/*
 name:'SBSA Rent',
            createdBy:'Bilel Daikhi',
            technologies:'Daikhi',          
            userEmail:'bilel.daikhi@gmail.com',
            duration:2,
            difficulty:'10',
            type:'desktop',
            image:null,
            description:'Lorem ipsum dolor sit amet. Ut consequatur rerum id illo ratione ut porro tempore. Rem aliquam blanditiis hic magni necessitatibus aut incidunt eaque cum consequatur beatae et consequatur amet ab voluptatem ipsa.',
        

*/



  //multiple state approach  
  const [inputName,setInputName] = useState('');
  const [inputProjectDate,setInputProjectDate]=useState(new Date());
  const [inputCreatedBy,setInputCreatedBy] = useState('');
  const [inputTechnologies,setInputTechnologies] = useState([]);
  const [inputEmail,setInputEmail] =useState('');
    const [inputDuration,setInputDuration] =useState(0);
    const [inputtype,setInputType] =useState('male');
    const [inputImage, setInputImage] = useState();
    const [inputDescription, setInputDescription] = useState('');
    const [agree, setAgree] = useState(true);
    const [inputDifficulty, setInputDifficulty] = useState(10);
// single state aproach
/* const [userInput,setUserInput] = useState({
 name:'',
        type:'',
        createdBy:'',
        userEmail:'',
        technologies:[],
        duration:0,
        image:null,
        description:'',
       difficulty:10,
 });*/
// single handler aproach
const genericHandleInput = (input,value)=>{
  if(input==='email')
  setInputEmail(value);
else if(input==='duration')
setInputDuration(value);
else if(input==='projectDate')
setInputProjectDate(value);


}




    const handleEmailChange=(event)=>{
       
     // update email props in single state
        /*  setUserInput((prevState)=>{
        return {
          ...prevState,
          email:event.target.value
        }
        })*/
        setInputEmail(event.target.value);
        console.log(event.target.value)
    }
    const handleNameChange=(event)=>{
        setInputName(event.target.value);
        console.log(event.target.value)
    }
    const handleCreatedByChange =(event)=>{
      setInputCreatedBy(event.target.value);
      console.log(event)
  }
    const handleTypeChange=(value)=>{
        setInputType(value);
        console.log(value)
    }
  
    const handleImageChange = (event)=>{
      setInputImage(event.target.files[0])
        console.log(event.target.value)
    }
    const handleDifficultyChange =(event)=>{
      setInputDifficulty(event.target.value);
        console.log(event.target.value)
    }
    const handleDescriptionChange =(event)=>{
      setInputDescription(event.target.value)
        console.log(event.target.value)  
    }


    const handleSubmitForm= (event)=>{

      event.preventDefault();


    
      const formData={
        name:inputNameRef.current.value,
        type:inputtype,
        createdBy:inputCreatedBy,
        userEmail:inputEmail,
        technologies:inputTechnologies,
        duration:inputDuration,
        image:inputImage,
        description:inputDescription,
       difficulty:inputDifficulty,
       projectDate:inputProjectDate
         
      }
      props.onSaveData('data');
      console.log(formData)
    }
    const handleAgreeChange = (event)=>{
      console.log(event)
      setAgree(event.target.checked)
    }
 
    const clearForm =()=>{
      console.log('clear clicked!')
      setInputName('');
      setInputCreatedBy('');
      setInputTechnologies([]);
      setInputDescription('');
      setInputDifficulty('');
      setInputType('desktop');
      setInputDuration(0);
      setInputProjectDate(new Date());
      setAgree(false);
      childRef.current.clearMultiselect()

    }
   const handleLanguage = (langValue) => {
 
      setInputTechnologies(langValue)
  
  }
    return (
        <>

        <form onSubmit={handleSubmitForm}>
        <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">Project</span>
    </div>
    <input type="text" className="form-control" ref={inputNameRef} value={inputName} onChange={handleNameChange} placeholder="Name"/>
    <input type="text" className="form-control" value={inputCreatedBy} onChange={handleCreatedByChange} placeholder="Created By"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Project Date</label>
  <input type="date" className="form-control"  value={inputProjectDate} onChange={(event)=>{genericHandleInput('projectDate',event.target.value)}}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" value={inputEmail} onChange={(event)=>{genericHandleInput('email',event.target.value)}} placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Select Duration</label>
    <select className="form-control" id="exampleFormControlSelect1" value={inputDuration} onChange={(event)=>{genericHandleInput('duration',event.target.value)}} >
      <option>0</option>  
      <option>1</option>
      <option >2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
   
  <fieldset className="form-group row">
    <legend className="col-form-label col-sm-2 float-sm-left pt-0">Type</legend>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="desktop" defaultChecked onClick={()=>handleTypeChange('desktop')}/>
        <label className="form-check-label" htmlFor="gridRadios1">
         Desktop
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="web" onClick={()=>handleTypeChange('web')}/>
        <label className="form-check-label" htmlFor="gridRadios2">
         Web
        </label>
      </div>
     
    </div>
  </fieldset>
  <MultiSelectDropdown ref={childRef}  onSelectLanguage={(value)=>{handleLanguage(value)}}/>
  <div className="custom-file">
  <input type="file" className="custom-file-input" id="customFile" onChange={handleImageChange} />
  <div>{inputImage && `${inputImage.name} - ${inputImage.type}`}</div>
  <label className="custom-file-label" htmlFor="customFile">Choose file</label>
</div>
  <div className="form-group">
    <label htmlFor="formControlRange">Difficulty  </label>
    <input type="range" className="form-control-range" id="formControlRange" value={inputDifficulty} onChange={handleDifficultyChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={inputDescription}  onChange={handleDescriptionChange}></textarea>
  </div> 
  <div className="form-group">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" checked={agree} onChange={handleAgreeChange}/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Do you agree ?
        </label>
      </div>
    </div>
  </div>
  



  <div className="row">
        <div className="col-md-12 bg-light text-right ">
            <button type="button" onClick={clearForm} className="btn btn-primary mr-2">Clear</button>
            <button type="submit" className="btn btn-warning">Save</button>
        </div>
    </div>
</form>
        
        </>
    );
}
export default NewForm;