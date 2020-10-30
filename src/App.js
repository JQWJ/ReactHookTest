import React, { useState } from 'react';
import Average from './Average';
// import Info from './Info';                        //Info 임포트
// import Counter from './Counter';               //Counter 임포트

// const App = () => {
//   return <Counter />;                          //Counter 실행문
// };

// const App = () => {
//   return <Info />;                                //Info 실행문
// }

const App = () => {
  return <Average />;
}

export default App;


// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   )
// };

// export default App;