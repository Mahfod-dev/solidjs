import { Component, ParentComponent, createSignal } from 'solid-js';


const App: Component = () => {

  const [count,setCount] = createSignal(0)

  const increment = () => {
    setCount(count() + 1)
  }

  const decrement = () => {
    setCount(count() - 1)
  }

  return (
		<div class='flex flex-col justify-center items-center'>
			<p class='text-2xl'>
				count: <span class=' text-red-300'>{count()}</span>
			</p>
			<div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>+</button>
			</div>
		</div>
  );
};

export default App;




