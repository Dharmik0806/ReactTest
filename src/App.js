import './App.css';
import User from './Addmin/container/User';
import Header from './component/header/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './container/home/Home';
import Footer from './component/footer/Footer';
import Aboutus from './container/about/Aboutus';
import Sidedwawer from './Addmin/component/layout/drawer/Sldedrawer';

function App() {
  return (
    <>

      {/* <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
        <Route exact path="/about" component={Aboutus} />
      </Switch>
      <Footer /> */}

      <Sidedwawer>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/user" component={User}/>
        </Switch>
      </Sidedwawer>
    </>
  );
}

export default App;
