import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Example() {
  const [count, setCount] = useState(0);

  // => componentDidMount/componentDidUpdate
  useEffect(() => {
    // update 
    document.title = `You clicked ${count} times`;
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
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('root'));