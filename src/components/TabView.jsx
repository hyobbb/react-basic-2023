import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 200px;
  background-color: #eee;
`;

const Tab = styled.li`
  display: block;
  padding: 16px;
  cursor: pointer;
`;

const TabContent = styled.div`
  padding: 16px;
  width: calc(100% - 200px);
`;

const TabView = () => {
    return (
        <Container>
            <TabList>
                <Tab onClick={undefined}>
                    {"Counter"}
                </Tab>
            </TabList>
            <TabContent>
              {"content"}
            </TabContent>
        </Container>
    );
};

export default TabView;
