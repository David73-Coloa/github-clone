import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  margin-top:30px;
  border: 1px solid var(--gray);
  border-radius: 6px;
  .wrapper {
    .scale-0 {
      fill: var(--calendar-scale-0);
    }

    .scale-1 {
      fill: var(--calendar-scale-1);
    }
    .scale-2 {
      fill: var(--calendar-scale-2);
    }
    .scale-3 {
      fill: var(--calendar-scale-3);
    }
    .scale-4 {
      fill: var(--calendar-scale-4);
    }
    width: 683px;
  }
  span {
    font-size: 11px;
    color:var(--link);
    margin-left: 7px;
    padding-bottom: 16px;
    align-self: flex-start;
  }
`