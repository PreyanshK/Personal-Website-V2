import React from 'react'
import styled from 'styled-components'
import { 
    GithubOutlined,
    LinkedinFilled,
    InstagramOutlined,
    MailOutlined
} from '@ant-design/icons'
import { Button } from 'antd'
import { icons } from 'antd/lib/image/PreviewGroup'

const ContactIcons = () => {

    const iconsList = [
        {
          icon: <GithubOutlined />,
          url: 'https://github.com/PreyanshK'
        },
        {
          icon: <LinkedinFilled />,
          url: 'https://www.linkedin.com/in/preyansh-kachhia-29b0a0194'
        },
        {
          icon: <InstagramOutlined />,
          url: 'https://www.instagram.com/preyansh.k/?hl=en'
        },
        {
          icon: <MailOutlined />,
          url: 'mailto:pkachhia@uwaterloo.ca'
        },
    ]
    return (
        <IconsContainer>
            {iconsList.map( icon => {
                return(
                    <ButtonWrapper>
                        <Button icon={icon.icon} size={'large'} href={icon.url}/>
                    </ButtonWrapper>
                )
            })}
        </IconsContainer>
    )
}

export default ContactIcons

const IconsContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* background-color: lightcoral; */
`

const ButtonWrapper = styled.div`
    padding: 15px;
    padding-left: 0;
`