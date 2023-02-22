import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Student = () => {
  const [studentLists, setStudentLists] = useState([])
  const studentList = useSelector(state => state.students)
  const searchStd = useSelector(state => state.searchStd)

  useEffect(() => {
    let newArr;
    if (searchStd) {
      newArr = studentList.filter((val) => val.studentName.includes(searchStd)
      )
    } else {
      newArr = studentList
    }

    setStudentLists(newArr)

  }, [searchStd])

  useEffect(() => {
    setStudentLists(studentList)
  }, [studentList])




  const elementStd = studentLists?.map((std, index) => (
    <tr key={std.studentId}>
      <td>{index = 1}</td>
      <td>{std.studentId}</td>
      <td>{std.studentName}</td>
      <td>{std.age}</td>
      <td>{std.gender ? "Nam" : "Nu"}</td>
      <td>
        <div className="template-demo">
          <button
            type="button"
            className="btn btn-danger btn-icon-text"
          >
            Xem
          </button>
          <button
            type="button"
            className="btn btn-warning btn-icon-text"
          >
            Sửa
          </button>
          <button
            type="button"
            className="btn btn-success btn-icon-text"
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
