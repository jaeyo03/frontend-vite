import SideBar from "@/components/common/SideBar.tsx";
import styled from "@emotion/styled";
import Header from "@/components/common/Header.tsx";
import {Outlet} from "react-router";

export default function Layout(){
  return (
    <>
      <Header/>
      <BodyLayout>
        <SideBar />
        <Outlet/>
      </BodyLayout>
    </>
  )
}

const BodyLayout = styled.div`
  display: flex;
  height: 100vh;
  background: #F4F4F5;
`;