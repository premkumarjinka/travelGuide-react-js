import './index.css'

const AppItem = props => {
  const {details} = props
  const {name, description, imageUrl} = details

  return (
    <li className="list-container">
      <img className="img" src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}
export default AppItem
