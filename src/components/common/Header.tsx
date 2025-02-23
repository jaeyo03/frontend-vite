import styled from '@emotion/styled'

export default function Header () {
  return (
    <HeaderLayout>
      <img
        src="/logo.svg"
        alt="logo"
        width="65"
        height="65"
      />
      <Title>Jobextension</Title>
    </HeaderLayout>
  )
}

const HeaderLayout = styled.div`
  height: 90px;
  padding-left : 20px;
  border-style: solid;
  border-bottom-width: 1px;
  align-items: center;
  display: flex;
`

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #7676FF;
`