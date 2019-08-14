import React from 'react';
import Dropdown from './Dropdown';

export default class SortDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: [
        {
            id: 0,
            title: 'Date',
            selected: false,
            key: 'sortBy'
        },
        {
          id: 1,
          title: 'Amount',
          selected: false,
          key: 'sortBy'
        },
      ]
    };
    this.toggleSelected = this.toggleSelected.bind(this);
  };

  toggleSelected(id, key){
    let temp = this.state[key]
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
    if (this.state[key][id].title === "Date") {
        this.props.dispatch({ type: 'SORT_BY_DATE' });
    } else if (this.state[key][id].title === "Amount") {
        this.props.dispatch({ type: 'SORT_BY_AMOUNT' });
    }
  }

  render() {
    return (
      <Dropdown
        title="Order By"
        list={this.state.sortBy}
        toggleItem={this.toggleSelected}
      />
    )
  };
}