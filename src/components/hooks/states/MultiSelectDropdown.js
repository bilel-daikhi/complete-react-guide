import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'react', label: 'React' },
  { value: 'spring-boot', label: 'Spring boot' },
  { value: 'angular', label: 'Angular' },
  { value: 'mysql', label: 'MySQL' },
  { value: 'kafka', label: 'kafka' },
  { value: 'rabbitmq', label: 'Rabbit MQ' },
  { value: 'nodejs', label: 'NodeJs' },
  { value: 'rest', label: 'Rest' },
  { value: 'swagger', label: 'Swagger' },
  { value: 'h2', label: 'H2' },
  { value: 'java', label: 'Java' },
  { value: 'unittest', label: 'Unit Tests' },
 

];

const MultiSelectDropdown = forwardRef((props, ref) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleLangChange  = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    // pass data to parent component using props (lifting the state up to parent component)
    props.onSelectLanguage(selectedOptions);
 
  };
  useImperativeHandle(ref, () => ({
      clearMultiselect(){
        setSelectedOptions([]);
    }
    

  }));
 

  return (
    <div>
      <Select  
        options={options}
        isMulti
        onChange={handleLangChange}
        value={selectedOptions}
      />
    </div>
  );
});

export default MultiSelectDropdown;