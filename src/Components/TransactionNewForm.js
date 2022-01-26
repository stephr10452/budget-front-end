import React, {useState} from  'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const NewTransaction = ()=>{
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: 0,
        from: "",
      });
      const navigate = useNavigate()
    
      const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
      };
    
      
    
      const handleSubmit = (event) => {
       event.preventDefault();
       axios.post(`${process.env.REACT_APP_API_URL}/transactions`,transaction)
       .then((res)=>{
        navigate("/transactions")
       }).catch((err)=>{
           console.log(err)
       })
      };


    return (
        
        <form onSubmit={handleSubmit}>
        <div class="form-group row">
          <label htmlFor="date" class="col-sm-2 col-form-label">Date:</label>
          <div class="col-sm-10">
          <input
            id="date"
            class="form-control"
            value={transaction.date}
            type="text"
            onChange={handleTextChange}
            placeholder="Date of transaction"
            required
          />
          </div>
          </div>
          <div class="form-group row">
          <label htmlFor="name" class="col-sm-2 col-form-label">Name:</label>
          <div class="col-sm-10">
          <input
            id="name"
            type="text"
            class="form-control"
            value={transaction.name}
            placeholder="Specific location"
            onChange={handleTextChange}
          />
          </div>
          </div>
          <div class="form-group row">
          <label htmlFor="amount" class="col-sm-2 col-form-label">Transaction Amount:</label>
          <div class="col-sm-10">
          <input
            id="amount"
            type="text"
            class="form-control"
            name="amount"
            value={transaction.amount}
            placeholder="transaction amount"
            onChange={handleTextChange}
          />
          </div>
          </div>
          <div class="form-group row">
          <label htmlFor="detail" class="col-sm-2 col-form-label">Transaction Detail:</label>
          <div class="col-sm-10">
          <input
            id="detail"
            type="text"
             class="form-control"
            name="detail"
            placeholder='Transaction Detail'
            value={transaction.from}
            onChange={handleTextChange}
            
         />
          </div>
          </div>
          <br />
          <input type="submit" />
        </form>
     
    );
  }

export default NewTransaction;