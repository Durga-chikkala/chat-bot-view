import {React,useState} from 'react'
import './FrequentData.css'
import {FcApproval} from 'react-icons/fc'

function FrequentData(props) {
    const [clickButton, setClickButton] = useState(false);
    const questionsList=props.info.map((data,i)=>
    <div className='box'onClick={() => setClickButton(!clickButton)}>
            <li key={i} className="repo-items"><FcApproval/>{data.question}</li>
            <li key={i+1} className={clickButton?"clicked":"not"}>{data.solution}</li>
      </div>
    )
  return (
    <div className='frequent-questions'>
        <h1>Most Frequently Asked Questions</h1>
        {questionsList}
        </div>
  )
}

export default FrequentData