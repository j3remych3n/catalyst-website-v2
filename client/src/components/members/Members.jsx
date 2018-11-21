import React, { Component } from 'react';
import MemberCard from './MemberCard';
import MemberChoice from './MemberChoice';

const members = [
  {
    name: 'Ben Hubsch1',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2022',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 1',
  },
  {
    name: 'Ben Hubsch2',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2022',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 2',
  },
  {
    name: 'Ben Hubsch3',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2022',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 3',
  },
  {
    name: 'Ben Hubsch4',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2021',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 4',
  },
  {
    name: 'Ben Hubsch5',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2021',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 5',
  },
  {
    name: 'Ben Hubsch6',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2021',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 6',
  },
  {
    name: 'Ben Hubsch7',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2021',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 7',
  },
  {
    name: 'Ben Hubsch8',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2020',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 8',
  },
  {
    name: 'Ben Hubsch9',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2020',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 9',
  },
  {
    name: 'Ben Hubsch10',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2020',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 10',
  },
  {
    name: 'Ben Hubsch11',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2020',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 11',
  },
  {
    name: 'Ben Hubsch12',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2019',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 12',
  },
  {
    name: 'Ben Hubsch13',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2019',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 13',
  },
  {
    name: 'Ben Hubsch14',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2019',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 14',
  },
  {
    name: 'Ben Hubsch15',
    imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png',
    year: '2019',
    giturl: 'https://github.com',
    linkedinurl: 'https://www.linkedin.com',
    personalurl: 'https://www.google.com',
    bio: 'This is my bio 15',
  },
];

export default class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        name: 'Dummy DumDum',
        imageSrc:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg',
        year: '2019',
        giturl: 'https://github.com',
        linkedinurl: 'https://www.linkedin.com',
        personalurl: 'https://www.google.com',
        bio: 'This is my bio dummy',
      },
    };
  }

  render() {
    const { selected } = this.state;
    return (
      <>
        <MemberChoice members={members} onSelect={chosen => this.setState({ selected: chosen })} />
        <MemberCard selected={selected} />
      </>
    );
  }
}

Members.propTypes = {};
