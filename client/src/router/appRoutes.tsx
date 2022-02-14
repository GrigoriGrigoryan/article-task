import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Articles from "../components/articles/Articles";
import PostPage from '../components/postPage/PostPage';

const AppRoutes: FC = () => {
  return(
    <Routes>
      <Route path="/articles" element={<Articles />} />
      <Route path="/" element={<Navigate replace to="/articles" />} />
      <Route path="/articles/:id" element={<PostPage />} />
    </Routes>
  );
}

export default AppRoutes;
