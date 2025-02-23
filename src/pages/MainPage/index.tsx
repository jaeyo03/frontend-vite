import FolderCard from "@/components/common/FolderCard.tsx";
import styled from "@emotion/styled";

interface folderData {
  folderID : string;
  folderName : string;
  resumeCount : number;
}

const tempData : folderData[] = [
  { folderID : '123123', folderName : '2025 LG전자', resumeCount : 1 },
  { folderID : '13432', folderName : '잡탕', resumeCount : 4 },
  { folderID : '13423', folderName : '2025 에릭슨엘지', resumeCount : 10 },
  { folderID : '412323', folderName : '2025 삼성SDS', resumeCount : 7 },
];

export default function MainPage() {
  return (
    <MainLayout>
      {tempData.map((item) => (
        <FolderCard
          key={item.folderID}
          folderID={item.folderID}
          folderName={item.folderName}
          resumeCount={item.resumeCount}
        />
      ))}
    </MainLayout>
  )
}

const MainLayout = styled.div`
  display: flex;
  height: 100px;
  flex-wrap: wrap;
  gap: 20px; /* 아이템 간 간격 */
  padding: 40px;
`;

