import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.whiteGlass};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 450px) {
    width: 280px;
  }
`;

export const StyledSuccessSubmit = styled.p`
  text-align: center;
  background: ${({ theme }) => theme.colors.success};
`;

export const StyledErrorSubmit = styled.p`
  text-align: center;
  background: ${({ theme }) => theme.colors.red};
`;
