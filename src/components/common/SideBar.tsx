import styled from '@emotion/styled'
import SideBarMenu from "@/components/common/SideBarMenu.tsx";

export default function SideBar () {
  return (
    <SideLayout>
      <SideBarWrap>
        <img
          src="/vite.svg"
          width="24"
          height="24"
        />
        <SideBarMenu>자기소개서</SideBarMenu>
      </SideBarWrap>
      <SideBarWrap>
        <img
          src="/vite.svg"
          width="24"
          height="24"
        />
        <SideBarMenu>휴지통</SideBarMenu>
      </SideBarWrap>
      <SideBarWrap>
        <img
          src="/vite.svg"
          width="24"
          height="24"
        />
        <SideBarMenu>계정 관리</SideBarMenu>
      </SideBarWrap>
    </SideLayout>
  )
}

const SideLayout = styled.div`
  width: 320px;
  height: 100%;
  background: white;
  border-style: solid;
  border-right-width: 1px;
`

const SideBarWrap = styled.div`
  display: flex;
  width : fit-content;
  margin-left : 25px;
`