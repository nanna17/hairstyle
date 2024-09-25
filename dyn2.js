// Data array to store hairstyles
let data = [];

// Function to create a new hairstyle
function createHairstyle(hairstyle) {
  data.push(hairstyle);
  buildHairstyleCard(hairstyle);
}

// Function to build a hairstyle card
function buildHairstyleCard(hairstyle) {
  const hairstyleCard = document.createElement("div");
  hairstyleCard.className = "hairstyle-card";
  hairstyleCard.innerHTML = `
    <h2>${hairstyle.name}</h2>
    <p>${hairstyle.description}</p>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  const hairstyleContainer = document.querySelector(".hairstyle-container");
  hairstyleContainer.appendChild(hairstyleCard);
}

// Function to update a hairstyle
function updateHairstyle(hairstyleId, updatedHairstyle) {
  const index = data.findIndex(hairstyle => hairstyle.id === hairstyleId);
  if (index !== -1) {
    data[index] = updatedHairstyle;
    buildHairstyleCard(updatedHairstyle);
  }
}

// Function to delete a hairstyle
function deleteHairstyle(hairstyleId) {
  let nonDeletedHairstyles = data.filter(hairstyle => hairstyle.id !== hairstyleId);
  const hairstyleContainer = document.querySelector(".hairstyle-container");
  hairstyleContainer.innerHTML = "";
  nonDeletedHairstyles.forEach(hairstyle => {
    buildHairstyleCard(hairstyle);
  });
}

// Event listener for create button
const createBtn = document.querySelector(".create-btn");
createBtn.addEventListener("click", () => {
  const hairstyleName = document.querySelector(".hairstyle-name").value;
  const hairstyleDescription = document.querySelector(".hairstyle-description").value;
  const newHairstyle = { id: Date.now(), name: hairstyleName, description: hairstyleDescription };
  createHairstyle(newHairstyle);
});

// Event listener for edit button
document.addEventListener("click", event => {
  if (event.target.classList.contains("edit-btn")) {
    const hairstyleId = event.target.parentNode.dataset.id;
    const updatedHairstyleName = prompt("Enter new hairstyle name:");
    const updatedHairstyleDescription = prompt("Enter new hairstyle description:");
    const updatedHairstyle = { id: hairstyleId, name: updatedHairstyleName, description: updatedHairstyleDescription };
    updateHairstyle(hairstyleId, updatedHairstyle);
  }
});

// Event listener for delete button
document.addEventListener("click", event => {
  if (event.target.classList.contains("delete-btn")) {
    const hairstyleId = event.target.parentNode.dataset.id;
    deleteHairstyle(hairstyleId);
  }
});