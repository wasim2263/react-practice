const Info = (props) => (
    <div>
      <p> Info: {props.info} </p>
    </div>
)
const Hello = (props) => {
    const currentTime = ()=>{
        return new Date().getFullYear();
    }
  return (
      <div>
        <p>Hello {props.name} {currentTime()}</p>
      </div>
  )
}
export  {Info, Hello};