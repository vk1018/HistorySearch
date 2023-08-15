import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onRemoveHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item-con1">
      <div className="history-item-con2">
        <p className="time">{timeAccessed}</p>

        <div className="history-item-con3">
          <img
            src={logoUrl}
            alt="domain logo"
            className="history-domain-logo"
          />
          <div className="con4">
            <p className="title">{title}</p>
            <p className="history-domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="history-del-btn"
        type="button"
        onClick={onRemoveHistory}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default HistoryItem
