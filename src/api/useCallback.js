function a() {
	const b = function() {
		console.log(1);
	}
}
a()
a() // 函数b又被定义了一次

// 如果我们通过依赖来确定前后两次是不是同一个函数，我们可以用函数记忆来实现整个功能

let prev
let prevDeps

function memorize(fn, deps) {
	// 前后依赖一致，不用重新计算直接返回上次结果
	if(prev && isEqual(deps, prevDeps)) {
		return prev
	}
	prevDeps = deps
	prev = fn
	return fn
}

//

export default() => {
	// 没有依赖，永远是同一个函数
	const handleClick = useCallback(() => {}, []);

	// 依赖a，重新执行函数组件，a不变的，是同一个函数
	// a变了handleClick是新的函数
	const handleClick1 = useCallback(() => {}, [a]);
	return(
		<div>
	      <div onClick={handleClick} />
	    </div>
	)
}



// react组件也是一个函数，那其实useCallback还可以做一个函数组件：
export default() => {
	const handleClick = useCallback(() => {}, []);
	const Cpn = useCallback(({
		name
	}) => {
		return <button onClick={handleClick}>{name}</button>
	}, [handleClick]);

	return (
		<div>
           <Cpn name="hi" />
        </div>
	)
}