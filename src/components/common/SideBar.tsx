import styled from '@emotion/styled'
import {Link} from "react-router";
import {FileText, Menu, Trash2, UserCircle} from "lucide-react";

export default function Sidebar({
                   activeSection,
                   setActiveSection,
                   isOpen,
                   onToggle
                 }: {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <IconButton onClick={onToggle}>
          <Menu size={24} color="#374151" />
        </IconButton>
        {isOpen && <FileText size={24} color="#2563eb" />}
        {isOpen && <span style={{ fontWeight: 600, color: '#111827' }}>Resume Builder</span>}
      </SidebarHeader>
      <SidebarNav>
        <NavButton
          active={activeSection === 'resume'}
          onClick={() => setActiveSection('resume')}
        >
          <FileText size={20} />
          {isOpen && <span>Resumes</span>}
        </NavButton>
        <NavButton
          active={activeSection === 'trash'}
          onClick={() => setActiveSection('trash')}
        >
          <Trash2 size={20} />
          {isOpen && <span>Trash</span>}
        </NavButton>
        <NavButton
          active={activeSection === 'account'}
          onClick={() => setActiveSection('account')}
        >
          <UserCircle size={20} />
          {isOpen && <span>Account</span>}
        </NavButton>
      </SidebarNav>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: white;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  width: ${props => props.isOpen ? '256px' : '64px'};
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SidebarNav = styled.nav`
  flex: 1;
  padding: 16px;
`;

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

const NavButton = styled.button<{ active: boolean }>`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.active ? '#2563eb' : 'transparent'};
  color: ${props => props.active ? 'white' : '#374151'};

  &:hover {
    background-color: ${props => props.active ? '#2563eb' : '#f3f4f6'};
  }
`;