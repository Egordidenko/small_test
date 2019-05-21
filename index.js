const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта'
};

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Вода закипит</p>;
	} else {
		return <p>Вода не закипит</p>;
	}
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this._handleChange.bind(this);

		this.state = {
			temperature: ''
		};
	}

	_handleChange(e) {
    this.setState({temperature: e.target.value});
  }

	render() {
		const temperature = this.state.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
			<legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
				<input
					value={temperature}
					onChange={this.handleChange}/>
			</fieldset>
		);
	}
}

class Calc extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
		);
	}

}

ReactDOM.render(
	<Calc />,
  document.getElementById('root')
);
