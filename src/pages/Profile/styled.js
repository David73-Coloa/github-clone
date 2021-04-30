import styled from 'styled-components'
import { RiBookMarkLine } from 'react-icons/ri'

export const Container = styled.div`
  --horizontalPadding:16px;
  --verticalPadding: 24px;
  overflow:hidden;
  padding:var(--verticalPadding) var(--horizontalPadding);


`

export const Main = styled.div`
  display:flex;
  flex-direction:column; 
  @media (min-width:518px) {
    flex-direction:row;
  }



`

export const LeftSide = styled.div`
  @media (min-width: 768px) {
    width: 25%;

  }
  
  padding:0 var(--horizontalPadding); 
`

export const RepoIcon = styled(RiBookMarkLine)`
  width: 16px;
  height: 16px;
`



export const RightSide = styled.div`
  padding:var(--horizontalPadding);
  @media (min-width:768px) {
    width:75%;
  }

  
`

export const Repos = styled.div`
  margin-top: var(--verticalPadding);

  > h2 {
    font-weight:normal;
    font-size:15px;
    margin-left:15px;
  }

  > div {
    @media (min-width:768px) {
      display:grid;
      grid-template-columns:1fr 1fr;

    }

  }
`

export const CalendarHeading = styled.span`
  color:var(--text);
  font-size:18px;
  position:relative;
  top:30px;
  
`

export const Tab = styled.div`
  
  .content {
    display:flex;
    align-items:center;
    bottom:10px;
    position:relative;
    justify-content:center;
  
    > .number {
      padding:0px 6px;
      border-radius:50%;
      background:var(--repositories-count);
    }

    > span {
      margin:5px;
      

    }

  }
  
  @media (min-width:718px) {
      .content {
        right:135px;
      }
  }
  


  &.desktop {
    border-bottom:1px solid var(--gray);
    @media (max-width:718px) {
      display:none;
    }

    .line {
      display:flex;
      width:20vw;
      border-bottom:2px solid var(--border);
      left:26%;
      position:relative;
      
    }

  }
  &.mobile { 
    border-bottom:1px solid var(--gray);
    height:28px;  
    @media (min-width:718px) {
      display:none;

    }

    .line {
      display:flex;
      width:50vw;
      border-bottom:2px solid var(--border);
      left:23%;
      bottom:1.5px;
      position:relative;
    }


  }
  
  
  

  
`
