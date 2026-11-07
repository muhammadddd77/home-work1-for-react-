import Card from "./components/card";

const App = () => {
    const data = [
        {
            id: 1,
            title: "Muhammad",
            age: 17
        },
        {
            id: 2,
            title: "Muhammad",
            age: 17
        },
        {
            id: 3,
            title: "Muhammad",
            age: 17
        }
    ];

    return (
        <div>
            {
                data.map((e) => {
                    return <Card key={e.id} {...e} />
                })
            }
        </div>
    );
};

export default App;
