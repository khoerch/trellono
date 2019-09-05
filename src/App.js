import React from 'react'
import List from './List'
import './App.css'

class App extends React.Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  }

  render() {
    const { store } = this.props

    const listArray = store.lists.map(list => {
      return (
        <List 
          key={list.id}
          header={list.header}
          cards={list.cardIds.map(id => store.allCards[id])}
        />
      )
    })
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trellono!</h1>
        </header>
        <div className="App-list">
          {listArray}
        </div>
      </main>
    );
  }
}

export default App;
