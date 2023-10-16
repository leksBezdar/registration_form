import { useEffect } from 'react'
import Login from "../components/login/Login"

const SignIn = () => {
	useEffect(() => {
		document.body.classList.add('reg-and-log')
		return () => {
			document.body.classList.remove('reg-and-log')
		}
	}, [])
	return <Login />
}

export default SignIn
