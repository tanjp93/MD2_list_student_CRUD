import React from 'react';
import { useState ,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { act_ToggleByAdd, act_search_std, act_sort_std } from '../redux/action';


const Control = () => {
    const [control, setControl] = useState({
        inputSearch: '',
        sort:''
    })

    const sortData=control.sort.split("-")


    const [isToggle, setIsToggle] = useState(false)
    const handleToggle = () => {
        dispatch(act_ToggleByAdd(isToggle))
    }
    //handle Change
    const handleControl = (e) => {
        let key = e.target.name
        setControl({ ...control, [key]: e.target.value })
        
    }

    //handle Click
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(act_search_std(control.inputSearch))
    }

    useEffect(() => {
        dispatch(act_sort_std(sortData))
    }, [sortData]);
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
                            <option value="studentName-asc">Sắp xếp theo tên tăng dần (NameASC)</option>
                            <option value="studentName-desc">Sắp xếp theo tên giảm dần (NameDESC)</option>
                            <option value="age-asc">Sắp xếp theo tuổi tăng dần (AgeASC)</option>
                            <option value="age-desc">Sắp xếp theo tuổi giảm dần (AgeDESC)</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Control;
