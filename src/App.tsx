import { Component, createSignal } from 'solid-js';
import { Router } from 'solid-app-router';
import { Header } from './components/Header';
import { Product } from './interface/product';

const App: Component = () => {
	const [search, setSearch] = createSignal('');
  const [cart, setCart] = createSignal<Product[]>([]);

	return (
		
			<Router>
				<Header search={search} onClearCart={()=>setCart([])} onSetSearch={(str)=> setSearch(str)} cart={cart} />
			</Router>
	
	);
};

export default App;
