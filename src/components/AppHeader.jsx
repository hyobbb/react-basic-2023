import React from "react";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #333;
  color: #fff;
`;

const Title = styled.h1`
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

const UserName = styled.span`
  font-weight: bold;
`;

const AppHeader = () => {
    let userName = null;
    let photoUrl = null;

    return (
        <Container>
            <Title>My App</Title>
            <UserInfo>
                {photoUrl && <Avatar src={photoUrl} alt="User Avatar" />}
                {userName && <UserName>{userName}</UserName>}
            </UserInfo>
        </Container>
    );
};

export default AppHeader;
