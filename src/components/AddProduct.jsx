import React, { useState } from 'react';
import {storage, db} from '../config/Config'

const AddProduct = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg'];

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('');
        } else {
            setProductImg(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    const addProducts = (e) => {
        e.preventDefault();
        // console.log(productName, productPrice, productImg);
        const uploadTask = storage.ref('product-images/${productImg.name}').put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        },err=>{
            setError(err.message)
        },()=>{
            storage.ref('product-images').child(productImg.name).getDownloadURL().then(url=>{
                db.collection("Product").add({
                    productName: productName,
                    productPrice: Number(productPrice),
                    productImg:url
                }).then(()=>{
                    setProductName('');
                    setProductPrice(0);
                    setProductImg('');
                    setError('');
                    document.getElementById('file').value='';
                }).catch(err => setError(err.message));
            })
        })
    }

    function proName(e) {
        setProductName(e.target.value);
    }

    function proPrice(e) {
        setProductPrice(e.target.value);
    }

  return (
    <div className='container'>
    <br />
    <h2>ADD PRODUCTS</h2>
    <hr />

    <form onSubmit={addProducts} className="form-group">

    <label value={productName} htmlFor="product-name">Product Name</label>
    <br />
    <input onChange={proName} type="text" className='form-control' required/>
    <br />

    <label htmlFor="product-price">Product Price</label>
    <input onChange={proPrice} type="number" className='form-control' required/>
    <br />

    <label htmlFor="product-img">Product Image </label>
    <input type="file" onChange={productImgHandler} id="file" required/>
    <br />
    <br />
    <button className="btn btn-success btn-md">ADD</button>
    </form>
    {error&&<span>{error}</span>}
    </div>
  )
}

export default AddProduct


