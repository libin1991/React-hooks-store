// lib/onHover.js
import React,{ useState } from 'react';

export default function(){
  const [hovered, set] = useState(false);
  return {
    hovered,
    bind: {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false),
    },
  };
};

 
 