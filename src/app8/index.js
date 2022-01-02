import React, {
	useState,
	useMemo
} from 'react';
import './index.css';

import useHover from './onHover.js';
import onTouch from './onTouch.js';
import useField from './useField.js';

function useSlowlyAdd(n) {
	return useMemo(() => {
		// ...
		return '触发了:' + n;
	}, [n])

}

export default function Hover() {
	const {
		hovered,
		bind
	} = useHover();

	const [touchName, Touchbind] = onTouch();

	const res = useSlowlyAdd(touchName);

	return(
		<div>
      <span {...bind} style={{color:hovered?'red':''}}>
        hovered:  {''+hovered}
      </span>
      <br/><br/><br/><br/>
      <div className="touchCon" {...Touchbind}>
         {touchName}
      </div>
      <span>{res}</span>
      <br/><br/><br/><br/>
      <Select/>
      <Input/>
    </div>
	);
}






function Input() {
  const { value, bind } = useField('Type Here...');

  return (
    <div>
      input text:{value}
      <input type="text" {...bind} />
    </div>
  );
}

function Select() {
  const { value, bind } = useField('apple')
  return (
    <div>
      selected:{value}
      <select {...bind}>
        <option value="apple">apple</option>
        <option value="orange">orange</option>
      </select>
    </div>
  );
}
 