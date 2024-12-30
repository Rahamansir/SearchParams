import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const course = ['Superman', 'Hulk', 'Thor', 'Spiderman'];

function App() {
  //let selectedcoueseidx = 0;

  const [selectedcouese, setselectedcoueseidx] = useState(
    Number(localStorage.getItem('freez'))
  );

  const options = (idx) => {
    localStorage.setItem('freez', idx);
    setselectedcoueseidx(idx);
  };

  return (
    <div>
      <Courses />
      {/* <Learning /> */}
      <ul>
        {course.map((courseitem, idx) => (
          <li
            onClick={() => {
              options(idx);
            }}
            className={idx === selectedcouese ? 'active' : ''}
          >
            {/* {idx}.*/}
            {courseitem}
          </li>
        ))}
      </ul>
    </div>
  );
  //return <ul>
  // {courses.map(function(courseitem ,idx){
  // return <li>{idx}.{courseitem}</li>
  //})}
  //</ul>
  // return (
  //   <ul>
  //   <li className={selectedcoueseidx === 0 ? 'active' : ''}>
  //   Front End
  //</li>
  //<li className={selectedcoueseidx === 1 ? 'active' : ''}>Back End</li>
  //<li className={selectedcoueseidx === 2 ? 'active' : ''}>Ui & Ux</li>
  //</ul>
  //);
}

export default App;

const coursess = [
  'Front-End Web Development',
  'Back-End Web Development',
  'React JS Development',
  'UI/UX Design',
];

function Courses() {
  const [select, setselectrd] = useState(
    Number(localStorage.getItem('selectedcourseidx'))
  );

  const handlingclick = (idx) => {
    localStorage.setItem('selectedcourseidx', idx);
    setselectrd(idx);
  };

  return (
    <div className="Courses-ui">
      <nav>
        {coursess.map((cr, idx) => (
          <span
            onClick={() => handlingclick(idx)}
            className={idx === select ? 'active' : ''}
          >
            {cr}
          </span>
        ))}
      </nav>
      <div className="details">
        <h3>Course Details</h3>
        <h3>You Have Selected : {coursess[select]}</h3>
      </div>
    </div>
  );
}

// const Courselist = [
//   'Front-End Web Development',
//   'Back-End Web Development',
//   'React JS Development',
//   'UI/UX Design',
// ];

// function Learning() {
//   let selected = 0;
//   const handleclick = (value, idx) => {
//     const selected = idx;
//   };

//   return (
//     <>
//       {Courselist.map((value, idx) => (
//         <li
//           onClick={() => handleclick(value, idx)}
//           className={idx === selected ? 'active' : ''}
//         >
//           {idx}

//           {value}
//         </li>
//       ))}
//     </>
//   );
// }
