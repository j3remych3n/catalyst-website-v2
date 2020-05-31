import React from 'react';
import Responsive from 'react-responsive';
import Home from './components/Home';
import './css/FullpageOverrides.css';
import './css/DotOverrides.css';

const Desktop = props => <Responsive {...props} minWidth={1024} />;
const Mobile = props => <Responsive {...props} maxWidth={1023} />;

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
