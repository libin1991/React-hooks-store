import React, {useState, useEffect ,useReducer ,useMemo,useCallback } from 'react';
import ReactDOM from 'react-dom';


function reducer(state, action) {
  switch (action.type) {
    case 'up':
      return { count: state.count + 1 };
    case 'down':
      return { count: state.count - 1 };
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 1 })
  return (
    <div>
      
      <button onClick={() => dispatch({ type: 'up' })}>+</button>
      <br/>
      {state.count}
      <br/>
      <button onClick={() => dispatch({ type: 'down' })}>-</button>
    </div>
  );
}

 


function getNowFormatDate() {//获取当前时间
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
	var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
	var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
			+ " "  + date.getHours()  + seperator2  + date.getMinutes()
			+ seperator2 + date.getSeconds();
	return currentdate;
}

function Time() {
	return <p>{getNowFormatDate()}</p>;
}

function Counter2() {
  const [count, setCount] = useState(0);
  
  const memoizedChildComponent = useMemo((count) => {
    return <Time />;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{memoizedChildComponent}</div>
    </div>
  );
}




function Counter3() {
	const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
  	setCount(count + 1);
  }, [count]);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}



export default function Example() {
  const [count, setCount] = useState(0);

  // => componentDidMount/componentDidUpdate
  useEffect(() => {     
    // update 
    document.title = `You clicked ${count} times`;    //需要在组件更新以后同步title
    // => componentWillUnMount
    return function cleanup() {
    	document.title = 'app';
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      
      <br/> <br/> <br/>
      <Counter/>
      
      <br/> <br/> <br/>
      <Counter2/>
      
      <br/> <br/> <br/>
      <Counter3/>
    </div>
  );
}


 
 
 

 