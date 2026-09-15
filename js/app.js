
"use strict";

const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");
const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay = document.getElementById("studentIdDisplay");
const formMessage = document.getElementById("formMessage");

const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");

const updateBtn = document.getElementById("updateBtn");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

const card = document.querySelector(".profile-card");


// Check if name is valid
function isValidStudentName(name) {
  return name.trim().length >= 2;
}


function formatStudentStatus(status) {
  if (status === "active") {
    return "Active";
  }

  return "Inactive";
}


function setStatus(status) {
  if (!profileCard || !profileStatus) {
    return;
  }

  profileStatus.textContent = formatStudentStatus(status);

  profileCard.dataset.status = status;

  profileCard.classList.remove("active");
  profileCard.classList.remove("inactive");

  profileCard.classList.add(status);
}


function updateProfile() {
  if (!isValidStudentName(nameInput.value)) {
    formMessage.textContent = "Student name is required";
    return;
  }

  profileName.textContent = nameInput.value.trim();
  profileProgram.textContent = programInput.value;
  profileYear.textContent = yearInput.value;

  setStatus(statusInput.value);

  formMessage.textContent = "Profile updated successfully.";
}


function toggleDetails() {
  detailsPanel.classList.toggle("hidden");
}


function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}


function resetProfile() {
  nameInput.value = "Maria Santos";
  programInput.value = "BS Information Technology";
  yearInput.value = "3rd Year";
  statusInput.value = "active";

  profileName.textContent = "Maria Santos";
  profileProgram.textContent = "BS Information Technology";
  profileYear.textContent = "3rd Year";

  setStatus("active");

  const studentId = profileCard.dataset.studentId;
  studentIdDisplay.textContent = "Student ID: " + studentId;

  detailsPanel.classList.remove("hidden");
  document.body.classList.remove("dark-theme");

  formMessage.textContent = "";
}


// Buttons
updateBtn.addEventListener("click", updateProfile);
toggleDetailsBtn.addEventListener("click", toggleDetails);
themeBtn.addEventListener("click", toggleTheme);
resetBtn.addEventListener("click", resetProfile);
