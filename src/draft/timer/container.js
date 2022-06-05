import { useReducer, useRef } from "react";

//init  state
const initState = {
	job: "",
	jobs: [],
};
// Actions
const SETTASK = "set_task";
const ADDTASK = "add_task";
const DELETETASK = "delete_task";
const setTask = (payload) => {
	return {
		type: SETTASK,
		payload,
	};
};
const addTask = () => {
	return {
		type: ADDTASK,
	};
};
const deleteTask = (pos) => {
	return {
		type: DELETETASK,
		pos,
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
		case ADDTASK:
			if (state.job === "") return state;
			return {
				jobs: [...state.jobs, state.job],
				job: "",
			};
		case DELETETASK:
			state.jobs.splice(action.pos, 1);
			return { ...state };
		default:
			throw new Error("invalid action");
	}
};

//dispatch

function Container() {
	const [state, dispatch] = useReducer(reducer, initState);
	const { job, jobs } = state;
	const inputRef = useRef();
	return (
		<div style={{ margin: "20px" }}>
			<h1>ToDo</h1>
			<input
				type="text"
				value={job}
				ref={inputRef}
				placeholder="please todo"
				onChange={(e) => dispatch(setTask(e.target.value))}
			/>
			<button
				onClick={() => {
					dispatch(addTask());
					inputRef.current.focus();
				}}
			>
				add
			</button>
			<ul>
				{jobs.map((job, i) => (
					<div
						key={i}
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "150px",
						}}
					>
						<li>{job}</li>
						<button onClick={() => dispatch(deleteTask(i))}>
							x
						</button>
					</div>
				))}
			</ul>
		</div>
	);
}
export default Container;
