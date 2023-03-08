// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import LatestNews from '../../pages/LatestNews/LatestNews';

// const Animations = () => {
//   const props = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//   });

//   return (
//     <div>
//       <h1>My Component</h1>
//       <animated.div style={props}>
//         <div><LatestNews/></div>
//       </animated.div>
//     </div>
//   );
// };

// export default Animations;



  // const latestNewsRef = useRef(null);
  // const animItems = document.querySelectorAll('._anim-items');
  // if (animItems.length > 0) {
  //   function animOnScroll(params) {
  //     for (let index = 0; index < animItems.length; index++) {
  //       const animItem = animItems[index];
  //       const animItemHeight = animItem.offsetHeight;
  //       const animItemOffset =  
  //   }



//   useEffect(() => {
//     const handleScroll = () => {
//       const latestNewsElements = document.querySelectorAll('.latest-news-item');
//       const windowHeight = window.innerHeight;
  
//       latestNewsElements.forEach((element, index) => {
//         const top = element.getBoundingClientRect().top;
  
//         if (top < windowHeight) {
//           setTimeout(() => {
//             element.classList.add('animatedanimated-active');
//           }, index * 200);
//           }
//           });
//           };
//           const latestNewsObserver = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//               if (entry.isIntersecting) {
//                 const latestNewsElements = entry.target.querySelectorAll('.latest-news-item');
          
//                 latestNewsElements.forEach((element, index) => {
//                   setTimeout(() => {
//                     element.classList.add('animated-active');
//                   }, index * 200);
//                 });
          
//                 latestNewsObserver.unobserve(entry.target);
//               }
//             });
//           }, { threshold: 0.5 });
          
//           latestNewsObserver.observe(latestNewsRef.current);
          
//           window.addEventListener('scroll', handleScroll);
          
//           return () => {
//             window.removeEventListener('scroll', handleScroll);
//             latestNewsObserver.disconnect();
//           };
//           }, []);
          