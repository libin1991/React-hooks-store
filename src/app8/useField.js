import { useState } from 'react';

export default  function(initial) {
  const [value, set] = useState(initial);

  return {
    value,
    set,
    reset: () => set(initial),
    bind: {
      value,
      onChange: e => set(e.target.value),
    },
  };
}

 

 