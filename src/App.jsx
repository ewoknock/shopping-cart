import { 
  useState,
  useRef
} from 'react'
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([])

  const dialogRef = useRef(null);

  const toggleDialog = () => {
    if(!dialogRef.current){
      return
    }
    dialogRef.current.hasAttribute("open") ? dialogRef.current.close() : dialogRef.current.showModal();
  }

  return (
    <>
      <Header cart={cart} toggleDialog={toggleDialog} />
      <main>
        <Outlet context={[cart, setCart]} />
        <Cart 
          toggleDialog={toggleDialog}
          ref={dialogRef}
          cart={cart}
          updateCart={(newCart) => setCart(newCart)}
          >
            {cart}
          </Cart>
      </main>
    </>
  )
}

export default App
