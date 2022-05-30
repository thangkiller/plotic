import { useReducer } from "react";

//init  state
const initState = "";
// Actions
const SETTASK = "set_task";
const settask = (payload) => {
	return {
		type: "set_task",
		payload,
	};
};
//Reducer
const reducer = (state, action) => {
	console.log("action", action);
	switch (action.type) {
		case SETTASK:
			state = action.payload;
			break;
		default:
			throw new Error("invalid action");
	}
};

//dispatch

function Container() {
	const [task, dispatch] = useReducer(initState, reducer);
	return (
		<div style={{ margin: "20px" }}>
			<h1>ToDo</h1>
			<input
				type="text"
				value={task}
				placeholder="please todo"
				onChange={(e) => dispatch(settask(e.target.value))}
			/>
			<button>add</button>
			<ul>
				<li>thanh cong</li>
			</ul>
		</div>
	);
}
export default Container;
