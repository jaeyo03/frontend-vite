import MainPage from "@/pages/MainPage";
import SideBar from "@/components/common/SideBar.tsx";
import styled from "@emotion/styled";
import Header from "@/components/common/Header.tsx";

export default function App(){
  return (
    <>
      <Header/>
      <Layout>
        <SideBar />
        <MainPage/>
      </Layout>
    </>
  )
}

const Layout = styled.div`
  display: flex;
  height: 100vh;
  background: #F4F4F5;
`;