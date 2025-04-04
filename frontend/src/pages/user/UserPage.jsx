import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditUser } from "../../store/Thunks/UserThunks";
import { BankAccountCard } from '../../components/bankAccountCard/BankAccountCard';
import bankAccountData from '../../data/BankAccountData.json'

export const UserPage = () => {
  const selectUser = (state) => state.user.user.body;
  const user = useSelector(selectUser); //utilisation de useSelector pour extraire les données de l'utilisateur du store
  const [firstName, setFirstName] = useState(user ? user.firstName : "");
  const [lastName, setLastName] = useState(user ? user.lastName : "");
  const navigate = useNavigate();
  const [editName, setEditName] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const userAccounts = bankAccountData.filter(
    account => account.userId === user.id
  );

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //empêche le rechargement de la page HTML
    console.log(event)
    dispatch(EditUser({ firstName, lastName })); //envoie de l'action EditUser au store
    setEditName(false);
  };

  const handleCancel = () => {
    setEditName(false);
    setFirstName(user ? user.firstName : "");
    setLastName(user ? user.lastName : "");
  };

  if (!user) {
    return null;
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>
        {editName ? (
          <form className="edit-wrapper" onSubmit={handleSubmit}>
            <p>Edit user info</p>
            <div className="edit-form-inputs">              
              <label htmlFor="input-label">First name</label>
              <input type="text" label="First Name :" value={firstName} onChange={handleFirstNameChange} />

              <label htmlFor="input-label">Last Name</label>
              <input type="text" label="Last Name :" value={lastName} onChange={handleLastNameChange} />
            </div>
            <div className="form-buttons">
              <button type="submit" className="edit-button">Save </button>
              <button type="button" className="edit-button" onClick={handleCancel}>Cancel </button>
            </div>
          </form>
        ) : (
          <button className="edit-button" onClick={() => setEditName(true)}>Edit Name</button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {userAccounts.map((account, index) => (
        <BankAccountCard
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}      
    </main>
  )
}
