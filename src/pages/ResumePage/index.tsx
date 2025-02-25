import ResumeCard from "@/components/common/ResumeCard.tsx";
import styled from "@emotion/styled";
import {useNavigate} from "react-router";
import {Resume} from "@/types/type.ts";
import {useEffect, useState} from "react";
import {getResumeData} from "@/apis/resumeAPI.ts";

export default function ResumePage() {
  const [resumeData, setResumeData] = useState<Resume[]>([]);
  const navigate = useNavigate();

  const handleDetailClick = (id: string) => {
    navigate(`/resume/${id}`);
  }

  const initialResumeGet = async () => {
    const data = await getResumeData();
    setResumeData(data);
  }

  useEffect(() => {
    initialResumeGet();
  }, []);

  return (
    <ResumeLayout>
      {resumeData.map((item) => (
        <ResumeCard
          key={item.resumeID}
          resumeID={item.resumeID}
          title={item.title}
          questionsCount={item.questionsCount}
          handleDetailClick={handleDetailClick}
        />
      ))}
    </ResumeLayout>
  )
}

const ResumeLayout = styled.div`
  display: flex;
  height: 100px;
  width: fit-content;
  flex-wrap: wrap;
  gap: 20px; /* 아이템 간 간격 */
  padding: 40px;
`;