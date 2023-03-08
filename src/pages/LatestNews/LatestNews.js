import React from 'react';
import { useRef, useEffect } from 'react';
import './latestNews.scss';
import Button from '../../components/button/button';

const LatestNews = () => {
  const newsList = [
    {
      id: 1,
      title: '2020 Interior Design Trends',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.',
      additionalInfo: '',
      imageUrl: require('../../assets/images/news1.png'),
    },
    {
      id: 2,
      title: '28 Notable Product at ARC Interior Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.',
      additionalInfo: '',
      imageUrl: require('../../assets/images/news2.png'),
    },

  ];


  const latestNewsRef = useRef(null);



  useEffect(() => {
    const latestNews = latestNewsRef.current;
    const latestNewsTop = latestNews.getBoundingClientRect().top;
    const latestNewsHeight = latestNews.offsetHeight;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > latestNewsTop + latestNewsHeight * 0.8) {
        latestNews.classList.add('active');
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
          <h3 className='latest-news-item-title'>{news.title}</h3>
          <p className='latest-news-item-descr'>{news.description}</p>
          </div>
          <p>{news.additionalInfo}</p>
          <Button to="/" className='button'>CONTINUE READING....</Button>
          </div>
          ))}
          </div>
          </div>
          );
          };
          
          export default LatestNews;
          
          
          
          
          
          