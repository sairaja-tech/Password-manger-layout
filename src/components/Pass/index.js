import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PassItem from '../PassItem'

import './index.css'

const initialContactsList = []

class Pass extends Component {
  state = {
    contactsList: initialContactsList,
    name: '',
    password: '',
    searchInput: '',
    showPasswords: false,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeleteUser = id => {
    const {contactsList} = this.state
    const filteredUserData = contactsList.filter(each => each.id !== id)
    this.setState({
      contactsList: filteredUserData,
    })
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, password} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      password,
    }
    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newContact],
      name: '',
      password: '',
    }))
  }

  onToggleCheckbox = () =>
    this.setState(previousState => ({
      showPasswords: !previousState.showPasswords,
    }))

  onChangeMobileNo = event => {
    this.setState({password: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {
      name,
      password,
      contactsList,
      searchInput,
      showPasswords,
    } = this.state
    const filteredPasswordsList = contactsList.filter(passwordsDetails =>
      passwordsDetails.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              className="input"
              onChange={this.onChangeName}
              placeholder="Name"
              value={name}
              type="text"
            />
            <input
              className="input"
              onChange={this.onChangeMobileNo}
              placeholder="Password"
              value={password}
              type="password"
            />
            <button type="submit" className="button">
              Add Contact
            </button>
          </form>
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            placeholder="Search"
          />
          <input
            type="checkbox"
            className="check-box"
            id="showPasswords"
            onChange={this.onToggleCheckbox}
          />
          <p>{contactsList.length}</p>
          {contactsList.length > 0 ? (
            <ul className="contacts-table">
              {filteredPasswordsList.map(eachContact => (
                <PassItem
                  key={eachContact.id}
                  contactDetails={eachContact}
                  onDeleteUser={this.onDeleteUser}
                  showPasswords={showPasswords}
                />
              ))}
            </ul>
          ) : (
            <div>
              <h1>No password</h1>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Pass
