import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";


 

function TransactionDetails() {
    const [transaction, setTransaction] = useState([]);
    let {index} = useParams();
    let navigate = useNavigate();
    
    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
        .then((res)=>{
          setTransaction(res.data);
        }).catch(()=>{
          navigate("/not-found")
        })
    }, []);

    const handleDelete = () =>{
     axios.delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
     .then((res)=>{
         navigate("/transactions")
     }).catch((err)=>{
         console.log(err)
     })
    }

  
return (
    <div className="one">
     <div className="card tex-center">
      <div className="card-header">
          Single Transaction
       </div>
    <p>From: {transaction.from}</p>
    <p>Transaction Detail: {transaction.name}</p>
    <p>Transaction Date: {transaction.date}</p>
    <p>Transaction Amount: {transaction.amount}</p>
    
    </div>
    <div className="btn-group">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button type="button" class="btn btn-outline-primary">Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button type="button" class="btn btn-outline-success">Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button type="button" class="btn btn-outline-danger"  onClick={handleDelete}>Delete</button>
        </div>
        </div>
  </div>
)
}


export default TransactionDetails

