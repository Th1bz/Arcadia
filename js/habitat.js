const galerieCardAnimal = document.getElementById("allCardAnimal");


let maCardAnimal = getCardAnimal("../Images/Savane/lion.jpg", "nom","race", "sante", "nourriture", "grammage", "dateVeto", "commentaire");

galerieCardAnimal.innerHTML = maCardAnimal;


function getCardAnimal(urlImage, nom, race, sante, nourriture, grammage, dateVeto, commentaire){
    urlImage = sanitizeHtml(urlImage);
    nom = sanitizeHtml(nom);
    sante = sanitizeHtml(sante);
    race = sanitizeHtml(race);
    nourriture = sanitizeHtml(nourriture);
    grammage = sanitizeHtml(grammage);
    dateVeto = sanitizeHtml(dateVeto);
    commentaire = sanitizeHtml(commentaire);
    return `<a class="text-decoration-none">
              <div class="image-card card p-0 m-4 shadow rounded-4" style="width: 15rem">
                <img src="${urlImage}" class="card-img-top object-fit-cover img-card-h rounded-top-4"
                  alt="Elephant" />
                <h5 class="card-title font-subtitle text-center text-secondary bg-dark">
                  ${nom}
                </h5>

                <div class="action-image-buttons">
                  <button type="button" class="btn btn-outline-light text-info" data-bs-toggle="modal"
                    data-bs-target="#EditionCardModal" data-show="connected">
                    <i class="bi bi-pencil-square"></i>
                  </button>
                  <button type="button" class="btn btn-outline-light text-danger" data-bs-toggle="modal"
                    data-bs-target="#DeleteCardModal" data-show="admin">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>

                <div class="card-body">
                  <ul class="card-text list-group-flush p-0">
                    <li class="list-group-item"><strong>Race : </strong><span>${race}</span></li>
                    <li class="list-group-item"><strong>Santé : </strong><span>${sante}</span></li>
                    <li class="list-group-item"><strong>Nourriture : </strong><span>${nourriture}</span></li>
                    <li class="list-group-item"><strong>Grammage nourriture : </strong><span>${grammage}</span>
                    </li>
                    <li class="list-group-item"><strong>Date : </strong><span>${dateVeto}</span></li>
                    <li class="list-group-item"><strong>Avis du véto : </strong><span>${commentaire}</span></li>
                  </ul>
                </div>
              </div>
            </a>`
}