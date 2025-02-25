import { Button, Card } from "@chakra-ui/react"
import { Stat } from "@chakra-ui/react"
import {Resume} from "@/types/type.ts";

interface ResumeCardProps extends Resume {
  handleDetailClick: (id: string) => void;
}

export default function ResumeCard({ resumeID, title, questionsCount, handleDetailClick }: ResumeCardProps) {
  return (
    <Card.Root width="320px" variant={'outline'} height="200px">
      <Card.Body gap="2">
        <Card.Title mb="2">{title}</Card.Title>
        <Stat.Root size="sm">
          <Stat.Label>자소서 수</Stat.Label>
          <Stat.ValueText>{questionsCount}</Stat.ValueText>
        </Stat.Root>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button colorPalette="gray" variant="subtle" onClick={() => handleDetailClick(resumeID)}>조회</Button>
        <Button colorPalette="red" variant="subtle">삭제</Button>
      </Card.Footer>
    </Card.Root>
  )
}