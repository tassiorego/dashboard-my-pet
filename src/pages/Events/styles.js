import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  header {
    background: ${({ theme }) => theme.colors.sidebar};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    box-shadow: 1px 1px 1px #3331;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
