import React from 'react'
import { 
  Container,
  TopSide,
  BookIcon,
  BotSide,
  ForkIcon,
  StarIcon
} from './styled'
import { Link } from 'react-router-dom'
export default function RepoCard({ reponame,language,description,stars,forks,username }) {
  const languageClass = language ? language.replace(' ','').toLowerCase() : 'other';
  
  return (
    <Container>
      <TopSide>
        <header>
          <BookIcon/>
          <Link to={`/${username}/${reponame}`}>{reponame}</Link> 
        </header>
        <p>{description}</p>
      </TopSide>
      <BotSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`}/>
            <span>{language}</span> 
          </li>
          <li>
            <StarIcon/>
            <span>{stars}</span> 
          </li>
          <li> 
            <ForkIcon/>
            <span>{forks}</span> 
          </li> 
        </ul>
      </BotSide>
    </Container>
  )
}

