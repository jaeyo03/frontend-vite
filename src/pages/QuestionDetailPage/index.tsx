import {useNavigate, useParams} from "react-router";
import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {QuestionAnswer} from "@/types/type.ts";
import {getDetailData} from "@/apis/questionDetailAPI.ts";

export default function QuestionDetailPage() {
  const [questionAnswerData, setQuestionAnswerData] = useState<QuestionAnswer[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  const initialDetailGet = async () => {
    if (id) {
      const data = await getDetailData(id);
      setQuestionAnswerData(data);
    } else {
      // TODO 수정 필요
      alert('없는 id')
    }
  }

  useEffect(() => {
    initialDetailGet();
  },[])

  return (
    <QuestionDetailLayout>
      <button onClick={handleGoBack}>이전으로 가기</button>
      {questionAnswerData.length > 0 ? (
        questionAnswerData.map((item) => (
            <div key={item.resumeID}>
              <h1>{item.question}</h1>
              <p>{item.answer}</p>
              <p>{item.keywords}</p>
              <p>{item.createdAt.toLocaleString()}</p>
            </div>
        ))
      ) : (
        <h1>비었습니다</h1>
      )}
    </QuestionDetailLayout>
  );
}

const QuestionDetailLayout = styled.div`
  padding: 40px;
`;
