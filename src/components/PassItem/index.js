import './index.css'

const PassItem = props => {
  const {contactDetails, onDeleteUser, showPasswords} = props
  const {name, password, id} = contactDetails
  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <li className="user-card-container">
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        {showPasswords ? (
          <p className="password">{password}</p>
        ) : (
          <img
            className="hidden-password"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default PassItem
