import { useEffect } from 'react'
import SignUp from '../components/registration/Registration'

const Registration = () => {
	useEffect(() => {
		document.body.classList.add('reg-and-log')
		return () => {
			document.body.classList.remove('reg-and-log')
		}
	}, [])
	return <SignUp />
}

export default Registration
