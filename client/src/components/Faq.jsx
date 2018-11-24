import React, { Component } from 'react';
import axios from 'axios';
import uuidv1 from 'uuid/v1';
import styled from 'styled-components';
import colors from '../colors';

const styles = {
  txtStyle: {
    color: colors.white,
    display: 'inline',
  },
  wrapStyle: {
    minHeight: '100%',
    minWidth: '100%',
    addingLeft: '2.5%',
    marginRight: '5%',
    margin: '0',
    fontSize: '19pt',
    paddingTop: '5%',
    fontFamily: 'GlacialIndifference',
  },
};

const QTag = styled.div`
  color: ${colors.pink};
  display: inline;
`;

const ATag = styled.div`
  color: ${colors.yellow};
  display: inline;
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
    const qTagOpen = '<q>';
    const qTagClose = '</q>';
    const aTagOpen = '<a>';
    const aTagClose = '</a>';

    return (
      <div style={styles.wrapStyle} align="left">
        {faq.map(pair => (
          <div key={uuidv1()}>
            <div>
              <QTag>{qTagOpen}</QTag>
              <div style={styles.txtStyle}>{pair.Key}</div>
              <QTag>{qTagClose}</QTag>
            </div>
            <div>
              <ATag>{aTagOpen}</ATag>
              <div style={styles.txtStyle}>{pair.Value}</div>
              <ATag>{aTagClose}</ATag>
            </div>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
