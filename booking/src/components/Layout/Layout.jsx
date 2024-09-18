import withClass from '../hoc/withClass';

function Layout(props) {
	return (
		<>
			<div className='container'>{props.header}</div>
			<div className='container'>{props.menu}</div>
			<div className='container'>{props.content}</div>
			<div className='container'>{props.footer}</div>
		</>
	);
}

export default withClass(Layout, 'Layout');
