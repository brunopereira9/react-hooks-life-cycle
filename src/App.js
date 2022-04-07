import React, { useEffect, useState } from 'react';
import Twitter from './Twitter';

function App(){

  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(true);
  const [posts, setPosts] = useState({
    title: "Titulo 1",
    description: "Aqui tem uma descrição 1"
  }); 

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000)
  },[]);

  const togleActive = () => {
    setActive(!active);
  }

  return(
    <>
      <p>Life Cycle(Hook) on console</p>
      <button type="button" onClick={togleActive}>{(active)?"Remover":"Adicionar"} Componente</button>
      {active && (
        <Twitter posts={posts} loading={loading}/>
      )}
    </>
  );
}

export default App;