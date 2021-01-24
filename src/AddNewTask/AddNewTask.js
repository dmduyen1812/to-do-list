import { useState } from "react";
import "./AddNewTask.css";
import { ReactComponent as Calendar } from '../calendar.svg'

export default function AddNewTask(props) {
    const { setTasks, updating, onUpdate } = props;
    const [titleTask, setTitleTask] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date().toDateString());
    const [piority, setPiority] = useState("Normal");
    const [requiredText, setRequiredText] = useState(false)

    const onSubmit = (e) => {
        if (titleTask.length <= 0) {
            setRequiredText(true)
            return
        } else {
            setRequiredText(false)
            e.preventDefault();
            const arrTask = [{
                id: Date.now(),
                title: titleTask,
                description: description,
                date: date,
                piority: piority,
            }];
            setTasks(prev => arrTask.concat(prev))
            setTitleTask('');
            setDescription('');
            setPiority('Normal');
        }
    };

    return (
        <form className='new-task-container' onSubmit={updating ? onUpdate : onSubmit}>
            <h2>New Task</h2>
            <div className='box-component'>
                <input
                    className="input-newtask"
                    type="text"
                    value={titleTask}
                    onChange={e => setTitleTask(e.target.value)}
                    placeholder="Add new task..."
                />
                {requiredText && <span style={{ alignSelf: 'flex-end', color: 'red' }}>Required Field.</span>}
            </div>

            <div className='box-component'>
                <label className='label-title'>Description</label>
                <textarea
                    className="description"
                    rows="5"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>

            <div className='date-priority'>
                <div className='box-component'>
                    <label className='label-title'>Due Date</label>
                    <div className='date-box'>
                        <span style={{ marginLeft: '5px' }}>{date}</span>
                        <span className='icon-box'><Calendar width={20} height={20} /></span>
                    </div>
                </div>
                <div className='box-component'>
                    <label className='label-title'>Piority</label>
                    <select className='date-box' value={piority} onChange={e => setPiority(e.target.value)}>
                        <option value="Normal">Normal</option>
                        <option value="Low">Low</option>
                        <option value="High">High</option>
                    </select>
                </div>

            </div>
            <button className='add-button'>Add</button>
        </form>
    );
}
