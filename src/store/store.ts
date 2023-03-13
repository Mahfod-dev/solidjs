import { createSignal,createResource } from "solid-js";
import { Product } from "../interface/product";

export const [search, setSearch] = createSignal('');
export const [cart, setCart] = createSignal<Product[]>([]);


export const onAddToCart = (product: Product) => {
    const currentCart = cart();
    setCart([...currentCart, product]);
};

export const onClearCart = () => {
    setCart([]);
};

export const onSetSearch = (value: string) => {
    setSearch(value);
};



export const [products] = createResource<Product[]>(
	() => fetch('https://fakestoreapi.com/products').then((res) => res.json()),
	{
		initialValue: [],
	}
);
