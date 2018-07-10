import React from 'react'
import { MemoryRouter } from 'react-router'
import App from './App'
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

test('Renders homepage', () => {
  // Setup
  const middlewares = [ thunk ]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore({
    authentication: [],
    application: {
      Settings: {
        mobileNavigation: false
      }
    }
  })

  const component = renderer.create(
    <MemoryRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </MemoryRouter>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
