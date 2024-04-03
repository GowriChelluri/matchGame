import './index.css'

const MatchGameItem = props => {
  const {matchGameDetails} = props
  const {imageUrl} = matchGameDetails
  return (
    <li>
      <img src={imageUrl} alt="itemImage" className="image" />
    </li>
  )
}
export default MatchGameItem
