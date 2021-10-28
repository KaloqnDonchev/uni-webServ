import './Item.css'

function Item(props) {
  return (
      <div>
        {props.singleItem.name} брой: {props.singleItem.count}
        <button className="rounded" onClick={()=>props.increaceItemCount(props.singleItem.id)} >+</button>
        <button className="rounded" onClick={()=>props.decreaseItemCount(props.singleItem.id)}>-</button>
        <button className="rounded" onClick={()=>props.deleteItem(props.singleItem.id)}>X</button>
      </div>
  )
}

export default Item;