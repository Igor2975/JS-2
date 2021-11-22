const goods = [
    { title: 'Shirt', price: 150,img:src='images/Shirts.jpg' },
    { title: 'Socks', price: 50,img:src='images/socks.jpg' },
    { title: 'Jacket', price: 350,img:src='images/jacket.jpg' },
    { title: 'Shoes', price: 250,img:src='images/shoes.jpg' },
  ];
  
  const renderGoodsItem = ({title = '', price = 0, img}) => `
    <div class="goods-item">
    <img class="goods-item-img" width ='180' height ='160' src=${img} alt="#" />
    <h3 class="goods-item-title">${title}</h3>
    <p class="goods-item-price">${price}</p>
    <button class="goods-item-button" type="button">Добавить</button>
    </div>
  `
  
  const renderGoodsList = () => {
    let goodsList = goods.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  renderGoodsList();