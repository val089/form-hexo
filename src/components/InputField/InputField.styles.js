import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 15px;
`;

export const StyledLabel = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.2);
  display: block;
  width: 100%;
  padding: 5px;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-top: 2px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledError = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
`;
