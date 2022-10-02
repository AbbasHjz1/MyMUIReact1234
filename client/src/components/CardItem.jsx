import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const CardItem = ({ item, deleteFromLocal, updateMyLocal, updateLocalForAll }) => {
  let { _id, title, price, finalPrice, category, quantity, file } = item
  const [pathImage, setPathImage] = useState('')
  const [qty, setQty] = useState(quantity)
  useEffect(() => {
    let api = "api\\"
    const pathes = item.file.filePath.replace(api, '')
    setPathImage(pathes)
  }, [])
  const updateLocalStorage = () => {
    console.log(quantity)
    let updateItem = { _id, title, price, finalPrice, category, file, quantity }
    localStorage.removeItem(`Item${_id}`)
    localStorage.setItem(`Item${_id}`, JSON.stringify(updateItem))

  }
  const updateQuantity = (e) => {
    setQty(e.target.value)
    quantity = e.target.value
    if (quantity > 0) {
      finalPrice = price * quantity
    }
    updateLocalStorage()
    updateMyLocal()
    updateLocalForAll()
  }
  const RemoveFromLocalStorage = (id) => {
    deleteFromLocal(id)
    updateLocalForAll()
  }

  return (
    <>
      <tr>
        <td data-th="Product">
          <div className="row">
            <div className="col-md-3 text-left">
              <img src={pathImage} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow " />
            </div>
            <div className="col-md-9 text-left mt-sm-2">
              <h5>{item.title}</h5>
            </div>
          </div>
        </td>
        <td data-th="Price">{finalPrice}</td>
        <td data-th="Quantity">
          <input type="number" className="form-control form-control-lg text-center" value={qty} onChange={updateQuantity} min="1" max="9" />
        </td>
        <td className="actions" data-th="">
          <div className="text-right">
            <button onClick={() => RemoveFromLocalStorage(item._id)} className="btn btn-white border-secondary bg-white btn-md mb-2">
              <DeleteIcon />
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default CardItem