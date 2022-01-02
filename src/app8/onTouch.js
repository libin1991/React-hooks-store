import React, {
	useState
} from 'react';

let Touches = {
	timer: 0,
	x: 0,
	y: 0,
	touched: false,
	langTap: false
};
export default function useTouch() {
	const [touchName, setTouchName] = useState('touch');

	const start = (e) => {
		Touches = {
			x: e.changedTouches[0].pageX,
			y: e.changedTouches[0].pageY,
			touched: true,
			langTap: false
		};
		Touches.timer = setTimeout(() => {
			if(Touches.touched) {
				Touches.langTap = true;
				setTouchName('langTap');
			};
		}, 1000);
	};

	const end = (e) => {
		var disX = e.changedTouches[0].pageX - Touches.x;
		var disY = e.changedTouches[0].pageY - Touches.y;

		clearTimeout(Touches.timer);

		if(Touches.langTap) return;

		if(Math.abs(disX) > 10 || Math.abs(disY) > 100) {
			setTouchName("swipe");
			if(Math.abs(disX) > Math.abs(disY)) {
				if(disX > 10) {
					setTouchName("swiperight");
				};
				if(disX < -10) {
					setTouchName("swipeleft");
				};
			} else {
				if(disY > 10) {
					setTouchName("swipedown");
				};
				if(disY < -10) {
					setTouchName("swipeup");
				};
			};
		} else {
			setTouchName("tap");
		};
	};

	const bind = {
		onTouchStart: (e) => {
			start(e)
		},
		onTouchEnd: (e) => {
			end(e);
		},
		onTouchMove: (e) => {

		}
	};

	return [touchName, bind];
}