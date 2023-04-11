import styled from 'styled-components';

export const Portrait = styled.div`
  max-width: 160px;
  background-color: grey;
  box-shadow: 0px 6px 3px -2px rgba(0, 0, 0, 0.36);
  &:hover {
    transform: scale(1.03);
    transform: box-shadow;
    box-shadow: 0px 5px 3px 1px rgba(0, 0, 0, 0.46);
`;

export const Role = styled.div`
  font-size: 12px;
  height: 40px;
  padding: 10px 0;
  margin-bottom: 8px;
`;

export const CastGridItem = styled.li`

  flex-basis: calc((100% - 15px * 5) / 6);
  display: flex;
  flex-direction: column;

  
  }
`;
export const Placeholder = styled.div`
  display: flex;
  height: 100%;
  background-color: #aaaaaa;
  color: white;
  justify-content: center;
  align-items: center;
`;
