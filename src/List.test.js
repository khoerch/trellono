import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import renderer from 'react-test-renderer'

describe('List Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const card = [{
      title: 'test card',
      content: 'lorem ipsum'
    }]
    const tree = renderer
      .create(<List key={1} title="Title List" cards={card} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})