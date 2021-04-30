import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeStore'

const useTheme = () => useContext(ThemeContext)
export default useTheme
