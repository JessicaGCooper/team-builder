import React, { useState } from 'react';
import './App.css';

import data from './data'
import Form from './Form'
import Member from './Member'


function App() {

  const [memberData, setMemberData] = useState(data)

  console.log(memberData)

  const addNewMember = member => {
    setMemberData([...memberData, member])
  }

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Team Members</h1>
      </header>
        <Form addNewMember={addNewMember} />
        <Member memberList={memberData} />
    </div>
  );
}

export default App;
