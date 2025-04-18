import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../images/preyansh-big-sur.jpg';

const ProfileImg = () => {
  return (
    <div>
      <Image src={ProfilePic}></Image>
    </div>
  );
};

export default ProfileImg;

const Image = styled.img`
  width: 250px;
  margin: 20px;
  border-radius: 50%;
`;
