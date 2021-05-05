import React from 'react'
import styled from 'styled-components'
import ProfilePic from '../images/Profile_Pic.jpg'

const ProfileImg = () => {
    return (
        <div>
            <Image src={ProfilePic}></Image>
        </div>
    )
}

export default ProfileImg

const Image = styled.img `
    width: 250px;
    margin: 20px;
    box-shadow: 0 10px 10px -2px rgba(0,0,0,.2);
`