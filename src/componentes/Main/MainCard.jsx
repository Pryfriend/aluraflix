import React, { useContext } from 'react';
import './MainCard.css';
import Category from '../Category/category';
import VideoList from '../VideoList/VideoList';
import VideoContext from '../../context/VideoContext';

function MainCard() {
  const { videos } = useContext(VideoContext);

  if (!videos || videos.length === 0) {
    return <div>Carregando vídeos...</div>;
  }

  return (
    <div className="main-card">
      <div className="topic">
        <Category id={1} title="FRONT END" />
        <VideoList strokeColor="#6BD1FF" category="frontend" />
      </div>
      <div className="topic">
        <Category id={2} title="BACK END" />
        <VideoList strokeColor="#00C86F" category="backend" />
      </div>
      <div className="topic">
        <Category id={3} title="MOBILE" />
        <VideoList strokeColor="#FFBA05" category="mobile" />
      </div>
      <div className="topic">
        <Category id={4} title="TECNOLOGIA" />
        <VideoList strokeColor="#E47900" category="tecnologia" />
      </div>
    </div>
  );
}

export default MainCard;
