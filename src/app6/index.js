import React, {
	useState,
	useContext,
	createContext,
	useMemo,
	useCallback
} from 'react';

// 强行更新组件
const useForceUpdate = () => {      // 由于默认情况下，每一次修改状态都会造成重新渲染，可以通过一个不使用的 set 函数来当成 forceUpdate。
	const forceUpdate = useState(0)[1];
	return () => forceUpdate((x) => {
		console.log(x);
		return (x + 1)
	});
}

// 一个很耗时间的代码
function slowlyAdd(n) {
	console.time('delay');
	let res = n;
	for(let i = 0; i < 2000000000; i++) {
		res += 1;
	}
	console.timeEnd('delay');
	return res;
}

// useMemo记忆结果的一个自定义hook
function useSlowlyAdd(n) {
	const res = useMemo(() => {
		return slowlyAdd(n);
	}, [n])
	return res;
}

export default() => {
	const [count, add] = useState(0);
	const forceUpdate = useForceUpdate();

	const res=useSlowlyAdd(count);    // 第一次这里会耗很多时间，页面卡死一阵
	return( 
		<>  
		    <h4>{res}</h4>
			<button onClick = {
				forceUpdate
			}>更新页面 </button> 
			
			<button onClick = {
				() => add(count + 1)
			}>+</button>
		</>
	)
}