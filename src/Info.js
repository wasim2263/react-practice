import {useEffect, useState} from 'react'
import axios from 'axios'

const Info = ({info}) => {
    const [newInfo, setNewInfo] = useState(
        'a new note...'
    )
    const addInfo = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
    }
    const handleInfoChange = (event) => {
        console.log(event.target.value)
        setNewInfo(event.target.value)
    }
    return(
    <div>
      <p> Info: {info} </p>
        <form onSubmit={addInfo}>
            <input value={newInfo} onChange={handleInfoChange}/>
            <button type="submit">save</button>
        </form>
    </div>);
}
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
const Notes = () =>{
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const hook = () => {
        console.log('effect')

        const eventHandler = response => {
            console.log('promise fulfilled')
            setNotes(response.data)
        }

        const promise = axios.get('http://localhost:3001/notes')
        promise.then(eventHandler)
    }
    useEffect(hook, [])
    console.log('render', notes.length, 'notes')

}
export  {Info, Hello, Notes};