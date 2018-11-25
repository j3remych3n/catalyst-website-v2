import React from 'react';
import Responsive from 'react-responsive';
import Home from './components/Home';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const App = () => (
  <>
    <Desktop>
      <Home device="desktop" />
    </Desktop>
    <Mobile>
      <Home device="mobile" />
    </Mobile>
  </>
);

export default App;
