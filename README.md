> 使用`global-hook-store`,`immer`完成hooks store 最佳实践!

```
npm i -S global-hook-store
npm i -S immer
```

## 更多选择
- [global-hook-store](https://github.com/richarddd/global-hook-store)
- [react-hooks-redux](https://github.com/ymzuiku/react-hooks-redux)
- [react-consumer](https://github.com/ymzuiku/react-consumer)
- [react-ob](https://github.com/ymzuiku/react-ob)
- [stamen](https://github.com/forsigner/stamen)

## use Store
```js
// ./store.js
import useStore, { createStore, useLocalStore } from "global-hook-store";
import produce from "immer";


function testAwait() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(123)
        }, 1000)
    })
}

export default const counterStore = createStore(
    {
        count: 0,
        age: 200,
        name: 'libin',
        list: [
            {
                title: "Learn TypeScript",
                done: true
            },
            {
                title: "Try Immer",
                done: false
            }
        ]
    },
    {
        increment: ({ count }) => ({ ...counterStore.state, count: count + 1 }),
        decrement: ({ count }) => ({ ...counterStore.state, count: count - 1 }),
        random: () => ({ ...counterStore.state, count: Math.round(Math.random() * 10) }),
        changeage: (store, age) => {
            return produce(store, draft => {
                draft.age = age;
            });
        },
        changeageSync: async (store) => {
            const age = await testAwait();
            return produce(store, draft => {
                draft.age = age;
            });
        },
        addList: (store) => {
            return produce(store, draftState => {
                draftState.list.push({ title: "Tweet about it", done: false })
                draftState.list[1].done = true
            })
        }
    }
);

console.log(counterStore)

```

## store-Test
```js
import React, { useEffect } from "react";
import useStore, { createStore, useLocalStore } from "global-hook-store";
import counterStore from "./store";

const Counter = () => {
	console.log(useStore(counterStore))
	const {
		state: { count, age, name, list },
		actions
	} = useStore(counterStore);
	return (
		<>
			<h1>Counter</h1>
			<h2>Count {count} {age} {name}</h2>
			<button onClick={() => actions.decrement()}>-</button>
			<button onClick={() => actions.increment()}>+</button>
			<button onClick={() => actions.changeage(age + 2)}>age</button>
			<button onClick={() => actions.changeageSync()}>ageSync</button>
			<ul>
				{list.map((item, index) => {
					return <li key={index}>{`${item.title} ${item.done}`}</li>
				})}
			</ul>
			<button onClick={() => actions.addList()}>addList</button>
		</>
	);
};

const LocalCounter = () => {
	const {
		state: { count, age, name },
		actions
	} = useLocalStore(counterStore);

	useEffect(() => {
		actions.random();
	}, []);

	return (
		<>
			<h1>Local Counter</h1>
			<h2>Count {count}  {age} {name}</h2>
			<button onClick={() => actions.decrement()}>-</button>
			<button onClick={() => actions.increment()}>+</button>
			<button onClick={() => actions.changeage(age + 1)}>age</button>
			<button onClick={() => actions.changeageSync()}>ageSync</button>
		</>
	);
};

export default function App() {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<Counter />
			<Counter />
			<LocalCounter />
			<LocalCounter />
		</div>
	);
}

```
