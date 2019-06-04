import React from 'react'

const Child = ({ ninjas }) => {
//   const ninjaList = ninjas.map(ninja => {
//       if (ninja.age > 20) {
//     return (
//       <div className="ninja" key={ninja.id}>
//         <div>Name: {ninja.name}</div>
//         <div>Age: {ninja.age}</div>
//         <div>Pet: {ninja.pet}</div>
//       </div>
//     );
//      } else {
//          return null;
//      }
//   });
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
          <div className="ninja" key={ninja.id}>
             <div>Name: {ninja.name}</div>
             <div>Age: {ninja.age}</div>
             <div>Pet: {ninja.pet}</div>
          </div>)
         : null;
    });

  return (
    <div className="ninja-list">
        {ninjaList}
    </div>
    );
};

export default Child