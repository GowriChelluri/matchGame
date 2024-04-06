import './index.css'

const TabItem = props => {
  const {tabDetails, clickTab} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    clickTab(tabId)
  }
  return (
    <button type="button" className="tab-button" onClick={onClickTabItem}>
      {displayText}
    </button>
  )
}
export default TabItem
