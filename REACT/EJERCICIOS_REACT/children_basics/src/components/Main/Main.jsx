import "./Main.css"



const Main = (props) => {
  const {children, children1} = props
  return (
    <main>{children}{children1}</main>
  )
}

export default Main