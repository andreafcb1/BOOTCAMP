import "./Title.css"

const Title = (props) => {
  const {data} = props
  return (
    <h1>{data}</h1>
  )
}

export default Title