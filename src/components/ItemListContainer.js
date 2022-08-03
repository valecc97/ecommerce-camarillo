import './ItemListContainer.css';

function ItemListContainer(props) {
	return (
		<div className="ItemListContainer">
			<h1>{props.itemData.greeting}</h1>
		</div>
	)
}

export default ItemListContainer;