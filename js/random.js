// original url : https://randomuser.me/api/?results=5000
// url for single data : https://randomuser.me/api/?results=1

// function to get data and load user
const loadUser = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
}
loadUser()
// function to display cards
const displayUser = (user) => {
    console.log(user);
    const cardDiv = document.getElementById('card-container');
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src=${user.picture.large} class="card-img-top" alt="">
            <div class="card-body bg-primary">
                <p class="card-text text-white">
                    Street : ${user.location.street.name}<br>
                    Street No : ${user.location.street.number}<br>
                    City : ${user.location.city}<br>
                    Coordinate : Latitude ${user.location.coordinates.latitude}, Longitude ${user.location.coordinates.longitude} <br>
                    TimeZone : ${user.location.timezone.description}, ${user.location.timezone.offset}
                </p>
            </div>
        </div>
    `
    cardDiv.appendChild(newDiv);
}
