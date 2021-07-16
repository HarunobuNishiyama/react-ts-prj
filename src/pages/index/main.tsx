import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Header } from '../../components/Header';

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <Div>
        <Header pageName="index" />
      </Div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
