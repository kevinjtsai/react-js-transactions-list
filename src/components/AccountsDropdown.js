import React from 'react';
import Dropdown from './Dropdown';

export default class AccountsDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      accounts: [
        {
            id: 0,
            title: 'Sapphire Reserve',
            selected: false,
            key: 'accounts'
        },
        {
          id: 1,
          title: 'Amazon',
          selected: false,
          key: 'accounts'
        },
        {
          id: 2,
          title: 'Freedom',
          selected: false,
          key: 'accounts'
        },
      ]
    };
    this.toggleSelected = this.toggleSelected.bind(this);
  };

  toggleSelected(id, key){
    console.log("the value of this: " + this);
    let temp = this.state[key]
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  render() {
    return (
      <Dropdown
        title="Accounts"
        list={this.state.accounts}
        toggleItem={this.toggleSelected}
      />
    )
  };
}