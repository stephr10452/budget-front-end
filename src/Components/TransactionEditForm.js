import {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom"
function TransactionEditForm() {
    let {index} =  useParams();
    let navigate = useNavigate();
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: 0,
        from: "",
      });
      
    
      const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
      };
    
      
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
          .then((res)=>{
            setTransaction(res.data);
          }).catch((err)=>{
            throw err;
          })
      }, []);

      const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/transactions/${index}`,transaction)
        .then((res)=>{
         navigate("/transactions")
        }).catch((err)=>{
            console.log(err)
        })
       };



    return (
         <div className="New">
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
            required
            
         />
          </div>
          </div>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }

  export default TransactionEditForm
   