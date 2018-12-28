import React, { Component } from 'react';
import axios from 'axios';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import Delay from 'react-delay';
import Fade from 'react-reveal/Fade';
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
  padding-left: 2.5%;
  margin-right: 5%;
  margin: 0;
  font-size: ${({ device }) => (device === 'desktop' ? '25pt' : '15pt')} !important;
  padding-top: 5%;
  font-family: GlacialIndifference;
`;

class Faq extends Component {
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
    const { device } = this.props;

    return (
      <FaqContainer device={device}>
        {faq.map((pair, index) => (
          <Delay wait={800 * index}>
            <Fade>
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
            </Fade>
          </Delay>
        ))}
      </FaqContainer>
    );
  }
}

Faq.propTypes = {
  device: PropTypes.string.isRequired,
};

export default Faq;
