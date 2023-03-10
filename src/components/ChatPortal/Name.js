import React, { useState } from 'react'
import {Link,  useNavigate } from 'react-router-dom';

export default function Name(props) {
    const [inputValue, setInputValue] = useState('')
    


  return (
    <div>

    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    style={{color:'black'}}

    />
<Link to={`/ChatWindow?name=${inputValue}`}>
  <button>Submit</button>
</Link>


    </div>
  )
  }

