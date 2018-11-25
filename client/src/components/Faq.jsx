import React, { Component } from 'react';
import axios from 'axios';
import uuidv1 from 'uuid/v1';
import styled from 'styled-components';
import colors from '../colors';

const QTag = styled.div`
  color: ${colors.pink};
  display: inline;
`;

const ATag = styled.div`
  color: ${colors.yellow};
  display: inline;
`;

const QorA = styled.div`
  color: ${colors.white};
  display: inline;
`;

const FaqContainer = styled.div`
  min-height: 100%;
  min-width: 100%;
  adding-left: 2.5%;
  margin-right: 5%;
  margin: 0;
  font-size: ${({ device }) => (device === 'desktop' ? '19pt' : '12pt')} !important;
  padding-top: 5%;
  font-family: GlacialIndifference;
`;

export default class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faq: [],
    };

    axios
      .get('/api/faq')
      .then(response => this.setState({ faq: response.data.questions }))
      .catch(err => console.err(err));
  }

  render() {
    const { faq } = this.state;

    return (
      <FaqContainer>
        {faq.map(pair => (
          <div key={uuidv1()}>
            <div>
              <QTag>{'<q>'}</QTag>
              <QorA>{pair.Key}</QorA>
              <QTag>{'</q>'}</QTag>
            </div>
            <div>
              <ATag>{'<a>'}</ATag>
              <QorA>{pair.Value}</QorA>
              <ATag>{'</a>'}</ATag>
            </div>
            <br />
          </div>
        ))}
      </FaqContainer>
    );
  }
}
