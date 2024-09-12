import './App.css';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';
import Menu from './components/Menu/Menu';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';

class App extends Component {
	hotels = [
		{
			id: 1,
			name: 'Pod akacjami',
			city: 'Warszawa',
			rating: 8.3,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam quos reiciendis sequi magni possimus, perspiciatis dignissimos repellendus commodi cumque.',
			image: '',
		},
		{
			id: 2,
			name: 'Dębowy',
			city: 'Lublin',
			rating: 8.8,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam quos reiciendis sequi magni possimus, perspiciatis dignissimos repellendus commodi cumque.',
			image: '',
		},
	];
	state = {
		hotels: [],
		loading: true,
	};

	searchHandler(term) {
		const hotels = [...this.hotels].filter((hotel) =>
			hotel.name.toLowerCase().includes(term.toLowerCase())
		);
		this.setState({ hotels });
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ hotels: this.hotels, loading: false });
			console.log(`component zamontowany`);
		}, 1000);
	}

	render() {
		return (
			<div className='App'>
				<Header onSearch={(term) => this.searchHandler(term)} />
				<Menu />
				{this.state.loading ? (
					<LoadingIcon />
				) : (
					<Hotels hotels={this.state.hotels} />
				)}
			</div>
		);
	}
}

export default App;
