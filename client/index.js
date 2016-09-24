import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import Link from 'react-router/lib/Link'
import browserHistory from 'react-router/lib/browserHistory'
import IndexRoute from 'react-router/lib/IndexRoute'
import { connect, Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers/combine_reducer_index'
import LoginPage from './components/LoginPage'
import FamilyForm from './components/Forms/FamilyForm'
import Demographics from './components/Forms/DemographicsForm'
import Layout from './components/Layout'
import injectTapEventPlugin from 'react-tap-event-plugin';

const loggerMiddleware = createLogger();
const store = applyMiddleware(promiseMiddleware, loggerMiddleware)(createStore)(rootReducer);

injectTapEventPlugin();

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout} >
        <IndexRoute component={LoginPage}/>
        <Route path="personal" component={FamilyForm} >
          <Route path="personal/demo" component={Demographics} />
        </Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('.main-container'));
