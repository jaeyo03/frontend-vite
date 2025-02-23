import ResumeCard, {ResumeCardProps} from "@/components/common/ResumeCard.tsx";
import styled from "@emotion/styled";

const tempData : ResumeCardProps[] = [
  { resumeID : '123123', resumeName : '2025 LG전자', questionsCount : 1 },
  { resumeID : '13432', resumeName : '잡탕', questionsCount : 4 },
  { resumeID : '13423', resumeName : '2025 에릭슨엘지', questionsCount : 10 },
  { resumeID : '412323', resumeName : '2025 삼성SDS', questionsCount : 7 },
];

export default function ResumePage() {
  return (
    <ResumeLayout>
      {tempData.map((item) => (
        <ResumeCard
          key={item.resumeID}
          resumeID={item.resumeID}
          resumeName={item.resumeName}
          questionsCount={item.questionsCount}
        />
      ))}
    </ResumeLayout>
  )
}

const ResumeLayout = styled.div`
  display: flex;
  height: 100px;
  flex-wrap: wrap;
  gap: 20px; /* 아이템 간 간격 */
  padding: 40px;
`;

