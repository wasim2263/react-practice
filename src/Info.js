import { useState } from 'react'

const Info = (props) => (
    <div>
      <p> Info: {props.info} </p>
    </div>
)
const Hello = (props) => {
    const [ counter, setCounter ] = useState(0)
    setTimeout(
        () => setCounter(counter + 1),
        1000
    )
    const currentTime = ()=>{
        return new Date().getFullYear();
    }

    return (
      <div>
        <p>Hello {props.name} {currentTime()} {counter}</p>
      </div>
  )
}
export  {Info, Hello};