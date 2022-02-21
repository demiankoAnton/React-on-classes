import React, {Component} from 'react';

import './Item.css';

export class Item extends Component {
  constructor(props) {
    super(props);

    this.onItemEditClicked = () => {
      this.props.onItemEditClicked(this.props.item.id)
    }

    this.onItemDeleteClicked = () => {
      this.props.onItemDeleteClicked(this.props.item.id)
    }
  }

  render() {
    return (
      <div className={'item'}>
        <span className={'item-name'}>{this.props.item?.name || '-'}</span>
        <span className={'item-color'}>{this.props.item?.color || '-'}</span>
        <span className={'item-category'}>{this.props.item?.category || '-'}</span>

        <div className={'buttons-container'}>
          <button onClick={this.onItemEditClicked}>Edit</button>
          <button onClick={this.onItemDeleteClicked}>Delete</button>
        </div>
      </div>
    )
  }
}
