import React,{ useEffect,useState } from 'react'
import {
  Container,
  LinkButton,
  TopContent,
  StarIcon,
  ForkIcon,
  BookIcon,
  Main,
  GithubIcon
} from './styled'
import { useParams } from 'react-router-dom'
import axios from '../../services/axios'
import Loading from '../../components/Loading'
import { Link } from 'react-router-dom'

export default function App() {
  const { username,reponame } = useParams()
  const [data,setData] = useState({error:''})
  useEffect(() => {
    async function getDataByUsernameAndRepoName() {
      try { 
        const response = await axios.get(`/repos/${username}/${reponame}`)
        setData({repo:response.data})
      }catch (e) {
        setData({error:'Not found'})
      } 
    }

    getDataByUsernameAndRepoName()
    return () => {}
  },[username,reponame])

  if (data.error) return <h1>Not found!</h1>
  if (!data?.repo) return <Loading isLoading /> 
  return (
    <Container>
      <TopContent>
        <BookIcon/> 
        <Link className={'username'} to={`/${username}`}>
          {username}
        </Link>
        <span>/</span> 
        <Link className={'repositorie'} to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </TopContent>
      <Main>
        <p>{data.repo.description}</p> 
        <ul>
          <li>
            <StarIcon/> 
            <b>{data.repo.stargazers_count}</b>
            <span>stars</span> 
          </li>
          <li>
            <ForkIcon/>
            <b>{data.repo.forks}</b>
            <span>forks</span>
          </li>
        </ul>
      </Main>
      <LinkButton href={`${data.repo.html_url}`}>
        <div>
          <GithubIcon/> 
          <span> View on github</span>
        </div>
        
      </LinkButton>
    </Container>
  )
}
