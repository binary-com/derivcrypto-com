// import React, { createContext, useReducer } from 'react'

// const initialState = {}
// const store = createContext(initialState)
// const { Provider } = store

// const StateProvider = ({ children }) => {
//     const [state, dispatch] = useReducer((state, action) => {
//         switch (action.type) {
//             case 'UPDATE_STORE':
//                 // eslint-disable-next-line no-case-declarations
//                 const newState = { ...state, ...action.payload }
//                 return newState
//             default:
//                 throw new Error()
//         }
//     }, initialState)

//     return <Provider value={{ state, dispatch }}>{children}</Provider>
// }

// export { store, StateProvider }
