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
