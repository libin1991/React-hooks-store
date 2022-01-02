import React, {
	useCallback
} from 'react';

function getNowFormatDate() { //获取当前时间
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	var strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
		" " + date.getHours() + seperator2 + date.getMinutes() +
		seperator2 + date.getSeconds();
	return currentdate;
}

export default() => {
	const handleClick = useCallback(() => {
		console.log(getNowFormatDate());
	}, []);
	const Cpn = useCallback(({name}) => {
		return <button onClick={handleClick}>{name}</button>
	}, [handleClick]);

	return(
		<div>
          <Cpn name="hi" />
        </div>
	)
}