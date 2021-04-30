import styled from 'styled-components'
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import iconCss from '../../components/icon/css'

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:15px;
`

export const LinkButton = styled.a`
  background:var(--button);
  border-radius:36px;
  height:35px;
  width:160px;
  margin-top:25px;
  div {
    display:flex;
    align-items:center;
    justify-content:space-evenly;
  
    > span {
      color:var(--primary);
      
    }

    > svg,span {
      margin-top:8px;
    }


  }
  
`

export const TopContent = styled.div`
  display:flex;
  align-items:center;
  > span {
    margin:5px;
    
  }
`

export const BookIcon = styled(RiBookMarkLine)`
  margin-right:8px;
  ${iconCss}
`
export const StarIcon = styled(RiStarLine)``
export const ForkIcon = styled(AiOutlineFork)``

export const Main = styled.div`
  > p {
    margin-top:8px;
  }

  > ul {
    display:flex;
    margin-top:12px;
    > li {
      display:flex;
      align-items:center;
      margin-right:12px;
      > b {
        margin:0px 8px 0px 8px;
      }

      > span {
        color:var(--gray);
      }

    }


  }
`

export const GithubIcon = styled(FaGithub)`
  fill:var(--primary);

`
