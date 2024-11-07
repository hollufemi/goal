import styled from 'styled-components';
const Heroeleven = () => {
    return (  
       <Container>
            <h1>Choose the freedom you need.</h1>
            <table>
                <tr>
                  <th></th>
                  <th>Other Banks</th>
                  <th>Kuda</th>
                </tr>

                <tr>
                  <td>Transfer Fee</td>
                  <td>Up to ₦50 plus V.A.T.</td>
                  <td>25 free transfers every month</td>
                </tr>

                <tr>
                  <td>Card Delivery</td>
                  <td></td>
                  <td>Yes</td>
                </tr>

                <tr>
                 <td>Card Maintenance Fee</td>
                 <td>Up to ₦50 per quarter</td>
                 <td>No</td>
                </tr>

                <tr>
                  <td>Alerts</td>
                  <td>Charge for SMS alerts</td>
                  <td>Free instant notifications</td>
                </tr>

                 <tr>
                  <td>Annual Interest</td>
                  <td>4%</td>
                  <td>Up to 15%</td>
                </tr>

                <tr>
                  <td>Bill Payment Fee</td>
                  <td>Up to ₦100 per bill</td>
                  <td>No</td>
               </tr>

               <tr>
                  <td>Instant Reversals</td>
                  <td></td>
                  <td>Yes</td>
                  </tr>

                <tr>
                  <td>Maintenance</td>
                  <td>Yes</td>
                  <td>No</td>
                  </tr>
            </table>

       </Container>
    );
}
 
export default Heroeleven;


const Container = styled.div`
    

    h1{
      color: #40196D;
      text-align: center;
      margin-top: 130px;
    }

    table{
      
      justify-content: space-between;
      margin: auto;
      min-width: 80%;
      text-align: center;
      
      th{
        color: #40196D;
      }

      td{
        border: 1px solid black;
      }
    }

`
