import styled from 'styled-components'

export const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index:1;
    width:100%;
    height:100%;
    align-items:center;
    justify-content:center;
    display:flex;

    div {
        position:absolute;
        height:100%;
        width:100%;
        z-index:1;
        background:rgba(0,0,0,0.8)
    }

    img {
        z-index:1;
        border-radius:50%;
        animation: Img-spin infinite 2s linear;
        width:8em;
    }

    @keyframes Img-spin {
        from {
           transform: rotate(0deg);
        }
    
        to {
           transform: rotate(360deg);
        }
}
`
