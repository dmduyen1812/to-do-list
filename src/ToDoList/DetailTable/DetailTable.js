import { useState } from "react";
import { ReactComponent as Calendar } from '../../calendar.svg'


export default function DetailTable(props) {
    const {
        onSubmit,
        valueTitle,
        valueDate,
        valueDescription,
        onChangeTitle,
        onChangeDescription,
        onChangePiority,
        valuePiority,
    } = props;

    const [requiredText, setRequiredText] = useState(false)


    return (
        <form style={{border: '1px solid', padding: '30px', borderTop: 'none'}} onSubmit={onSubmit}>
            <div className='box-component' style={{marginTop: '0px'}}>
                <input
                    className="input-newtask"
                    type="text"
                    defaultValue={valueTitle}
                    onChange={onChangeTitle}
                    placeholder="Add new task..."
                />
                {requiredText && <span style={{ alignSelf: 'flex-end', color: 'red' }}>Required Field.</span>}
            </div>

            <div className='box-component'>
                <label className='label-title'>Description</label>
                <textarea
                    className="description"
                    rows="5"
                    value={valueDescription}
                    onChange={onChangeDescription}
                />
            </div>

            <div className='date-priority'>
                <div className='box-component'>
                    <label className='label-title'>Due Date</label>
                    <div className='date-box'>
                        <span style={{ marginLeft: '5px' }}>{valueDate}</span>
                        <span className='icon-box'><Calendar width={20} height={20} /></span>
                    </div>
                </div>
                <div className='box-component'>
                    <label className='label-title'>Piority</label>

                    <select className='date-box' value={valuePiority} onChange={onChangePiority}>
                        <option value="Normal">Normal</option>
                        <option value="Low">Low</option>
                        <option value="High">High</option>
                    </select>
                </div>

            </div>
            <button className='add-button'>Update</button>
            {/* <input
                className="input-newtask"
                type="text"
                defaultValue={valueTitle}
                onChange={onChangeTitle}
                placeholder="Add new task..."
            />
            <p>Description</p>
            <textarea
                type="text"
                className="description"
                rows="5"
                value={valueDescription}
                onChange={onChangeDescription}
            />
            <p>Due Date</p>
            <input value={valueDate} readOnly />
            <select type="select" value={valuePiority} onChange={onChangePiority}>
                <option value="Normal">Normal</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
            </select>
            <button className="add-button">Update</button> */}
        </form>
    );
}