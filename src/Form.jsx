import React, { useState } from 'react';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('M');
  const [phone, setPhone] = useState('');

  return <div>
    <table border='1'>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
      <th>Phone</th>
    </tr>
    <tr>
      <td>
        <input value={firstName} onChange={
          event=>{
            setFirstName(event.target.value);
          }
        }></input>
        </td>
      <td><input value={lastName} onChange={
        event=>{
          setLastName(event.target.value);
        }
      }>
      </input></td>
      <td><select value={gender} onChange={
        event=>{
          setGender(event.target.value);
        }
      }>
        <option>M</option>
        <option>F</option>
        <option>X</option>
      </select></td>
      <td><input value={phone} onChange={
        event=>{
          setPhone(event.target.value);
        }
      }></input></td>
      <td>
        <button>Save</button>
      </td>
      <td><button>Cancel</button></td>
    </tr>

  </table>
  </div>
  
} 