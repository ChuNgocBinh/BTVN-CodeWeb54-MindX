import React from 'react';
import Button from '../Button/Button'

export default function FormAddTasks({ handleAddTask }) {
    const [text, setText] = React.useState('');
    const handleinputChange = (e) => {
        const value = e.target.value;
        setText(value);
    }

    const onAddTask = () => {
        setText('');
        handleAddTask(text);
    }

    return (
        <div className="flex mt-3 ">
            <div className="flex-grow">
                <input
                    type={'text'}
                    placeholder={'Enter New Task'}
                    className="w-full h-full px-2 border rounded"
                    onChange={handleinputChange}
                    value={text}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            onAddTask()
                        }
                    }}
                ></input>
            </div>
            <Button lable={'Add'} bgcolor={'bg-blue-500'} onClick={onAddTask} />
        </div>
    )
}