import {useState, useEffect} from "react";
import Transaction from "./Transaction";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;

console.log(API)

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    useEffect(()=>{
        axios.get(API + "/transactions")
        .then((res)=>{
            setTransactions(res.data);
        }).catch((err)=>{
            throw err;
        })
    }, []);



return (
    <div className="Transactions">
     <h2> Bank Account Total</h2>
     <ul  className="list-group">
       {transactions.map((transaction ,i)=>(<Transaction key={transaction.id} transaction={transaction} index={i}/>))}
     </ul>

      
    </div>
  );
}


export default Transactions;