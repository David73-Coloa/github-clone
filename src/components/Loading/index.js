import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styled'
export default function Loading( { isLoading } ) {
    if (!isLoading) return <></> 
    return (
        <Container>
            <div/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cDElcrLyOGCmG0OX8DBOihcHZ1oliKQJrQ&usqp=CAU" alt="loading"/>
        </Container>
        
    )


}

Loading.defaultProps = {
    isLoading:false,

}

Loading.propTypes = {
    isLoading:PropTypes.bool,
}
