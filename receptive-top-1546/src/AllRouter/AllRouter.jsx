import {Routes,Route} from 'react-router-dom'
import Homemain from '../Components/Home/Homemain'
import SignIn from '../Components/Signin/SignIn'
import SignUp from '../Components/Signup/SignUp'
import Alldata from './Alldata'
import Productviews from '../AllRouter/Productview'
import Datastore from '../AllRouter/Datastore'
function AllRouter(){
    return(
        <div>
        <Routes>
        <Route path='/' element={<Homemain/>}/>
        <Route path='/sign_in' element={<SignIn/>}/>
        <Route path='/sign_up' element={<SignUp/>}/>
        <Route path='/allproduct' element={<Datastore/>}></Route>
        <Route path='/allproduct/allproduct/:ids' element={<Productviews/>}></Route>
        </Routes>
        </div>
    )
}
export default AllRouter