import './App.css';
import Card from './Card';
import CardBody from './CardBody';
import Button from './Button';
import CardImage from './CardImage';

function App() {
  return (
    <div className="App">
      <Card>
        <CardBody>
          <Button text = {"подробнее"} link = "#" />
        </CardBody>
      </Card>
      <Card>
        <CardImage link={"https://auto.vercity.ru/gallery/img/automobiles/Bugatti/2009%20Bugatti%20Veyron%2016.4%20Centenaire/900x/2009%20Bugatti%20Veyron%2016.4%20Centenaire%20128.jpg"} text={"image"} />
        <CardBody>
          <Button text = {"купить"} link = "#2" />
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
