import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BillingRecordsPage from './components/BillingRecordsPage';
import ProfilePage from './components/ProfilePage';
import Signup from './components/Signup';
import Settings from './components/Settings';
import UnitCalculator from './components/UnitCalculator';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/billingRecords" component={BillingRecordsPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/settings" component={Settings} />
          <Route path="/unitCalculator" component={UnitCalculator} /> 
          <Route path="/Payment" component={PaymentPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
