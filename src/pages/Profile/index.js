import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../services/axios'
import { 
  Container,
  Main,
  LeftSide,
  RightSide,
  RepoIcon ,
  Tab,
  Repos,
  CalendarHeading
} from './styled'
import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import Loading from '../../components/Loading'
import RandomCalendar from '../../components/RandomCalendar'

export default function Profile() {
  const [data,setData] = useState({})
  const [isLoading,setIsLoading] = useState(false)
  const { username='David73-Coloa' } = useParams() 

  useEffect(() => {
    async function setDataThroughUsername() {
      try {
        setIsLoading(true)
        const user = await axios.get(`/users/${username}`)
        const repos = await axios.get(`/users/${username}/repos`)
        document.title = user.data.login || username
        setData({
          user:user.data,
          repositories:repos.data.sort(() => 0.5 - Math.random()).slice(0, 6)
        })

        setIsLoading(false)
      }catch (e) {
        if (e.response.status === 404) {
          setData({ error: 'User not found!' })
          return setIsLoading(false)
        }

      }

    }
    setDataThroughUsername()

    return () => document.title = 'Github-clone'
  },[username])

  if (data?.error) return <h1>{data.error}</h1> 
    if (!data.user || !data.repositories) return <Loading isLoading={isLoading}/>

    const TabContent = () => {
      return (
        <div className="content">
          <RepoIcon/> 
          <span className="label">Repositories</span>
          <span className="number">{data.user?.public_repos}</span>
        </div>
      )
    }


    return (
      <Container>
        <Tab className="desktop">
          <div className="wrapper">
            <TabContent />
            <span className="line"/>
          </div>
        </Tab>
        <Main> 
          <LeftSide>
            <ProfileData
              username={data.user.login}
              img={data.user.avatar_url}
              name={data.user.name}
              followers={data.user.followers}
              following={data.user.following}
              blog={data.user.blog}
              company={data.user.company}
              email={data.user.email}
              location={data.user.location}
            />
          </LeftSide>
          <RightSide>
            <Tab className="mobile">
              <TabContent/> 
              <span className="line"/>
            </Tab>
            <Repos>
              <h2>Random repos</h2>
              <div>
                {data.repositories.map(repositorie => (
                  <RepoCard
                    key={repositorie.name}

                    username={repositorie.owner.login}
                    forks={repositorie.forks}
                    stars={repositorie.stargazers_count}
                    reponame={repositorie.name}
                    language={repositorie.language}
                    description={repositorie.description}
                  />
                ))}


              </div>
            </Repos>
            <CalendarHeading>
              Random calendar (do not represent actual data)
            </CalendarHeading> 
          <RandomCalendar/>
          </RightSide> 

        </Main>



        
      </Container>
    )
}
