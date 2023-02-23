import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { act_add_std, act_check_std, act_del_std, act_edit_std } from '../redux/action';

const Student = () => {
  const studentList = useSelector(state => state.students)

  const dispatch=useDispatch()
  const handleEdit=(std)=>{
    dispatch(act_edit_std(std))
    dispatch(act_check_std(null))
  } 
 
  const handleCheck=(std)=>{
    dispatch(act_check_std(std))
    dispatch(act_edit_std(null))
  }
 
  const handleDelete=(std)=>{
    dispatch(act_del_std(std))
  }

  const elementStd = studentList?.map((std, index) => (
    <tr key={std.id}>
      <td>{index + 1}</td>
      <td>{std.msv}</td>
      <td>{std.studentName}</td>
      <td>{std.age}</td>
      <td>{std.gender ? "Nam" : "Nu"}</td>
      <td>
        <div className="template-demo">
          <button
            type="button"
            className="btn btn-danger btn-icon-text"
            onClick={()=>handleCheck(std)}
          >


            Xem
          </button>
          <button
            type="button"
            className="btn btn-warning btn-icon-text"
            onClick={()=>handleEdit(std)}
          >
            Sửa
          </button>
          <button
            type="button"
            className="btn btn-success btn-icon-text"
            onClick={()=>handleDelete(std)}
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  ))
  return (
    <>
      {elementStd}
    </>
  )
}

export default Student;
