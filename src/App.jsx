import React  from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Theme from './components/Theme'
import { ThemeStore } from './contexts/ThemeStore';
import 'react-calendar-heatmap/dist/styles.css';

const App = () => {
  return (
    <ThemeStore>
    <BrowserRouter>
      <Theme>
        <Header />
        <Routes/>  
        <Footer/> 
      </Theme> 
    </BrowserRouter>
    </ThemeStore> 
  );
};

export default App;
