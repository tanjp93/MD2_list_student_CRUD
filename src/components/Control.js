import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_search_std } from '../redux/action';


const Control = (props) => {
    const [control, setControl] = useState({
        inputSearch: '',
        sort: ''
    })
  
    const handleToggle = () => {
        props.setIsToggle(!props.isToggle)
    }
    //handle Change
    const handleControl = (e) => {
        let key = e.target.name
        setControl({...control,[key]:e.target.value})
    }
    //handle Click
    const dispatch=useDispatch()
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(act_search_std(control.inputSearch))
    }
    return (
        <>
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <button type="button" className="btn btn-primary btn-icon-text" onClick={handleToggle}>
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                onChange={handleControl}
                                value={control.inputSearch}
                                name='inputSearch'
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                            />
                            <button className="btn btn-primary btn-icon-text" onClick={handleSearch}>
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select name='sort'
                            value={control.sort} className="form-control" onChange={handleControl}>
                            <option value="">Sắp xếp</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Control;
