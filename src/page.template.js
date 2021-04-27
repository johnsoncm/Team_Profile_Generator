

//html template goes here
// use bootstrap cards

function renderHtml(type, name, title, id, email, office ) {
return 
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>My Team</title>
</head>

<body>
  <!------Header goes here------>  
<div class="header">
    <h1 class="header-text">
        My Team
    </h1>
</div>

<!-------Cards go here------->
<div id="cards-align">

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${type}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${title}</li>
    <li class="list-group-item">${id}</li>
    <li class="list-group-item">${email}</li>
    <li class="list-group-item">${office}</li>
  </ul>
</div>
</div>
<div id="cards-align">

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${type}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${title}</li>
    <li class="list-group-item">${id}</li>
    <li class="list-group-item">${email}</li>
    <li class="list-group-item">${office}</li>
  </ul>
</div>
</div>
<div id="cards-align">

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${type}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${title}</li>
    <li class="list-group-item">${id}</li>
    <li class="list-group-item">${email}</li>
    <li class="list-group-item">${office}</li>
  </ul>
</div>
</div>
<div id="cards-align">

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${type}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${title}</li>
    <li class="list-group-item">${id}</li>
    <li class="list-group-item">${email}</li>
    <li class="list-group-item">${office}</li>
  </ul>
</div>
</div>
<div id="cards-align">

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${type}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${title}</li>
    <li class="list-group-item">${id}</li>
    <li class="list-group-item">${email}</li>
    <li class="list-group-item">${office}</li>
  </ul>
</div>
</div>


</body>

</html>`

}

module.exports={
    renderHtml
};

