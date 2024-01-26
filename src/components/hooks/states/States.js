 
import NewForm from "./NewForm";

 

const States=(props)=>{ 
    const saveDataHandler = (data)=>{
        console.log(data);
        
          }
    return (
    <>
    <div className="center"><p >Project Form</p></div>
    <NewForm   onSaveData={saveDataHandler} /> 
    </>
    );
}
export default States;