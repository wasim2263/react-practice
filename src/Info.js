const Info = (props) => (
    <div>
      <p> Info: {props.info} </p>
    </div>
)
const Hello = (props) => {
  return (
      <div>
        <p>Hello {props.name} </p>
      </div>
  )
}
export  {Info, Hello};