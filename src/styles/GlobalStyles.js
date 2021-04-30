import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    border:none;
    outline:0;
    box-sizing:border-box;
  }

  body {
    background:var(--primary);
    font-family:italic sans-serif;
    font-size:12pt;
    color:var(--text);
    transition:background .2s;
  }

  ul {
    list-style: none;
  }

  input,button {
    color:#fff;
  }

  a {
    color:var(--link);
    text-decoration:none;
  }
  

  :root {
    ${(props) => {
      const theme = props.theme
      let append = ''
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`
      });
      return append
    }}
  }
`
