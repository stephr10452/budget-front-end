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

    const transactionAmountArr = transactions.map((transaction)=>{
      return  transaction.amount
    })

    const totalAmount = transactionAmountArr.reduce((acc,curr)=>{
        return Number(acc) + Number(curr)
    },0)
    // console.log(transactionAmount)

    const highlight = () => {
        if (totalAmount < 1000){
            return <div className="text-danger">Bank Acount Total:{totalAmount.toFixed(2)}</div>
        }else if (totalAmount > 0){
            return <div className="text-success">Bank Acount Total:{totalAmount.toFixed(2)}</div>
        }
    }
 
return (
    <div className="Transactions">
     <h2> {highlight()}</h2>
     <ul  className="list-group">
       {transactions.map((transaction ,i)=>(<Transaction key={transaction.id} transaction={transaction} index={i}/>))}
     </ul>

      
    </div>
  );
}


export default Transactions;