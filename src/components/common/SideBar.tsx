import styled from '@emotion/styled'
import {Link} from "react-router";

export default function SideBar () {
  return (
    <SideLayout>
      <SideBarWrap>
        <img
          src="/vite.svg"
          width="24"
          height="24"
        />
        <SideBarMenu>
          <Link to="/resume">자기소개서</Link>
        </SideBarMenu>
      </SideBarWrap>
      <SideBarWrap>
        <img
          src="/vite.svg"
          width="24"
          height="24"
        />
        <SideBarMenu>
          <Link to="/trash">휴지통</Link>
        </SideBarMenu>
      </SideBarWrap>
      <SideBarWrap>
        <img
          src="/vite.svg"
          width="24"
          height="24"
        />
        <SideBarMenu>
          <Link to="/account">계정 관리</Link>
        </SideBarMenu>
      </SideBarWrap>
    </SideLayout>
  )
}

const SideLayout = styled.div`
  width: 250px;
  height: 100%;
  background: white;
  border-style: solid;
  border-right-width: 1px;
  padding-top :10px;
`

const SideBarWrap = styled.div`
  display: flex;
  width : fit-content;
  margin-left : 25px;
`

const SideBarMenu = styled.div`
  font-size : 20px;
  width: fit-content;
  font-weight: bold;
  color : #878787;
  margin-left : 10px;
  margin-top : 15px;
  margin-bottom: 15px;
  cursor: pointer;
`