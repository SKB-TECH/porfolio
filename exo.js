import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}



function PhoneBookForm({ addEntryToPhoneBook }) {
  const [input, setInput] = useState({
    userFirstname: "",
    userLastname: "",
    userPhone: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value })
  }

  const handleData = (evt) => {
    console.log('sub')
    evt.preventDefault();
    addEntryToPhoneBook(input);
    setInput({
      userFirstname: "",
      userLastname: "",
      userPhone: ""
    })
  }
  const { userFirstname,
    userLastname,
    userPhone } = input;
  return (
    <form onSubmit={handleData} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        value={userFirstname}
        type='text'
        onChange={handleChange}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        value={userLastname}
        type='text'
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        value={userPhone}
        type='text'
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
        onClick={handleData}
      />
    </form>
  )
}

function InformationTable({ data }) {
  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((liste, index) => (
            <tr key={index}>
              <td>{liste.userFirstname}</td>
              <td>{liste.userFirstname}</td>
              <td>{liste.userPhone}</td>
            </tr>
          ))

        }
      </tbody>
    </table>
  );
}

function Application(props) {

  const [data, setData] = useState([])
  const addEntryToPhoneBook = (value) => {
    setData(state => ([...state, value]));
    console.log(data);
  }


  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable data={data} />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);