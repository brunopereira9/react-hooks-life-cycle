import React, { useEffect, useState, memo } from 'react';

const areEqual = (prevProps, nextProps) => {
  if(prevProps.loading == nextProps.loading){
    console.log('shouldComponentUpdate: não vai re-renderizar');
    return true;
  }else{
    console.log('shouldComponentUpdate: vai re-renderizar');
    return false;
  }
}

function Twitter(props){
  
  const { loading } = props;
  const [time, setTime] = useState(new Date());


  //componentDidMount
  useEffect(() => {
    console.log("componentDidMount: ", props);
  },[]);

  //componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate: Loading", loading);
  },[loading]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount-> componente removido');
    }
  },[]);
  
  const handleTime = () => {
    setTime(new Date())
  }

  console.log('iniciou render(): ', time);
  return (
    <div>
      <button type="button" onClick={handleTime}>Re-Render</button>
    </div>
  );
}

export default memo(Twitter, areEqual);