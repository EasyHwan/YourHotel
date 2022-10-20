import './App.css';
import React from 'react';
import Main from './screens/main/main_screen';
import Result from './screens/result/result_screen';
import Detail from './screens/detail/detail_screen';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Page1_1 from './screens/1/1-1'; import Page1_2 from './screens/1/1-2';
import Page2_1 from './screens/2/2-1'; import Page2_2 from './screens/2/2-2';
import Page3_1 from './screens/3/3-1'; import Page3_2 from './screens/3/3-2';
import Page4_1 from './screens/4/4-1'; import Page4_2 from './screens/4/4-2';
import Page5_1 from './screens/5/5-1'; import Page5_2 from './screens/5/5-2';
import Page6_1 from './screens/6/6-1'; import Page6_2 from './screens/6/6-2';
import Page7_1 from './screens/7/7-1'; import Page7_2 from './screens/7/7-2';
import Page8_1 from './screens/8/8-1'; import Page8_2 from './screens/8/8-2';
import Page9_1 from './screens/9/9-1'; import Page9_2 from './screens/9/9-2';
import Page10_1 from './screens/10/10-1'; import Page10_2 from './screens/10/10-2';
import Page11_1 from './screens/11/11-1'; import Page11_2 from './screens/11/11-2';
import Page12_1 from './screens/12/12-1'; import Page12_2 from './screens/12/12-2';
import Page13_1 from './screens/13/13-1'; import Page13_2 from './screens/13/13-2';
import Page14_1 from './screens/14/14-1'; import Page14_2 from './screens/14/14-2';
import Page15_1 from './screens/15/15-1'; import Page15_2 from './screens/15/15-2';
import Page16_1 from './screens/16/16-1'; import Page16_2 from './screens/16/16-2';
import Page17_1 from './screens/17/17-1'; import Page17_2 from './screens/17/17-2';
import Page18_1 from './screens/18/18-1'; import Page18_2 from './screens/18/18-2';
import Page19_1 from './screens/19/19-1'; import Page19_2 from './screens/19/19-2';
import Page20_1 from './screens/20/20-1'; import Page20_2 from './screens/20/20-2';
import Page21_1 from './screens/21/21-1'; import Page21_2 from './screens/21/21-2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/result' element={<Result />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/Page1_1' element={<Page1_1 />} />
          <Route path='/Page1_2' element={<Page1_2 />} />
          <Route path='/Page2_1' element={<Page2_1 />} />
          <Route path='/Page2_2' element={<Page2_2 />} />
          <Route path='/Page3_1' element={<Page3_1 />} />
          <Route path='/Page3_2' element={<Page3_2 />} />
          <Route path='/Page4_1' element={<Page4_1 />} />
          <Route path='/Page4_2' element={<Page4_2 />} />
          <Route path='/Page5_1' element={<Page5_1 />} />
          <Route path='/Page5_2' element={<Page5_2 />} />
          <Route path='/Page6_1' element={<Page6_1 />} />
          <Route path='/Page6_2' element={<Page6_2 />} />
          <Route path='/Page7_1' element={<Page7_1 />} />
          <Route path='/Page7_2' element={<Page7_2 />} />
          <Route path='/Page8_1' element={<Page8_1 />} />
          <Route path='/Page8_2' element={<Page8_2 />} />
          <Route path='/Page9_1' element={<Page9_1 />} />
          <Route path='/Page9_2' element={<Page9_2 />} />
          <Route path='/Page10_1' element={<Page10_1 />} />
          <Route path='/Page10_2' element={<Page10_2 />} />
          <Route path='/Page11_1' element={<Page11_1 />} />
          <Route path='/Page11_2' element={<Page11_2 />} />
          <Route path='/Page12_1' element={<Page12_1 />} />
          <Route path='/Page12_2' element={<Page12_2 />} />
          <Route path='/Page13_1' element={<Page13_1 />} />
          <Route path='/Page13_2' element={<Page13_2 />} />
          <Route path='/Page14_1' element={<Page14_1 />} />
          <Route path='/Page14_2' element={<Page14_2 />} />
          <Route path='/Page15_1' element={<Page15_1 />} />
          <Route path='/Page15_2' element={<Page15_2 />} />
          <Route path='/Page16_1' element={<Page16_1 />} />
          <Route path='/Page16_2' element={<Page16_2 />} />
          <Route path='/Page17_1' element={<Page17_1 />} />
          <Route path='/Page17_2' element={<Page17_2 />} />
          <Route path='/Page18_1' element={<Page18_1 />} />
          <Route path='/Page18_2' element={<Page18_2 />} />
          <Route path='/Page19_1' element={<Page19_1 />} />
          <Route path='/Page19_2' element={<Page19_2 />} />
          <Route path='/Page20_1' element={<Page20_1 />} />
          <Route path='/Page20_2' element={<Page20_2 />} />
          <Route path='/Page21_1' element={<Page21_1 />} />
          <Route path='/Page21_2' element={<Page21_2 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
