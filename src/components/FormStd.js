import React, { useMemo } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_add_std, act_edit_std, act_update_std } from '../redux/action';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const FormStd = () => {

  const [inputStd, setInputStd] = useState({
    msv: "",
    studentName: "",
    gender: true,
    age: 0,
    birthDay: "",
    birthPlace: "HN",
    address: "",
    id: ""
  })

  const stdEdit = useSelector(state => state.editStd)

  const checkStd = useSelector(state => state.checkStd)


  useEffect(() => {
    checkStd && setInputStd(checkStd)
  }
    , [checkStd])

  const handleOnchangeInput = (e) => {
    let key = e.target.name
    setInputStd({ ...inputStd, [key]: e.target.value })
  }

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(act_add_std(inputStd))
    setInputStd(
      {
        msv: "",
        studentName: "",
        gender: true,
        age: 0,
        birthDay: "",
        birthPlace: "HN",
        address: "",
        id: ""
      }
    )
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(act_update_std(inputStd))
  }

  let buttonForm;
  if (stdEdit) {
    buttonForm = <button type="button" className="btn btn-primary me-2" onClick={handleUpdate}> Update</button>
  } else {
    if (checkStd) {
      buttonForm = ''
    } else { buttonForm = <button type="button" className="btn btn-primary me-2" onClick={handleSubmit}> Submit</button> }
  }







  useEffect(() => {
    (stdEdit) && setInputStd(stdEdit)

  }, [stdEdit])


  return (
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" placeholder='MSV...' value={inputStd.msv} name="msv" onChange={handleOnchangeInput} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="studentName" placeholder='Student name...' onChange={handleOnchangeInput} value={inputStd.studentName} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="age" placeholder='Student age...' onChange={handleOnchangeInput} value={inputStd.age} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="gender" onChange={handleOnchangeInput} value={inputStd.gender}>
                  <option></option>
                  <option value={true}>Nam</option>
                  <option value={false} >Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" name="birthDay" onChange={handleOnchangeInput} placeholder="dd/mm/yyyy" value={inputStd.birthDay} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="birthPlace" onChange={handleOnchangeInput} value={inputStd.birthPlace}>
                  <option value=""></option>
                  <option value="HN">Hà Nội</option>
                  <option value="HCM">TP. Hồ Chí Minh</option>
                  <option value="DN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name="address" onChange={handleOnchangeInput} value={inputStd.address} placeholder='Adress ...' />
              </div>
            </div>
            {buttonForm}
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormStd;
