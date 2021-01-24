import { useState, useEffect } from "react";
import './ToDoList.css';
import ItemTask from './ItemTask/ItemTask'


function BulkAction(props) {
    const { handleDone, handleRemove } = props;
    return (
        <div className='bulk-action'>
            <p>Bulk Action: </p>
            <div>
            <button className='done-button' onClick={handleDone}>Done</button>
            <button className='remove-button' onClick={handleRemove}>Remove</button>
            </div>
           
        </div>
    );
}


export default function ToDoList(props) {
    const { listTask, setTasks } = props;
    const [selected, setSelected] = useState(false);
    const [arrRemove, setArrRemove] = useState([]);
    const [valueSearch, setValueSearch] = useState('');
    const [listSearch, setListSearch] = useState(listTask);

    const isSelected = (checked) => {
        setSelected(checked.checked);
        setArrRemove([checked.id])
    };

    const removeAction = () => {
        console.log(arrRemove)
        setTasks((prev) => prev.filter((e) => e.id != arrRemove[0]));
    }

    const handleDone = () => {
        setSelected(false);
    }

    const onChangeSearch = (e) => {
        const arrTask = listTask.filter((x) => x.title === e.target.value );
        setListSearch(arrTask);
        setValueSearch(e.target.value);
    }

    return (
        <div className='to-do-container'>
            <h2>To Do List</h2>
            <div className='box-component'>
            <input type="text" value={valueSearch} onChange={onChangeSearch} placeholder="Search... "></input>

            </div>
            {valueSearch.length === 0 ? listTask.map((items) => {
                return (
                    <ItemTask
                        key={items.id}
                        setTasks={setTasks}
                        items={items}
                        date={items.date}
                        isSelected={isSelected}
                    />
                );
            }) : listSearch.map((items) => {
                return (
                    <ItemTask
                        key={items.id}
                        setTasks={setTasks}
                        items={items}
                        date={items.date}
                        isSelected={isSelected}
                    />
                );
            })}
            {
                selected && <BulkAction handleDone={handleDone} handleRemove={removeAction} />
            }
        </div>
    );
}
