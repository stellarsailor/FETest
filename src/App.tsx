import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import { Container } from 'react-grid-system';
import Footer from './components/Footer/index';
import Main from './pages/Main';
import Pricing from './pages/Pricing';
import Payments from './pages/Payments';

function App() {
  return (
    <>
      <Container fluid style={{padding: 0}}>
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/payments" component={Payments} />
          </Switch>
        </Router>
        <Footer />
      </Container>
    </>
  );
}

export default App;
