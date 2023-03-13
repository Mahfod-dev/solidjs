import { Component, createSignal, createResource } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import { Header } from './components/Header';
import { Product } from './interface/product';
import { HomePage } from './page/HomePage';

const App: Component = () => {
	const [search, setSearch] = createSignal('');
	const [cart, setCart] = createSignal<Product[]>([]);

	const [products] = createResource<Product[]>(
		() =>
			fetch('https://fakestoreapi.com/products').then((res) =>
				res.json()
			),
		{
			initialValue: [],
		}
	);

	return (
		<>
			<Header
				search={search}
				onClearCart={() => setCart([])}
				onSetSearch={(str) => setSearch(str)}
				cart={cart}
			/>
			<Routes>
				<Route
					path='/'
					element={
						<HomePage
							products={products}
							onAddToCart={(p) => setCart([...cart(), p])}
							search={search}
						/>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
