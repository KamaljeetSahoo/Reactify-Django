import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout'
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from './routes'
import {connect} from 'react-redux'
import * as actions from './store/actions/auth'

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout auth={mapStateToProps}>
          <BaseRouter/>
        </CustomLayout>
      </Router>
    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
