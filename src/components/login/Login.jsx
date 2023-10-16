import './login.scss'
import { NavLink } from 'react-router-dom'

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {

  // const onLogin = e => {
	// 	e.preventDefault()
	// }

return (
  <div className="wrapper">
  <div className="header">
    <h3 className="sign-in">Sign in</h3>
    <NavLink to='/registration'>
    <div className="button">Register</div>
    </NavLink>
  </div>
  <div className="clear"></div>
  <form action="#">
    <div>
      <label className="user" htmlFor="text">
        <PersonIcon />
      </label>
      <input className="user-input" type="text" name="name" id="name" placeholder="My name is" />
    </div>
    <div>
      <label className="lock" htmlFor="password">
        <LockIcon />
      </label>
      <input type="password" name="name" id="name" placeholder="" />
    </div>
    <div>
      <input type="submit" value="Sign in" />
    </div>
  </form>
</div>
)
}

export default Login