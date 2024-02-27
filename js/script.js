let inputName = document.querySelector("#pNameId");
let inputPrice = document.querySelector("#pPriceId");
let inputCat = document.querySelector("#pcatId");
let inputDesc = document.querySelector("#pDescId");

let ma5zan  ;
let currentIndex;
if(localStorage.getItem("productList") == null)
{
   ma5zan =[]
} else{
    ma5zan = JSON.parse(localStorage.getItem("productList"));
    displayProduct();
}

function addProduct(){
    
    let oneProduct = {
        NameValue : inputName.value ,
       PriceValue : inputPrice.value ,
       CatValue : inputCat.value ,
       DescValue : inputDesc.value
    }
    ma5zan.push(oneProduct);
    localStorage.setItem("productList" , JSON.stringify(ma5zan))
    displayProduct();
    clearInputs();
}

function displayProduct() 
{
    let hasalah = ""
   for (let i = 0; i < ma5zan.length; i++) 
   {
    hasalah += `
       <tr>
            <td>${ma5zan[i].NameValue}</td>
            <td>${ma5zan[i].PriceValue}</td>
            <td>${ma5zan[i].CatValue}</td>
            <td>${ma5zan[i].DescValue}</td>
            <td>
              <button  onclick=(updateProduct(${i})) class="btn btn-outline-warning">Update</button>
            </td>
            <td>
              <button class="btn btn-outline-danger" onclick="deleteProduct(${i})">Delete</button>
            </td>
       </tr>
    `
   }
    document.getElementById("tBody").innerHTML = hasalah
}
function clearInputs()
{
    inputName.value =" "
    inputPrice.value =" "
    inputCat.value =" "
    inputDesc.value= " "   
}

function deleteProduct(index) 
{
    ma5zan.splice(index ,1)
    displayProduct();
    localStorage.setItem("productList" , JSON.stringify(ma5zan))
}

// ****** Search ************ //
// Search by Name 
function searchProductName(userWord) 
{
    let hasalah = " "
   for (let i = 0; i < ma5zan.length; i++) {
         if (ma5zan[i].NameValue.toLowerCase().includes(userWord.toLowerCase())) 
         {
            hasalah += `
            <tr>
                 <td>${ma5zan[i].NameValue}</td>
                 <td>${ma5zan[i].PriceValue}</td>
                 <td>${ma5zan[i].CatValue}</td>
                 <td>${ma5zan[i].DescValue}</td>
            </tr> `
         }
   }   
   document.getElementById("tBody").innerHTML =hasalah
}
// search by category 
function searchProductCategory(userCateg)
{
    let hasalah =""
    for (let i = 0; i < ma5zan.length; i++) {
        if (ma5zan[i].CatValue.toLowerCase().includes(userCateg.toLowerCase())) {
            hasalah += `
            <tr>
                 <td>${ma5zan[i].NameValue}</td>
                 <td>${ma5zan[i].PriceValue}</td>
                 <td>${ma5zan[i].CatValue}</td>
                 <td>${ma5zan[i].DescValue}</td>
            </tr> `
        }
    }   
    document.getElementById("tBody").innerHTML =hasalah 
}
// ********** Update *************

function updateProduct(pIndex)
{
    currentIndex = pIndex;
   // console.log(ma5zan[pIndex])
    inputName.value = ma5zan[pIndex].NameValue;
    inputPrice.value =ma5zan[pIndex].PriceValue;
    inputCat.value = ma5zan[pIndex].CatValue;
    inputDesc.value = ma5zan[pIndex].DescValue;
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("saveBtn").style.display = "block";
}

function saveChange()
{
     ma5zan[currentIndex].NameValue =  inputName.value;
    ma5zan[currentIndex].PriceValue = inputPrice.value ;
     ma5zan[currentIndex].CatValue = inputCat.value ;
   ma5zan[currentIndex].DescValue =  inputDesc.value ;
   
    displayProduct()
    clearInputs()
    localStorage.setItem("ourStore" , JSON.stringify(ma5zan))
    document.getElementById("addBtn").style.display = "block";
    document.getElementById("saveBtn").style.display = "none";
}
