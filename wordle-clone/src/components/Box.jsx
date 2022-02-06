import React,{useState} from 'react';
export default function Box() {
  const [value, setValue] = useState('');
  return <div className='box'>
      <input value={value}maxLength={1}/>
  </div>;
}