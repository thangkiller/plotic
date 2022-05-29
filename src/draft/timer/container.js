import { useReducer } from "react";

//init  state
let initState = 0;

// Actions
const UP_ACTION = "up_action";
const DOWN_ACTION = "down_action";

//Reducer
const reducer = (state, action) => {
	switch (action) {
		case UP_ACTION:
			return state + 1;
		case DOWN_ACTION:
			return state - 1;
		default:
			throw new Error("invalid action");
	}
};

//dispatch

function Container() {
	const [count, dispatch] = useReducer(reducer, initState);
	return (
		<div style={{ margin: "20px" }}>
			<h1
				style={{
					padding: "20px",
					paddingBottom: "0",
					fontSize: "60px",
				}}
			>
				{count}
			</h1>
			<button onClick={() => dispatch(DOWN_ACTION)}>down</button>
			<button onClick={() => dispatch(UP_ACTION)}>up</button>
		</div>
	);
}
export default Container;
