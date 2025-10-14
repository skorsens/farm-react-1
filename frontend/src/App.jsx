import Header from "./components/Header.jsx";
import './App.css';

export default function App() {
      const data = [{
            id: 1,
            name: "Fiat"
        },
        {
            id: 2,
            name: "Peugeot"
        },
        {
            id: 3,
            name: "Ford"
        },
        {
            id: 4,
            name: "Renault"
        },
        {
            id: 5,
            name: "Citroen"
        }
    ]
    return (
    <div className="bg-purple-800 text-white min-h-screen p-4 flex flex-col justify-center  items-center">
      <Header/>
      <div className="grid grid-cols-1 gap-4">
          {data.map((el) => {
              return (
                  <div key={el.id}>
                      Cars listed as{"  "}
                      <span className="font-bold">{el.name.toUpperCase()}</span>
                  </div>
              )
          }
          )}
      </div>
    </div>
  )
}
