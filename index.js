const counter = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state + 1
        default:
            return state;
    }
}

const createStore = (reducer) => {
    var state;
    var listeners = [];

    var subscribe = (cb) => {
        listeners.push(cb)
    }

    var dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    var getState = () => state;

    dispatch({});

    return { getState, dispatch, subscribe }
}


var store = createStore(counter);
console.log("initial state", store.getState());
store.subscribe(() => {
    console.log("New state:", store.getState());
});
store.dispatch({ type: "INC" });

