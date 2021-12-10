import React from "react";
import Button from "../Button/Button"

export default function ListTasks({ tasks, handleDeleteTask, handleChecked }) {

	const cls = (task) => {
		if(task.isComplete===true){
			return ' line-through'
		}else{
			return ''
		}
	}

	return (
		<ul className="mt-3">
			{tasks.map((task, index) => (
				
				<li key={index} className={'flex items-center p-1 border rounded'}>
					<div className="mx-2" >
						<input
							type="checkbox"
							value={task.content}
							className="w-4 h-4 cursor-pointer"
							checked={task.isComplete}
							onChange={(e) => { handleChecked(e.target.checked, index) }}
						/>
					</div>

					<div className={`flex-grow ${cls(task)}`}>{task.content}</div>
					<Button
						lable="Delete"
						bgcolor="bg-red-500"
						onClick={() => { handleDeleteTask(index) }} />
				</li>
			))}
		</ul>
	)
}