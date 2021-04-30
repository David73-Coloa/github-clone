import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Navbar = styled.nav`
  background:var(--header);
  padding:10px;
`
export const Form = styled.form`
  display:flex;
  height:48px;
  padding-left: 16px;
  width:100%;
  align-items:center;

  input {
    border-radius:5px;
    background:var(--search);
    margin-left:1em;
    height:2.9em;
    width:100%;
    padding: 7px 12px;

    :focus {
      width:318px;
    }
    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`

export const GithubIcon = styled(FaGithub)`
  font-size:45px;
  fill:#fff;
  flex-shrink:0;

`
