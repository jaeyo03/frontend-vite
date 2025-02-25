import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import './index.css'
import Layout from './Layout.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import ResumePage from "@/pages/ResumePage";
import TrashPage from "@/pages/TrashPage";
import AccountPage from "@/pages/AccountPage";
import QuestionDetailPage from "@/pages/QuestionDetailPage";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element = {<Layout/>}>
            <Route index element={<ResumePage />} />
            <Route path="resume" element={<ResumePage/>}></Route>
            <Route path="/resume/:id" element={<QuestionDetailPage/>}></Route>
            <Route path="trash" element={<TrashPage/>}></Route>
            <Route path="account" element={<AccountPage/>}></Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
