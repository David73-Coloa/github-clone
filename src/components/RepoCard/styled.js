import styled from 'styled-components'
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import iconCss from '../icon/css'
export const Container = styled.div`
  color:var(--gray);
  display:flex;
  flex-direction:column;
  border:1px solid var(--repos); 
  padding:16px; 
  border-radius:5px;
  margin:15px;
`

export const TopSide = styled.div`
  > header {
    display:flex;
    align-items:center;
    > a:hover {
      text-decoration:underline;

    }

  }

  > p {
    margin-top:8px;
   
  }
`


export const BotSide = styled.div`
  display:flex;
  
  > ul {
    display:flex;
    align-items:center;
    

    > li {
      display:flex;
      margin-top:10px;

      > .language {
        border-radius:50%;
        width:16px;
        height:16px;
      
      }

      .other {
        background:var(--other);
      }

      .javascript {
        background:var(--javascript);
      }

      .typescript {
        background:var(--typescript);
      }


      .python {
        background:var(--python);
      }

      .vimscript{
        background:var(--vimscript);
      }

      .html {
        background:var(--html);
      }




    }

  }
`

export const StarIcon = styled(RiStarLine)`
  ${iconCss}
  margin-left:15px;
  
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCss}
  margin-left:15px;

  
`;

export const BookIcon = styled(RiBookMarkLine)`
  ${iconCss}
  
`
