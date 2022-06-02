import { useReducer } from "react";

//init  state
const initState = {
	job: "",
	jobs: [],
};
// Actions
const SETTASK = "set_task";
const ADDTASK = "add_task";
const settask = (payload) => {
	return {
		type: "set_task",
		payload,
	};
};
const addtask = () => {
	return {
		type: "add_task",
	};
};
//Reducer
const reducer = (state, action) => {
	switch (action.type) {
		case SETTASK:
			return {
				...state,
				job: action.payload,
			};
			break;
		case ADDTASK:
			if (state.job === "") return state;
			return {
				jobs: [...state.jobs, state.job],
				job: "",
			};
		default:
			throw new Error("invalid action");
	}
};

//dispatch

function Container() {
	const [state, dispatch] = useReducer(reducer, initState);
	const { job, jobs } = state;
	return (
		<div style={{ margin: "20px" }}>
			<h1>ToDo</h1>
			<input
				type="text"
				value={job}
				placeholder="please todo"
				onChange={(e) => dispatch(settask(e.target.value))}
			/>
			<button onClick={() => dispatch(addtask())}>add</button>
			<ul>
				{jobs.map((job) => (
					<li key={job}>{job}</li>
				))}
			</ul>
		</div>
	);
}
export default Container;
