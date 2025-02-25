import styled from '@emotion/styled'
import {Link} from "react-router";

export default function SideBar () {
  return (
    <SideLayout>
      <TitleWrap>
        <img
          src="/j-icon.svg"
          alt="logo"
          width="45"
          height="45"
        />
        <Title>Jobextension</Title>
      </TitleWrap>
      <SideBarWrap>
        <Link to="/resume" style={{ display: 'flex' }}>
          <img
            src="/resume-icon.svg"
            width="24"
            height="24"
            alt="resume-icon"
          />
          <SideBarMenu>
            자기소개서
          </SideBarMenu>
        </Link>
      </SideBarWrap>
      <SideBarWrap>
        <Link to="/trash" style={{ display: 'flex' }}>
          <img
            src="/trash-icon.svg"
            width="24"
            height="24"
            alt="trash-icon"
          />
          <SideBarMenu>
            휴지통
          </SideBarMenu>
        </Link>
      </SideBarWrap>
      <SideBarWrap>
        <Link to="/account" style={{ display: 'flex' }}>
          <img
            src="/account-icon.svg"
            width="24"
            height="24"
            alt="account-icon"
          />
          <SideBarMenu>
            계정 관리
          </SideBarMenu>
        </Link>
      </SideBarWrap>
    </SideLayout>
  )
}

const SideLayout = styled.div`
  width: 306px;
  height: 100%;
  background: white;
  border-style: solid;
  border-right-width: 1px;
  padding-top : 31px;
  flex-shrink: 0;
`

const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #7676FF;
  margin-left: 10px;
`

const TitleWrap = styled.div`
  display: flex;
  width : fit-content;
  justify-content: center;
  align-items: center;
  margin-left : 25px;
`

const SideBarWrap = styled.div`
  display: flex;
  width : fit-content;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top : 40px;
  margin-left : 25px;
`

const SideBarMenu = styled.div`
  font-size : 20px;
  font-weight: bold;
  color : #878787;
  margin-left : 10px;
`