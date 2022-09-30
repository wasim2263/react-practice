const App = (props) => (
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
export  {App, Hello};