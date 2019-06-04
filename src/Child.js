import React from 'react'

const Child = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Pet: {ninja.pet}</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete human</button>
      </div>
    ) : null;
  });

  return <div className="ninja-list">{ninjaList}</div>;
};

export default Child