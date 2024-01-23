const Welcome = (props) => {
    const { name, greeting } = props
    return (<h1 className="message">{greeting}, {name}</h1>)
}

const Greetings = () => (
    <div>
        <Welcome name="Venkat" greeting="Hello" />
        <Welcome name="Naveen" greeting="Namasthe" />
    </div>
)

ReactDOM.render(
    <Greetings />
    , document.getElementById("root"));