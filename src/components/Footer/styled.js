import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Container = styled.footer`
  display:flex;
  align-items:center;
  border-top:1px solid var(--gray);
  justify-content:center;
  margin-left:25px;
  position:relative;
  bottom:5px; 
  width:440px;
  @media (min-width:718px) {
    width:95%;

  }
`

export const GithubIcon = styled(FaGithub)`
  fill:var(--icon);
  flex-shrink:0;
  font-size:22px; 
  opacity:0.5;
  margin-top:10px;
`
