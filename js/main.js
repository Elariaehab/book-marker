var bookNameInput = document.getElementById('bookmarkname')
var bookUrlInput = document.getElementById('bookmarkurl')
 
var productlist =[]
    if (localStorage.getItem('myProducts')){
        productlist = JSON.parse(localStorage.getItem('myProducts'))
        displayProducts()
}

function main(){
    addProducts()
    displayProducts()
    clear()
}
function addProducts(){
    var product ={
        name : bookNameInput.value,
        url : bookUrlInput.value,
    }
    productlist.push(product)
    localStorage.setItem('myProducts' , JSON.stringify(productlist))
}
function  displayProducts(){
    var table =''
    for (var i=0; i< productlist.length; i++){
        table += `
    
    <tr>
                            <td>${i}</td>
                            <td>${productlist[i].name}</td>
                            <td><button class="btn btn-danger btn1"> <i class="fa-solid fa-eye pe-2" pe-2"><i/> <a href="https://www.example.com" target_blank></a> visit</button></td>
                            <td><button onclick='deleteProduct(${i})' class="btn btn-danger btn2 pe-2"> <i class="fa-solid fa-trash-can"><i/> delete</button></td>
                        </tr>
                        `
}
document.getElementById('tbody').innerHTML = table
}
function clear(){
    bookNameInput.value =''
     bookUrlInput.value =''
}
function deleteProduct(index){
    localStorage.setItem('myProducts' , JSON.stringify(productlist))
        productlist.splice(index, 1)
        displayProducts()
}
localStorage.setItem('prodName' , 'apple')