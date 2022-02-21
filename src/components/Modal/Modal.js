import React, {Component, useState} from 'react';

import './Modal.css';

export class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.item?.name || '',
      color: props.item?.color || '',
      category: props.item?.category || '',
    }

    this.onEditButtonClicked = () => {
      this.props.onModalEditClicked(this.props.item.id, this.state)
    }

    this.onAddItemClicked = () => {
      this.props.onModalAddClicked(this.state)
    }

    this.onModalCloseClicked = () => {
      this.props.onModalCloseClicked()
    }
  }

  render() {
    return (
        <div className={'modal-container'}>
          <div className={'modal-inner'}>
            <input
                type="text"
                value={this.state.name}
                placeholder={'Name'}
                onChange={(event) => {this.setState({name: event.target.value})}}
            />
            <input
                type="text"
                value={this.state.color}
                placeholder={'Color'}
                onChange={(event) => {this.setState({color: event.target.value})}}
            />

            <select
                name="category-select"
                onChange={(event) => {this.setState({category: event.target.value})}}
            >
              {this.props.parentState.categories.map((category) => {
                return (<option key={category.id} value={category.name}>{category.name}</option>);
              })}
            </select>

            {this.props.item?.id ?
                (<button onClick={this.onEditButtonClicked}>Edit</button>) :
                (<button onClick={this.onAddItemClicked}>Add</button>)
            }

            <button onClick={this.onModalCloseClicked}>Close</button>
          </div>
        </div>
    );
  }
}
