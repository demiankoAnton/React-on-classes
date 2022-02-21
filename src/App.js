import React, {Component} from 'react';
import {ItemsList} from './components/itemsList/ItemsList';
import {Modal} from './components/Modal/Modal';
import {v4 as uuidv4} from 'uuid';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddModalVisible: false,
      editedItem: null,
      items: [{
        id: uuidv4(), category: "smartphone", name: 'iPhone', color: 'Silver',
      }, {
        id: uuidv4(), category: "smartphone", name: 'Samsung', color: 'White',
      }, {
        id: uuidv4(), category: "smartphone", name: 'OnePlus', color: 'Black',
      }, {
        id: uuidv4(), category: "PC", name: 'Lenovo', color: 'White',
      }, {
        id: uuidv4(), category: "notebook", name: 'Asus', color: 'Grey',
      }, {
        id: uuidv4(), category: "notebook", name: 'MacBook', color: 'Pink',
      }, {
        id: uuidv4(), category: "tv", name: 'Sony', color: 'Black',
      }, {
        id: uuidv4(), category: "tv", name: 'LG', color: 'Green',
      }, {
        id: uuidv4(), category: "tv", name: 'Xiaomi', color: 'Black',
      }],
      categories: [
        {
          id: uuidv4(),
          name: 'phone',
        },
        {
          id: uuidv4(),
          name: 'notebook',
        },
        {
          id: uuidv4(),
          name: 'tv',
        },
        {
          id: uuidv4(),
          name: 'PC',
        },
      ],
    }

    this.onAddButtonClicked = () => {
      this.setState({isAddModalVisible: true})
    }

    this.onItemDeleteClicked = (id) => {
      this.setState({
        items: this.state.items.filter(item => item.id !== id)
      });
    }

    this.onItemEditClicked = (id) => {
      const editedItem = this.state.items.find((item) => item.id === id);

      this.setState({
        isAddModalVisible: true,
        editedItemId: id,
        editedItem: editedItem,
      })
    }

    this.onModalAddClicked = ({name, color, category}) => {
      this.setState({
        isAddModalVisible: false,
        items: [
          ...this.state.items,
          {
            id: uuidv4(),
            category,
            name,
            color,
          }
        ]
      });
    }

    this.onModalEditClicked = (id, {name, color, category}) => {
      const editedItem = this.state.items.find((item) => item.id === id);

      this.setState({
        isAddModalVisible: false,
        editedItem: null,
        items: this.state.items.map((item) => {
          if (item.id === id) {
            return {
              id,
              name,
              color,
              category
            }
          }

          return item
        })
      })
    }

    this.onModalCloseClicked = () => {
      this.setState({
        isAddModalVisible: false,
        editedItem: null,
      })
    }

    this.onFilterCategoryChange = (categoryName) => {
      console.log(categoryName);
      this.setState({
        items: this.state.items.filter((item) => {
          console.log(item.category === categoryName);
          return item.category === categoryName;
        })
      });
    }
  }

  render() {
    return (
        <div className="App">
          <div className={'main-container'}>
            <div className={'left-col col'}>
              <button
                  className={'add-button button'}
                  onClick={this.onAddButtonClicked}
              >
                Add
              </button>
            </div>
            <div className={'right-col col'}>
              <ItemsList
                  items={this.state.items}
                  onItemDeleteClicked={this.onItemDeleteClicked}
                  onItemEditClicked={this.onItemEditClicked}
              />
            </div>
          </div>

          {this.state.isAddModalVisible ?
              (<Modal
                  item={this.state.editedItem}
                  parentState={this.state}
                  onModalAddClicked={this.onModalAddClicked}
                  onModalEditClicked={this.onModalEditClicked}
                  onModalCloseClicked={this.onModalCloseClicked}
              />) : null
          }
        </div>
    )
  }
}

export default App;
