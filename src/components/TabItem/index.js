import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {displayText} = tabDetails
  return (
    <button type="button" className="tab-button">
      {displayText}
    </button>
  )
}
export default TabItem
