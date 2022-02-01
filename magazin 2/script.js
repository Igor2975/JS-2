const goods = [{
    title: 'Shirt',
    price: 150,
    img: src = 'images/Shirts.jpg'
  },
  {
    title: 'Socks',
    price: 50,
    img: src = 'images/socks.jpg'
  },
  {
    title: 'Jacket',
    price: 350,
    img: src = 'images/jacket.jpg'
  },
  {
    title: 'Shoes',
    price: 250,
    img: src = 'images/shoes.jpg'
  },
];

const URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS_POSTFIX = '/catalogData.json';

const service = function (url, postfix) {
  return new Promise((resolve, reject) => {
    fetch(`${url}${postfix}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        resolve(data);
      })
  })
}

const data = JSON.stringify(goods)

class GoodsItem {
  constructor(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
  }

  render() {
    return `
     <div class="goods-item">  
     <img class="goods-item-img" width ='180' height ='160' src=${this.img} alt="#" />
     <h3 class="goods-item-title">${this.title}</h3>
     <p class="goods-item-price">${this.price}</p>
     <button class="goods-item-button" type="button">Добавить</button>
     </div>`;
  }
}
const reformData = (items) => {
  return items.map(({
    product_name,
    ...rest
  }) => {
    return {
      ...rest,
      title: product_name
    }
  })
}

class GoodsList {
  setGoods() {
    return service(URL, GOODS_POSTFIX)
      .then((data) => {
        return reformData(data)
      })
  }
  render() {
    this.setGoods()
      .then((data) => {
        this.goods = data;

        let sum = 0;
        this.goods.forEach(good => {
          sum += good.price
        })
        console.log(sum)

        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good.title, good.price, good.img);
          listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
      });

  }



}

const list = new GoodsList();
list.render()