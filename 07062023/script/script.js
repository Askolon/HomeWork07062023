
function fetchPro(){
    fetch('https://fakestoreapi.com/products')
        .then( resp => {
        return resp.json();
        })
        .then(data => {
        data.forEach(product => {
            const container = document.querySelector('body');

            const div = document.createElement('div');
            const title = document.createElement('p');
            const price = document.createElement('p');

            title.textContent = product.title;
            price.textContent = product.price;
            
            div.appendChild(title);
            div.appendChild(price);

            container.append(div);
            });
        })
}

fetchPro();
