import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background: ${({ disabled, theme }) => (disabled ? theme.colors.whiteGlass : theme.colors.white)};
  font-size: ${({ theme }) => theme.fontSize.l};
  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGrey};
  }
`;
