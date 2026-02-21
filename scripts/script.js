// Job arr
let jobs = [
  {
    companyName: "TechNova Solutions",
    position: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$900/month",
    description:
      "Build responsive UI using modern JavaScript frameworks and collaborate with designers.",
    status: "Not applied",
  },
  {
    companyName: "CloudSync Ltd.",
    position: "Backend Engineer",
    location: "Chattogram, Bangladesh",
    type: "Remote",
    salary: "$1100/month",
    description:
      "Develop scalable APIs and manage database architecture for cloud systems.",
    status: "Not applied",
  },
  {
    companyName: "PixelCraft Studio",
    position: "UI/UX Designer",
    location: "Khulna, Bangladesh",
    type: "Part-time",
    salary: "$600/month",
    description:
      "Design intuitive user interfaces and improve user experience across web platforms.",
    status: "Not applied",
  },
  {
    companyName: "DataNest Analytics",
    position: "Data Analyst",
    location: "Sylhet, Bangladesh",
    type: "Full-time",
    salary: "$1000/month",
    description:
      "Analyze business datasets and generate actionable insights using visualization tools.",
    status: "Not applied",
  },
  {
    companyName: "SecureNet Corp",
    position: "Cybersecurity Specialist",
    location: "Rajshahi, Bangladesh",
    type: "Full-time",
    salary: "$1300/month",
    description:
      "Monitor threats, implement security protocols, and ensure system safety.",
    status: "Not applied",
  },
  {
    companyName: "NextGen Apps",
    position: "Mobile App Developer",
    location: "Dhaka, Bangladesh",
    type: "Contract",
    salary: "$1200/month",
    description:
      "Develop cross-platform mobile applications using Flutter and React Native.",
    status: "Not applied",
  },
  {
    companyName: "GreenSoft Technologies",
    position: "Software Tester",
    location: "Barisal, Bangladesh",
    type: "Internship",
    salary: "$400/month",
    description:
      "Test software for bugs, write reports, and assist developers in fixing issues.",
    status: "Not applied",
  },
  {
    companyName: "AI Works Lab",
    position: "Machine Learning Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$1500/month",
    description:
      "Train ML models, optimize algorithms, and deploy AI solutions to production.",
    status: "Not applied",
  },
];
// Important Variables
let totalJobsCount = 0;
let interviewJobsCount = 0;
let rejectJobsCount = 0;
let currentFilter = "all";
// ALl DOMS
const cardParentDiv = document.querySelector("#card-parent");
const allJobCountTab = document.querySelector("#total-job-tab");
const interviewJobCountTab = document.querySelector("#interview-job-tab");
const rejectJobCountTab = document.querySelector("#rejected-job-tab");
const currentJobCountDisplay = document.querySelector("#current-job-count");
function updateCount() {
  totalJobsCount = jobs.length;
  allJobCountTab.textContent = totalJobsCount;
  currentJobCountDisplay.textContent = `${totalJobsCount} Jobs`;
  let interviewFilteredLength = jobs.filter(
    (job) => job.status === "Interview",
  ).length;
  let rejectFilteredLength = jobs.filter(
    (job) => job.status === "Rejected",
  ).length;
  interviewJobCountTab.textContent = interviewFilteredLength;
  rejectJobCountTab.textContent = rejectFilteredLength;
  filterApply();
  if (currentFilter === "interview") {
    currentJobCountDisplay.textContent = `${interviewFilteredLength} of ${totalJobsCount}Jobs`;
  }
  if (currentFilter === "rejected") {
    currentJobCountDisplay.textContent = `${rejectFilteredLength} of ${totalJobsCount}Jobs`;
  }
}
updateCount();

// Sorting Function
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((btns) => btns.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.value;
    filterApply();
    updateCount();
  });
});

// filter apply function
function filterApply() {
  if (currentFilter === "interview") {
    let filtered = jobs.filter((job) => job.status === "Interview");
    renderApp(filtered);
  }
  if (currentFilter === "all") renderApp(jobs);
  if (currentFilter === "rejected") {
    let filtered = jobs.filter((job) => job.status === "Rejected");
    renderApp(filtered);
  }
}

// Rendering Function
function renderApp(arr) {
  cardParentDiv.innerHTML = "";
  if (arr.length > 0) {
    arr.forEach((item, index) => {
      let div = document.createElement("div");
      div.classList.add("cards");
      let companyNameH2 = document.createElement("h2");
      companyNameH2.textContent = item.companyName;
      div.append(companyNameH2);
      let positionH3 = document.createElement("h3");
      positionH3.textContent = item.position;
      div.append(positionH3);
      let typeH4 = document.createElement("h4");
      typeH4.textContent = `${item.type} - ${item.salary}`;
      div.append(typeH4);
      let locationH4 = document.createElement("h4");
      locationH4.textContent = item.location;
      div.append(locationH4);
      let appliedSpan = document.createElement("span");
      appliedSpan.textContent = item.status;
      if (item.status === "Interview") {
        appliedSpan.style.backgroundColor = "lightgreen";
      }
      if (item.status === "Rejected") {
        appliedSpan.style.backgroundColor = "rgb(248, 81, 81)";
      }
      div.append(appliedSpan);
      let descriptionP = document.createElement("p");
      descriptionP.textContent = item.description;
      div.append(descriptionP);
      let interviewBtn = document.createElement("button");
      interviewBtn.classList.add("btn", "btn-success", "btn-soft");
      interviewBtn.style.marginRight = "10px";
      interviewBtn.textContent = "Interview";
      interviewBtn.addEventListener("click", () => {
        item.status = "Interview";
        filterApply();
        updateCount();
      });
      div.append(interviewBtn);
      let rejectBtn = document.createElement("button");
      rejectBtn.classList.add("btn", "btn-soft", "btn-error");
      rejectBtn.textContent = "Reject";
      rejectBtn.addEventListener("click", () => {
        item.status = "Rejected";
        filterApply();
        updateCount();
      });
      div.append(rejectBtn);
      let jobDeleteBtn = document.createElement("button");
      jobDeleteBtn.classList.add("del-btn", "btn");
      jobDeleteBtn.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
      jobDeleteBtn.addEventListener("click", () => {
        jobs = jobs.filter((job) => job !== item);
        filterApply();
        updateCount();
      });
      div.append(jobDeleteBtn);
      cardParentDiv.append(div);
    });
  } else {
    let div = document.createElement("div");
    div.id = "no-job";
    let iconDiv = document.createElement("div");
    iconDiv.innerHTML = `<i class="fa-regular fa-file-lines"></i>`;
    div.append(iconDiv);
    let h2 = document.createElement("h2");
    h2.textContent = "No jobs available";
    div.append(h2);
    let p = document.createElement("p");
    p.textContent = "Check back soon for new job opportunities";
    div.append(p);
    cardParentDiv.append(div);
  }
}
renderApp(jobs);