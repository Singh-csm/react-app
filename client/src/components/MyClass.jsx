import React from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Styles from './MyClass.module.css'

const MyClass = (props) => {

    // const state = useSelector((state)=> state)

    // const dispatch = useDispatch();

    let history = useHistory();

    return (
    <div className={Styles.container}>
        <table className={Styles.table}>
            <thead>
                <tr style={{textAlign:'center'}}>
                    <th className={Styles.th}>#</th>
                    <th className={Styles.th}>Class</th>
                    <th className={Styles.th}>Date</th>
                    <th className={Styles.th}>Price</th>
                    <th className={Styles.th}></th>
                </tr>
            </thead>
            <tbody>
                {
                        props.state.map((item, idx)=>{
                            return (                    
                                <tr key={idx}>
                                    <td className={Styles.th}>{idx+1}</td>                                                                   
                                    <td className={Styles.th}>{item.title}</td>
                                    <td className={Styles.th}>{item.date}</td>
                                    <td className={Styles.th}>${item.price}</td>
                                    <td className={Styles.th}><button className={Styles.remove_button}>Remove</button></td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td><h3>Total:</h3></td>
                    </tr>
            </tbody>
            
        </table>
        <div>
            <button onClick={()=> {history.goBack()}} className={Styles.back_button}>Back</button>
            <Link to='/users/login'><button className={Styles.enroll_button}>Enroll</button></Link>
        </div>
    </div>
    )
}

function storeData(state){
    return {
        state: state
    }
}
export default connect(storeData)(MyClass)
// export default MyClass