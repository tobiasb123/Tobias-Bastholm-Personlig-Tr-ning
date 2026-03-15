const info = document.querySelector(".info");
const job = document.querySelector(".job");

const formElements = document.querySelectorAll(".form-element");

const infoNext = document.querySelector(".next");
const infoBack = document.querySelector(".back");

function next() {
  if (info.classList.contains("active")) {
    for (let i = 0; i < formElements.length; i++) {
      if (formElements[i].value.length === 0) {
        return;
      }
    }
    info.classList.remove("active");
    job.classList.add("active");
  }
}

function back() {
  if (info.classList.contains("active")) {
    location.assign("index.html");
  }
  if (job.classList.contains("active")) {
    info.classList.add("active");
    job.classList.remove("active");
  }
}
