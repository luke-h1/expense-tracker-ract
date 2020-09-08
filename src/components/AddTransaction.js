import React, { Fragment } from 'react';

export const AddTransaction = () => {
  return (
    <Fragment>
      <h3>Add Transaction</h3>
      <form id='form'>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' id='text' placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label html='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' id='amount' placeholder='Enter amount...' />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </Fragment>
  );
};
