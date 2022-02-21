import React, {Component} from 'react';
import {Item} from '../Item/Item';
import {v4 as uuidv4} from 'uuid';
import './ItemsList.css';

export class ItemsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'items-list'}>
          {this.props.items.map((item) => {
            return (
                <Item
                    className={'item'}
                    key={uuidv4()}
                    item={item}
                    onItemEditClicked={this.props.onItemEditClicked}
                    onItemDeleteClicked={this.props.onItemDeleteClicked}
                />
            );
          })}
        </div>
    );
  }
}
