import React, { Component } from 'react';
import MemberCard from './MemberCard';
import MemberChoice from './MemberChoice';

const members = [
  { name: 'Ben Hubsch1', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2022' },
  { name: 'Ben Hubsch2', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2022' },
  { name: 'Ben Hubsch3', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2022' },
  { name: 'Ben Hubsch4', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2021' },
  { name: 'Ben Hubsch5', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2021' },
  { name: 'Ben Hubsch6', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2021' },
  { name: 'Ben Hubsch7', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2021' },
  { name: 'Ben Hubsch8', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2020' },
  { name: 'Ben Hubsch9', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2020' },
  { name: 'Ben Hubsch10', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2020' },
  { name: 'Ben Hubsch11', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2020' },
  { name: 'Ben Hubsch12', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2019' },
  { name: 'Ben Hubsch13', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2019' },
  { name: 'Ben Hubsch14', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2019' },
  { name: 'Ben Hubsch15', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png', year: '2019' },
];

export default class Members extends Component {
  render() {
    return (
      <>
        <MemberChoice members={members} />
        <MemberCard />
      </>
    );
  }
}

Members.propTypes = {};
