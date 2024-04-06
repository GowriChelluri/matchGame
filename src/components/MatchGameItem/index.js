import './index.css'

const MatchGameItem = props => {
  const {matchGameDetails, getImageUrl} = props
  const {imageUrl, id, displayText} = matchGameDetails
  const onClickImage = () => {
    getImageUrl(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickImage} className="image-btn">
        <img src={imageUrl} alt={displayText} className="image" />
      </button>
    </li>
  )
}
export default MatchGameItem
