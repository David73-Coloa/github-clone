import React,{ useState,useContext } from 'react'
import { Navbar,Form } from './styled'
import { GithubIcon } from './styled'
import { ThemeContext } from '../../contexts/ThemeStore'
export default function Header() {
  const { themeName,switchTheme } = useContext(ThemeContext)
  const [search,setSearch] = useState('')
  const formSubmit = e => {
    e.preventDefault()
    window.location.href = '/' + search.toLowerCase().trim()
  }
  return (
    <Navbar>
      <Form onSubmit={formSubmit}> 
        <GithubIcon onClick={() => switchTheme(themeName === 'dark' ? 'light' : 'dark')} /> 
        <input
          value={search}
          placeholder='Enter username or repo...'
          onChange={e => setSearch(e.target.value)}
        /> 
      </Form>
    </Navbar>
  )
}
