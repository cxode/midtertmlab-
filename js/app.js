/* 
   Data / Initial State
    */

const INITIAL_PROFILE = {
  name: "Maria Santos",
  program: "BS Information Technology",
  year: "3rd Year",
  status: "active",
  studentId: "2026-001"
};

/* 
   DOM Selection
    */

const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");
const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay =
  document.getElementById("studentIdDisplay") ||
  document.getElementById("studentIDDisplay");
const formMessage = document.getElementById("formMessage");

const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");

const updateBtn = document.getElementById("updateBtn");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");
const profileForm = document.getElementById("profileForm");

/* 
   Utility Functions
    */

function isValidStudentName(name) {
  return typeof name === "string" && name.trim().length >= 2;
}

function formatStudentStatus(status) {
  if (status === "active") return "Active";
  if (status === "inactive") return "Inactive";
  return "Inactive";
}

/* 
   Display / State Functions*/

function setStatus(status) {
  if (!profileCard || !profileStatus) return;

  const normalizedStatus = status === "inactive" ? "inactive" : "active";

  profileStatus.textContent = formatStudentStatus(normalizedStatus);
  profileCard.dataset.status = normalizedStatus;

  profileCard.classList.remove("active", "inactive");
  profileCard.classList.add(normalizedStatus === "active" ? "active" : "inactive");
}

function updateProfile() {
  if (!nameInput || !profileName) return;

  const enteredName = nameInput.value;

  if (!isValidStudentName(enteredName)) {
    if (formMessage) {
      formMessage.textContent = "Student name is required";
    }
    return;
  }

  profileName.textContent = enteredName.trim();

  if (profileProgram && programInput) {
    profileProgram.textContent = programInput.value;
  }

  if (profileYear && yearInput) {
    profileYear.textContent = yearInput.value;
  }

  if (statusInput) {
    setStatus(statusInput.value);
  }

  if (formMessage) {
    formMessage.textContent = "Profile updated successfully.";
  }
}

function toggleDetails() {
  if (detailsPanel) {
    detailsPanel.classList.toggle("hidden");
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function resetProfile() {
  if (!profileCard) return;

  const { name, program, year, status, studentId } = INITIAL_PROFILE;

  profileName.textContent = name;
  profileProgram.textContent = program;
  profileYear.textContent = year;
  profileStatus.textContent = "Active";

  profileCard.dataset.studentId = studentId;
  profileCard.dataset.status = status;

  profileCard.classList.remove("active", "inactive");
  profileCard.classList.add("active");

  if (studentIdDisplay) {
    studentIdDisplay.textContent = `Student ID: ${profileCard.dataset.studentId}`;
  }

  if (nameInput) nameInput.value = name;
  if (programInput) programInput.value = program;
  if (yearInput) yearInput.value = year;
  if (statusInput) statusInput.value = status;

  if (formMessage) formMessage.textContent = "";

  if (detailsPanel) {
    detailsPanel.classList.remove("hidden");
  }

  document.body.classList.remove("dark-theme");
}

/* 
   Initialization
    */

function init() {
  if (profileCard && studentIdDisplay) {
    studentIdDisplay.textContent = `Student ID: ${profileCard.dataset.studentId}`;
  }

  if (profileCard) {
    setStatus(profileCard.dataset.status || "active");
  }
}

/* 
   Event Listeners
    */

if (profileForm) {
  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateProfile();
  });
} else if (updateBtn) {
  updateBtn.addEventListener("click", updateProfile);
}

if (toggleDetailsBtn) {
  toggleDetailsBtn.addEventListener("click", toggleDetails);
}

if (themeBtn) {
  themeBtn.addEventListener("click", toggleTheme);
}

if (resetBtn) {
  resetBtn.addEventListener("click", resetProfile);
}

/* 
   Start
    */

init();

window.isValidStudentName = isValidStudentName;
window.formatStudentStatus = formatStudentStatus;
window.updateProfile = updateProfile;
window.setStatus = setStatus;
window.toggleDetails = toggleDetails;
window.toggleTheme = toggleTheme;
window.resetProfile = resetProfile;
