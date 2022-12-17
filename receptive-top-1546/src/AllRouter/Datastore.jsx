import product from './Mumbai.json'
import Alldata from './Alldata'
import {Link} from 'react-router-dom'
function Datastore(){
   
   console.log(product)
    return(
        <div>
         {product && product.map((e)=>(
            <div>
            <Link key={e.id} to={`allproduct/${e.id}`}><Alldata {...e}/></Link>
            </div>
            
         ))}
        </div>
    )
}

export default Datastore