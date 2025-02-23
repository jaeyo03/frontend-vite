import styled from "@emotion/styled";
import {ReactNode} from "react";

export default function SideBarMenu({children}: {children: ReactNode}) {
   return (
     <SideBarMenuLayout>
       {children}
     </SideBarMenuLayout>
   )
}

const SideBarMenuLayout = styled.div`
  font-size : 20px;
  width: fit-content;
  font-weight: bold;
  color : #878787;
  margin-left : 10px;
  margin-top : 15px;
  margin-bottom: 15px;
  cursor: pointer;
`