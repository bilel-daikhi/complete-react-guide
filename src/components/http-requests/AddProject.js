import React, { useRef } from 'react';
 

function AddProject(props) {
  const titleRef = useRef('');
  const imageRef=useRef('');
  const descriptionRef = useRef('');
  const dateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here... 
    const project = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      descrition: descriptionRef.current.value,
      date: dateRef.current.value,
    };
    

  props.onAddProject(project);
  }

  return (
    <form onSubmit={submitHandler}>
 <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Project name" ref={titleRef}/>
    </div>
    <div className="col">
      <input type="date" className="form-control" placeholder="Date" ref={dateRef}/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputLink">Image Link</label>
    <input type="text" className="form-control" id="inputLink"  placeholder="Image link" ref={imageRef}/>
  </div>
  
      <div className="form-group">
        <label htmlFor='opening-text'>Description</label>
        <textarea rows='5' className='form-control' id='opening-text' ref={descriptionRef}></textarea>
      </div>
     
      <button className='btn btn-primary btn-lg btn-block'>Add Project</button>
    </form>
  );
}

export default AddProject;