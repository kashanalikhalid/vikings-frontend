import {useState} from "react";
import '../assets/css/invoice.css'
import gymlogo from "../assets/img/Vikings main copy.svg"
import applogo from "../assets/img/appcraft logo.svg"
import {useDispatch, useSelector} from "react-redux";

function Receipt() {
    const dispatch= useDispatch();
    const {member} =useSelector(state=>state.receipt)


    return (
        <div className={"invoice__container"}>
            <img src={gymlogo} className="invoice__gymlogo"></img>
            <div className="invoice__address">Chaudhry Plaza, Street 3, Waris khan, Rawalpindi</div>
            <div className="invoice__number">051-2711832</div>
            <table className="invoice__table">
                <tbody>
                <tr className="invoice__tablerowh">
                    <th className="invoice__tableheader">Name</th>
                    <th className="invoice__tableheader">Membership</th>
                    <th className="invoice__tableheader">Amount</th>
                </tr>
                <tr className="invoice__tablerow" style={{paddingTop:"30px"}}>
                    <td className="invoice__tabledirectory">{member.name}</td>
                    <td className="invoice__tabledirectory">{member.membership==='Weight Training'? 'strength' :'cardio'}</td>
                    <td className="invoice__tabledirectory">{member.fee}</td>
                </tr>
                </tbody>
            </table>

            <div className="invoice__date"> <strong>Date </strong>{member.date}</div>
            <div className="invoice__notice">&#40;Please keep this invoice until the next fee is paid&#41;</div>
            <div className="invoice__footer">
                <div className="invoice__app">System developed by:</div>
                <img className="invoice__applogo" src={applogo}></img>
                <div className="invoice__appnumber">+92 333 1564810</div>
            </div>

             <button onClick={()=>{
            window.print();
        }
        } id="btnPrint" className="hidden-print">Print</button>

        </div>
    );
}

export default Receipt;
