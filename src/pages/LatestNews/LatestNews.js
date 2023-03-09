import React from 'react';
import { useRef } from 'react';
import { motion } from "framer-motion";
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

const animatinItem = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom =>({
    x: 0,
    opacity: 1,
    transition: {delay: 0.5, easing: 'ease'},
  }),
}
  const latestNewsRef = useRef(null);

return (
  <motion.div 
  initial="hidden"
  whileInView= "visible"
  viewport={{amount: 0.3}}
  className='latest'>
  <div className='container'>
  <div className='latest-subtitle'>
    LETEST NEWS
    </div>
  <div className='latest-title'>
    From Our Blog
  </div>
    <div ref={latestNewsRef} className="latest-news">
      {newsList.map((news, index) => (
      <motion.div variants={animatinItem} key={news.id} className="latest-news-item">
        <div className='latest-news-item-move'>
            <img src={news.imageUrl} alt={news.title} />
            <motion.h3 custom={8} variants={animatinItem}className='latest-news-item-title'>{news.title}</motion.h3>
            <p className='latest-news-item-descr'>{news.description}</p>
        </div>
            <p>{news.additionalInfo}</p>
            <Button to="/" className='button'>CONTINUE READING....</Button>
      </motion.div>
))}
</div>
</div>
</motion.div>
);
};

export default LatestNews;

