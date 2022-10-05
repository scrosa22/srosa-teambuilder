export default function generateTeam(staffArray) {
    let mainHTML = "";
    for (let i = 0; i < staffArray.length; i++) {
      mainHTML += `
      <div class="col-3 employee-card text-white bg-primary mb-3">
      <div class="card-header text-center text-white"><h3>${staffArray[i].role}</h3></div>
      <h5 class="card-title">Name: ${staffArray[i].name}</h5>
      <p class="card-text">ID #: ${staffArray[i].id}</p>
      <p class="card-text">Email: ${staffArray[i].email}</p>`;

      
      if (staffArray[i].role == 'manager') {
        mainHTML += `<p class="card-text">office no: ${staffArray[i].officeNumber}</p></div><div class=col-1></div>`;
      } else if (staffArray[i].role == 'engineer') {
        mainHTML += `<p class="card-text">Username: <p ${staffArray[i].gitusername}">${staffArray[i].gitusername}</p></p></div><div class=col-1></div>`;
      } else {
        mainHTML += `<p class="card-text">School: ${staffArray[i].school}</p></div><div class=col-1></div>`;
      }
    }
  
    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatable" content="ie=edge" />
          <title>Team Profile</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="style.css"/>
        </head>
        <body>
          <header class="hero bg-danger">
            <h1 class="display-3 text-center text-white">Team Profiles</h1>
          </header>
          <main>
            <div class="container">
              <div class="row">
              ${mainHTML}
              </div>
            </div>
          </main>
        </body>
      </html>       
          `;
  }