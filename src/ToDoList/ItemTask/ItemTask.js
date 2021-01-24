import { useState, useEffect } from "react";
import './ItemTask.css';
import DetailTable from '../DetailTable/DetailTable'

export default function ItemTask(props) {
    const { items, setTasks, date, isSelected } = props;
    const [openDetail, isOpenDetail] = useState(false);
    const [updateTitle, setUpdateTitle] = useState(items.title);
    const [updateDescription, setUpdateDescription] = useState(items.description);
    const [updatePiority, setUpdatePiority] = useState(items.piority);
    const [checked, setChecked] = useState(false);

    const handleRemove = () => {
        setTasks((prev) => prev.filter((e) => e.id != items.id));
    };
    const handleDetail = (e) => {
        isOpenDetail(true);
    };
    const onUpdate = () => {
        isOpenDetail(false);
        setTasks((prev) => {
            const itemEdit = prev.find(x => x.id === items.id);
            itemEdit.title = updateTitle;
            itemEdit.description = updateDescription;
            itemEdit.piority = updatePiority;
            return prev;
        });
    }
    const onChangeCheck = (e) => {
        setChecked(e.target.checked);
        isSelected({
            checked: e.target.checked,
            id: items.id
        });
    }
    return (
        <div>
            <div className='box-item'>
                <div className='center-box'>
                    <input type="checkbox" onChange={onChangeCheck} />
                    <p style={{marginLeft: '10px'}}>{items.title}</p>
                </div>

                <div className='button-box'>
                    <button className='detail-button' onClick={handleDetail}>Detail</button>
                    <button className='remove-button' onClick={handleRemove}>Remove</button>
                </div>

            </div>
            {openDetail && (
                <DetailTable
                    onSubmit={onUpdate}
                    valueTitle={items.title}
                    valueDescription={updateDescription}
                    valueDate={date}
                    valuePiority={updatePiority}
                    onChangeTitle={e => setUpdateTitle(e.target.value)}
                    onChangeDescription={e => setUpdateDescription(e.target.value)}
                    onChangePiority={e => setUpdatePiority(e.target.value)}
                />
            )}
        </div>
    );
}