import styled from '@emotion/styled'

export default function Header () {
  return (
    <HeaderLayout>
    </HeaderLayout>
  )
}

const HeaderLayout = styled.div`
  height: 100px;
  width: calc(100vw - 306px);
  border-style: solid;
  border-bottom-width: 1px;
  align-items: center;
  display: flex;
  background: #FFFFFF;
`