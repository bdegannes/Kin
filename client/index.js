import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
// import Link from 'react-router/lib/Link'
import browserHistory from 'react-router/lib/browserHistory'
import IndexRoute from 'react-router/lib/IndexRoute'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers/combine_reducer_index'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import App from './components/App'
import injectTapEventPlugin from 'react-tap-event-plugin'

const loggerMiddleware = createLogger()
const store = applyMiddleware(promiseMiddleware, loggerMiddleware)(createStore)(rootReducer)

injectTapEventPlugin()

const Kin = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={LoginPage} />
        <Route path='personal' >
          <IndexRoute component={SignUp} />
        </Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<Kin />, document.querySelector('.main-container'))
