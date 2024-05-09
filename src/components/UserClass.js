import React from 'react';
class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: { name: 'Dummy', location: 'Default' },
		};
	}
	async componentDidMount() {
		const data = await fetch('https://api.github.com/users/sharmaayush1315');
		const json = await data.json();
		console.log(json);
		this.setState({ userInfo: json });
	}
	render() {
		const { name, location, avatar_url } = this.state.userInfo;

		return (
			<div className="user-card">
				<img className="avatar-img" src={avatar_url} />
				<h3>{name}</h3>
				<h3>{location}</h3>
			</div>
		);
	}
}

export default UserClass;
