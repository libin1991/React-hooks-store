import React, { Component , useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  state = {
  	count: 0
  }

  countUp = () => {
    const { count } = this.state;
  	this.setState({ count: count + 1 });
  }
  
  countDown = () => {
    const { count } = this.state;
  	this.setState({ count: count - 1 });
  }
  
  componentDidUpdate() {
    setTimeout(() => {
        console.log(this.state.count)
    }, 2000)
  }
  
  render() {
    const { count } = this.state;
  	return (
      <div>
        <h4>class Component:</h4>
        <button onClick={this.countUp}>+</button>
        <h1>{count}</h1>
        <button onClick={this.countDown}>-</button>
      </div>
    )
  }
}
 

function Counter2() {
  const [count, setCount] = useState(0);
  
  //当数组中值是状态的时候，就会只监听这一个状态的变化。当然数组中可以多个值，监听存放state的变化。 
  //数组为空的时候，useEffect就相当于componentDidMoubt和componentWillUnmount这两个生命周期，只在首次渲染和卸载的时候执行。
  useEffect(() => {
    setTimeout(() => {
        console.log(count)
    }, 2000);
  },[count]);   
  
  return (
    <div>
      <h4>useEffect:</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}



//当然如果你只想拿到最新的 count 的话，你可以使用 useRef 来实现
function Counter3() {
  const [count, setCount] = useState(0);
  
  const ref = React.useRef(count);
  
  useEffect(() => {
    ref.current = count;
    setTimeout(() => {
        console.log(ref.current);
    }, 2000);
  })

  return (
    <div>
      <h4>useRef:</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}


export default function(){
	return (
		<>
		   <Counter/> 
		   <br/><br/><br/><br/><br/>
		   <span>快速点击看控制台</span>
		   <Counter2/>
		   <br/><br/><br/><br/><br/>
		   <Counter3/>
		</>
	)
}
