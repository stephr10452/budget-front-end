import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <table id="myTable" class=" table order-list" >
      <thead>
      <tr>
        <td class="col-sm-4" >  {transaction.date}</td>
        <td class="col-sm-4" >  {transaction.name}</td>
        <td class="col-sm-4">{transaction.from}</td>
        <td class="col-sm-4" >
        <Link to={`/transactions/${index}`}> 
          {transaction.amount}
          </Link>
        </td>
        
      </tr>
      </thead>
      </table>
  );
}

export default Transaction;
