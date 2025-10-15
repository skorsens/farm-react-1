import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";
import './App.css';

export default function App() {
    const data = [
        { id: 1, name: "Fiat", year: 2023, model: "Panda", price: 12000 },
        { id: 2, name: "Peugeot", year: 2018, model: "308", price: 16000 },
        { id: 3, name: "Ford", year: 2022, model: "Mustang", price: 25000 },
        { id: 4, name: "Renault", year: 2019, model: "Clio", price: 18000 },
        { id: 5, name: "Citroen", year: 2021, model: "C3 Aircross", price: 22000 },
        { id: 6, name: "Toyota", year: 2020, model: "Yaris", price: 15000 },
        { id: 7, name: "Volkswagen", year: 2021, model: "Golf", price: 28000 },
        { id: 8, name: "BMW", year: 2022, model: "M3", price: 45000 },
        { id: 9, name: "Mercedes", year: 2021, model: "A-Class", price: 35000 },
        { id: 10, name: "Audi", year: 2022, model: "A6", price: 40000 }
    ]
    return (
    <div className="bg-purple-800 text-white min-h-screen p-4 flex flex-col justify-center  items-center">
      <Header/>
      <Button />
      <div className="grid grid-cols-1 gap-4">
          {data.map((el) => {
              return (
                  <Card car={el} key={el.id} />
              )
          }
          )}
      </div>
    </div>
  )
}
