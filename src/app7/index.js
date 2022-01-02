import React, { useRef, useState, useEffect } from 'react'; 

export default () => {
    
    // 使用 useRef 创建 inputEl 
    const inputEl = useRef(null);     // React.createRef() || <input ref={(input) => {this.textInput = input;}} type="text" />

    const [text, updateText] = useState('');

    // 使用 useRef 创建 textRef 
    const textRef = useRef();

    useEffect(() => {
        // 将 text 值存入 textRef.current 中
        textRef.current = text;
        console.log('textRef.current：', textRef.current);
    });

    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.value = "Hello, useRef";
    };

    return (
        <>
            {/* 保存 input 的 ref 到 inputEl */}
            <input ref={ inputEl } type="text" />
            <button onClick={ onButtonClick }>在 input 上展示文字</button>
            <br />
            <br />
            <input value={text} onChange={e => updateText(e.target.value)} />
        </>
    );

}

 