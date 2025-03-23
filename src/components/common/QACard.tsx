import {useState} from "react";
import {Briefcase, ChevronDown, Edit2, Save, Trash, X} from "lucide-react";
import styled from "@emotion/styled";
import {QuestionAnswer} from "@/types/type.ts";

export default function QACard({
                  item,
                  isOpen,
                  onToggle,
                }: {
  item: QuestionAnswer;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(item.question);
  const [editedAnswer, setEditedAnswer] = useState(item.answer);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedQuestion(item.question);
    setEditedAnswer(item.answer);
    setIsEditing(false);
  };

  const handleDelete = (id : string) => {

  }

  return (
    <Card style={{ marginBottom: isOpen ? '24px' : '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={onToggle}>
          <Briefcase size={20} color="#6b7280" />
          {isEditing ? (
            <Input
              value={editedQuestion}
              onChange={(e) => setEditedQuestion(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#1f2937' }}>{item.question}</h3>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {isEditing ? (
            <>
              <IconButton onClick={handleSave} title="Save">
                <Save size={20} color="#059669" />
              </IconButton>
              <IconButton onClick={handleCancel} title="Cancel">
                <X size={20} color="#dc2626" />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton onClick={() => setIsEditing(true)} title="Edit">
                <Edit2 size={20} color="#6b7280" />
              </IconButton>
              <IconButton onClick={() => handleDelete(item.resumeID)} title="Delete">
                <Trash size={20} color="#dc2626" />
              </IconButton>
            </>
          )}
          <IconButton onClick={onToggle}>
            <ChevronDown
              size={20}
              color="#6b7280"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.3s ease'
              }}
            />
          </IconButton>
        </div>
      </div>
      <div
        style={{
          maxHeight: isOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease'
        }}
      >
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', marginTop: '16px', borderRadius: '6px' }}>
          {isEditing ? (
            <Textarea
              value={editedAnswer}
              onChange={(e) => setEditedAnswer(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <p style={{ color: '#374151', lineHeight: 1.6 }}>{item.answer}</p>
          )}
        </div>
      </div>
    </Card>
  );
}

const IconButton = styled.button`
  padding: 4px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;