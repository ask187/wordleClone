import WordleRow from './WordleRow';
import React, { useState } from 'react';
export default function Wordle() {
    const [wordOfDay, setWordOfDay] = useState('Hello')
    return <div className='wordle'>
        <WordleRow />
        {/* <WordleRow /> */}
        {/* <WordleRow /> */}
        {/* <WordleRow /> */}
        {/* <WordleRow /> */}
        <div className='submit-btn'>
        <button>Submit</button>

        </div>
    </div>;
}

