import styled from 'styled-components';

export const MovieLi = styled.li`
  font-weight: 500;
  padding: 2px;
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(0.996);
  }
`;