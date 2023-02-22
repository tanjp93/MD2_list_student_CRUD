import React from 'react';
import Student from './Student';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { act_get_std } from '../redux/action';
const ListStudents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(act_get_std())
  }, [])

  return (
    <div className="card-body">
      <h3 className="card-title">Danh sách sinh viên</h3>
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <Student />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudents;
