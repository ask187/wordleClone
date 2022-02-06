import React,{useState} from 'react';
import Box from './Box'

export default function WordleRow() {
    const [inputword, setInputword] = useState('');
  return (
  <div className='wordleRow'>
{[1,2,3,4,5].map(val=><Box id={val}/>)}
  </div>);
}
