 

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Card from './Card';
function Events(){
  const initialProjects = [
    {
        id:0,
        name:'SBSA Rent',
        createdBy:'Bilel Daikhi',
        technologies:'React',          
        userEmail:'bilel.daikhi@gmail.com',
        duration:2,
        type:'web',
        image:null,
        description:'Lorem ipsum dolor sit amet. Ut consequatur rerum id illo ratione ut porro tempore. Rem aliquam blanditiis hic magni necessitatibus aut incidunt eaque cum consequatur beatae et consequatur amet ab voluptatem ipsa.',
          
      },
      {
        id:1,
        name:'SBSA Rent',
        createdBy:'Bilel Daikhi',
        technologies:'React',
        userEmail:'bilel.daikhi@gmail.com',
        duration:2,
        type:'desktop',
        image:null,
        description:'Lorem ipsum dolor sit amet. Ut consequatur rerum id illo ratione ut porro tempore. Rem aliquam blanditiis hic magni necessitatibus aut incidunt eaque cum consequatur beatae et consequatur amet ab voluptatem ipsa.',
          
      },
]

  const [projects,setProjects]=useState(initialProjects);

  const addNewProject= ()=>{
   let lastId= projects[projects.length-1].id;
   setProjects( prevState =>{
    return [...prevState,{
      id:lastId+1,
      name:'SBSA New Project',
      createdBy:'Bilel Daikhi',
      technologies:'React',          
      userEmail:'bilel.daikhi@gmail.com',
      duration:2,
      type:'web',
      image:null,
      description:'Lorem ipsum dolor sit amet. Ut consequatur rerum id illo ratione ut porro tempore. Rem aliquam blanditiis hic magni necessitatibus aut incidunt eaque cum consequatur beatae et consequatur amet ab voluptatem ipsa.',
  
    }
  ]
  })
     
};
  
    const [name,setName] = useState('Bilel Daikhi');
  const handleFilterProjects= (type)=>{

    let filteredProjects=[];
    if(type==='web')
    filteredProjects=[...initialProjects].filter(x => x.type === 'web')
  else if(type==='desktop')
  filteredProjects=[...initialProjects].filter(x => x.type === 'desktop')
else
filteredProjects=[...initialProjects];
   
    setProjects((prevState)=>{
      return [...filteredProjects]
    })
 
  }

    const doSomething=()=>{
        setName('SBSA Solutions');
        console.log('button clicked!')
    }
    const reset=()=>{
        setName('Bilel Daikhi');
    
    }

    return (<React.Fragment>
    <p>Button use onclick event listner with arrow function</p>
    <button className='btn btn-primary'  onClick={()=>doSomething()}>Trigger event</button>
    <p>Button use onclick event listner with function name as a reference</p>
    <button className='btn btn-danger'  onClick={reset}>Reset</button>
    <div className="form-group">
    <label htmlFor="name">Name</label>
    <h1 id='name'> {name}</h1>
  </div>
 

  <div className="container">

 
  <div className="row mb-auto p-5">
    <div className="col-lg-12"> 
        <button className="btn btn-primary float-right" onClick={addNewProject}>New Project</button>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
    <label className="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autoComplete="off" onClick={()=>{handleFilterProjects('all')}}/> All
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option1" autoComplete="off" onClick={()=>{handleFilterProjects('web')}}/> Web
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option2" autoComplete="off" onClick={()=>{handleFilterProjects('desktop')}}/> Desktop
  </label>
  
</div>
    </div>
  
</div>

<div className="row">
{projects.length ===0 && (<div className="alert alert-warning" role="alert">
  No projects found!
</div>) }
{projects.length > 0 &&  (
  projects.map((item)=>(
    
   <Card key={item.id} project={item}/>
   ))
 )}

 
  </div>

 
<ul className="pagination justify-content-center">
  <li className="page-item">
    <Link className="page-link" to="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
      <span className="sr-only">Previous</span>
    </Link>
  </li>
  <li className="page-item">
    <Link className="page-link" to="#">1</Link>
  </li>
    <li className="page-item">
    <Link className="page-link" to="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
      <span className="sr-only">Next</span>
    </Link>
  </li>
</ul>
</div>

    
     </React.Fragment>);
}
export default Events;