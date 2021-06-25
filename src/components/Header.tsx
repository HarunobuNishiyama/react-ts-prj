import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  pageName: string;
}

const Header1 = styled.h1`
  flex: 1;
  height: 80px;
  justify-content: center;
  padding: 20px;
  background: #e6c0c0;
  color: #0068b7;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
`;

export class Header extends React.Component<IProps> {
  render() {
    return (
      <Header1>We are in {this.props.pageName}.</Header1>
    );
  }
}
