/**
 * Dependencies
 */
import React from "react";
import { withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';

import store from './redux/store';
import * as actions from './redux/actions';

/**
 * Stylesheet
 */
import "./scss/App.css";

/**
 * Local components
 */
import Header from './components/layout/Header';
import Footer from './components/_general/Footer';
import TownRoute from "./routes/TownRoute";
import Models from "./models";

window.Models = Models;
window.actions = actions;

store.dispatch(actions.setWorld(Models.generate()));

const mapStateToProps = state => ({
  world: state.world,
});

const App = props => (
  <main className="App">
    <Header />
    <TransitionGroup>
      <CSSTransition
        key={props.location.key}
        classNames="page"
        timeout={{
          enter: 350,
          exit: 175
        }}
      >
        <TownRoute {...props} />
      </CSSTransition>
    </TransitionGroup>
    <Footer />
  </main>
);

// export default withRouter(App);
export default withRouter(connect(mapStateToProps)(App));
