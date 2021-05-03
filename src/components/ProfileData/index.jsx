import React from 'react'
import { 
  Container,
  Flex,
  Avatar,
  PeopleIcon,
  Row,
  Column,
  BlogIcon,
  CompanyIcon,
  LocationIcon,
  EmailIcon
} from './styled'

const ProfileData = ({ location,email,company,blog,followers,following, name,username,img }) => {
  return (
    <Container>
      <Flex>
        <Avatar src={img} alt={username}/>
        <div>
          <h1>{name}</h1> 
          <h2>{username}</h2>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon/> 
          <strong>{followers}</strong> 
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <strong>{following}</strong>
          <span>following</span>
        </li>  
      </Row>
      <Column>
        {company && (
          <li>
            <CompanyIcon/> 
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon/> 
            <span>{location}</span> 
          </li>

        )}
        {email && (
          <li>
            <EmailIcon/> 
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon/> 
            <span>{blog}</span> 
          </li>
        )}
      </Column> 
    </Container>
  )
}

export default ProfileData
