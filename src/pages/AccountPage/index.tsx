import styled from "@emotion/styled";

export default function AccountPage() {
  return (
    <AccountLayout>
      여기는 계정 관련 입니다
    </AccountLayout>
  )
}

const AccountLayout = styled.div`
  display: flex;
  height: 100px;
  flex-wrap: wrap;
  gap: 20px; /* 아이템 간 간격 */
  padding: 40px;
`;

