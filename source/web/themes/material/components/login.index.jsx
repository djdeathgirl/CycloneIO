class Login extends React.Component {
	render() {
		return (
			<div className='card'>
				<div className='card-content'>
					<span className='card-title'>
						Login into Cyclone
					</span>
					<div className='divider' />
					<div className='row'>
						<form className='col s12'>
							<div className='input-field col s12'>
								<input id='username' type='text' className='validate' />
								<label for='username'>Username</label>
							</div>
							<div className='input-field col s12'>
								<input id='password' type='password' className='validate' />
								<label for='password'>Password</label>
							</div>
							<div className='input-field col s12'>
								<a>Forgot password or username?</a>
							</div>
							<div className='input-field col s6'>
								<label>
									<input type='checkbox' className='filled-in' />
									<span>Remember Me</span>
								</label>
							</div>
							<div className='input-field col s6'>
								<a className='blue waves-effect waves-light btn right'>Login</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Login