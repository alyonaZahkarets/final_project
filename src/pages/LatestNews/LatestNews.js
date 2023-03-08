import React from 'react';
import { useRef, useEffect } from 'react';
import './latestNews.scss';

const LatestNews = () => {
  const newsList = [
    {
      id: 1,
      title: 'Новина 1',
      description: 'Опис новини 1',
      additionalInfo: 'Додаткова інформація про новину 1',
      imageUrl: require('../../assets/images/news1.png'),
    },
    {
      id: 2,
      title: 'Новина 2',
      description: 'Опис новини 2',
      additionalInfo: 'Додаткова інформація про новину 2',
      imageUrl: require('../../assets/images/news2.png'),
    },

  ];


  const latestNewsRef = useRef(null);

  useEffect(() => {
    const latestNewsElement = latestNewsRef.current;

    const handleScroll = () => {
      const top = latestNewsElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        latestNewsElement.classList.add('animated');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className='container'>
    <div ref={latestNewsRef} className="latest-news">
      {newsList.map((news, index) => (
        <div key={news.id} className="latest-news-item">
             <div className='latest-news-item-move'> 
          <img src={news.imageUrl} alt={news.title} />
          <h3>{news.title}</h3>
          <p>{news.description}</p>
             </div>
          <p>{news.additionalInfo}</p>
          <button>Continue reading</button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default LatestNews;
