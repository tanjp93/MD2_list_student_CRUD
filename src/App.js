import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudents from './components/ListStudents';
import FormStd from './components/FormStd';
import { useState } from 'react';


function App() {
  const [isToggle, setIsToggle] = useState(false);

   let showForm = isToggle ? <FormStd /> : ''
  return (
    // <Routes>
    //   <Route>
        <div className="App">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                {/* START CONTROL */}
                <Control setIsToggle={setIsToggle} isToggle={isToggle} />
                {/* END CONTROL */}
                {/* START LIST STUDENT */}
                <ListStudents />
                {/* END LIST STUDENT */}
              </div>
            </div>
            {/* START FORM SINH VIEN */}
            {showForm}
            {/* END FORM SINH VIÊN */}
          </div>
        </div>
    //    </Route>
    // </Routes> 

  );
}

export default App;
