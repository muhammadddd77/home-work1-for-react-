import Card from "./components/Card";

const App = () => {
    return (
        <div>
            <h1>CARDS</h1>

            <Card title="Tamriz" age={20} />

            <Card title="Abubakr" age={16}>
                <div>
                    <p>123456789</p>
                </div>
            </Card>

            <Card title="Yusuf" age={16}>
                <div>
                    <p>123456789</p>
                </div>
            </Card>
        </div>
    );
};

export default App;