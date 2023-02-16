import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: auto;
`;

const Login = () => {
  const onClick = () => {

  }
  return (
    <Container>
      <p>Login</p>
      <input />
      <input type="password" />
      <button onClick={onClick}>Login</button>
    </Container>
  );
};

export default Login;
