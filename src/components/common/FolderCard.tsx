import { Button, Card } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { Stat } from "@chakra-ui/react"

interface FolderCardProps {
  folderID : string;
  folderName : string;
  resumeCount : number;
}

export default function FolderCard({ folderID, folderName, resumeCount }: FolderCardProps) {
  return (
    <Card.Root width="320px" variant={'outline'} height="200px">
      <Card.Body gap="2">
        <Card.Title mb="2">{folderName}</Card.Title>
        <Stat.Root size="sm">
          <Stat.Label>자소서 수</Stat.Label>
          <Stat.ValueText>{resumeCount}</Stat.ValueText>
        </Stat.Root>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button colorPalette="gray" variant="subtle">이름 변경</Button>
        <Button colorPalette="red" variant="subtle">폴더 삭제</Button>
      </Card.Footer>
    </Card.Root>
  )
}