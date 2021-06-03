import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background: url(${({ theme }) => theme.images.heroBg}) center no-repeat;
`;
