import styled from "@emotion/styled";

export default function TrashPage() {
  return (
    <TrashLayout>
      여기는 쓰레기통 입니다.
    </TrashLayout>
  )
}

const TrashLayout = styled.div`
  display: flex;
  height: 100px;
  flex-wrap: wrap;
  gap: 20px; /* 아이템 간 간격 */
  padding: 40px;
`;