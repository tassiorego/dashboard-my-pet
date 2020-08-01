import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    width: 450px;
    flex-direction: column;

    input {
      display: flex;
      width: 100%;
      height: 40px;
      padding: 10px;
      border-radius: 3px;
      border: 1px solid #0003;
      background-color: #e8f0fe;
      margin-top: 8px;
      transition: border 0.15s ease;
      font-size: 16px;

      &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }

    header {
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }

      button {
        margin-top: 10px;
      }
    }

    button {
      margin-top: 15px;
    }
  }

  aside {
    width: 300px;
    background: #fff;
    height: 100%;
    border-radius: 5px;
    box-shadow: 1px 1px 4px #3333;
  }
`;
