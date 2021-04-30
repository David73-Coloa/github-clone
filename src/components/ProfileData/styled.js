import styled from 'styled-components'
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri';

import iconCss from '../icon/css'

export const Flex = styled.div`
  display:flex;
  align-items:center;

  > div {
    margin-left:24px;
    > h2 {
      color:var(--gray);
    }
  }
  
  @media (min-width:518px) {
    flex-direction:column;
    align-items:flex-start;
  }
`

export const Avatar = styled.img`
  border-radius:50%;
  width:35%;
  @media (min-width:518px) {
    width:65%;
  }
`


export const PeopleIcon = styled(RiGroupLine)`
  ${iconCss}
`

export const BlogIcon = styled(RiLinksLine)`
  ${iconCss}
`
export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCss}
`
export const EmailIcon = styled(RiMailLine)`
  ${iconCss}
`

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCss}
`

export const Container = styled.div``

export const Row = styled.ul`
  margin:10px 15px;
  display:flex;


  > li {
    display:flex;
    align-items:center;
  
    > strong {
      margin:0px 8px;
    }

    > span {
      position:relative;
      color:var(--gray);
      bottom:3px;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size:12pt;
    }
  }

  > li + li {
    margin-left:12px;
  }

  @media (min-width:718px) {
    flex-direction:column;

    > li + li {
      margin-left:-8px;
    }
    

  }



`

export const Column = styled.ul`
  display:flex;
  margin:10px 15px;
  flex-direction:column;

  > li {
    display:flex;
    align-items:center;
    margin-bottom:10px;
    

    > span {
      margin-left:8px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
