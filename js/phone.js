// fetch using async await
const loadPhones = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const phoneData = await res.json();
  displayPhones(phoneData.data)
}
// load function called with a default data "samsung"
loadPhones('a52');
// function to display the searched or default data
const displayPhones = phones => {
  const noResultContainer = document.getElementById('no-result');
  noResultContainer.innerText = '';
  const phonesContainer = document.getElementById('phone-container');
  phonesContainer.innerText = '';
  //if there is not data (using data array length)
  if (phones.length == "0") {
    const notfoundDiv = document.createElement('div');
    notfoundDiv.classList.add('page_404', 'container');
    notfoundDiv.innerHTML = `
            <div class="container my-0">
              <div class="text-center w-75 mx-auto">
                <div class="four_zero_four_bg">
                  <h4 class="text-center display-3">No Result</h4>
                </div>
                <div class="contant_box_404">
                  <p>Search for something else!</p>
                  <a href="" class="link_404">Go to Home</a>
                </div>
              </div>
            </div>`;
    noResultContainer.appendChild(notfoundDiv);
  } else {
    phones.forEach(phone => {
      // console.log(phone)
      // we are going create the col div so that cold div is created for each phone if i do the col div directly inside the inner html of "phone-container" then it will on show one phone.
      const phoneDiv = document.createElement('div');
      phoneDiv.classList.add('col');
      phoneDiv.innerHTML = `
            <div class="card text-center p-3 rounded-3 bg-light">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text"></p>
                    <button href="#" class="btn btn-primary">View Details</button>
                </div>
            </div>`
      phonesContainer.appendChild(phoneDiv);
    });
  }
  // loading spinner turned off with parameter true
  toggleSpinner(true);
}
//========================loader=================================
// function to toggle spinner
const toggleSpinner = isloading => {
  const loaderSection = document.getElementById('loader');
  if (isloading) {
    loaderSection.classList.add('d-none')
  } else {
    loaderSection.classList.remove('d-none')
  }
}

//================= functions for search ==============================

// common function for the search process
const searchProcess = () => {
  // loading spinner turned on with parameter false
  toggleSpinner(false);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhones(searchText);
}
// handle search button click
document.getElementById('btn-search').addEventListener('click', function () {
  searchProcess();
})
// event hanfler on input to search on "ENTER" button
document.getElementById('search-field').addEventListener('keyup', function (e) {
  // console.log(e.key)
  if (e.key === 'Enter') {
    searchProcess();
  }
})