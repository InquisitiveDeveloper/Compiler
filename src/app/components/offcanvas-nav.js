const navLinks = {
  about: [
    { name: "Administration", link: "/administration/index.html" },
    { name: "Our History", link: "/about/index.html" },
    {
      name: "Office of the President",
      link: "/administration/president/index.html",
    },
    {
      name: "Visit",
      link: "/enrollment-management/admission/future-students/visit/index.html",
    },
  ],
  academics: [
    { link: "/academicaffairs/index.html", name: "Academic Affairs" },
    { link: "/academics/index.html", name: "Academics Home" },
    { link: "https://catalog.tamuk.edu/", name: "Course Catalog Home" },
    {
      link: "https://as2.tamuk.edu:9203/PROD/bwckschd.p_disp_dyn_sched",
      name: "Course Schedule",
    },
    {
      link: "/agriculture/index.html",
      name: "Dick and Mary Lewis Kleberg College of Agriculture and Natural Resources",
    },
    {
      link: "/business/index.html",
      name: "College of Business Administration",
    },
    {
      link: "/engineering/index.html",
      name: "Frank H. Dotterweich College of Engineering",
    },
    {
      link: "/education/index.html",
      name: "College of Education and Human Performance",
    },
    { link: "/artsci/index.html", name: "College of Arts &amp; Sciences" },
    { link: "/orgs/grad/index.html", name: "College of Graduate Studies" },
    { link: "/honors/index.html", name: "Honors College" },
  ],
  admissions: [
    {
      link: "/enrollment-management/finaid/students/cost-of-attendance.html",
      name: "Cost of Attendance",
    },
    {
      link: "/enrollment-management/admission/graduate/index.html",
      name: "Graduate Admission",
    },
    { link: "/enrollment-management/finaid/index.html", name: "Financial Aid" },
    { link: "/academicaffairssupport/oisss/index.html", name: "International" },
    {
      link: "/enrollment-management/veterans/index.html",
      name: "Military &amp; Veteran Resource Center",
    },
    { link: "/rellis/index.html", name: "RELLIS" },
    {
      link: "/enrollment-management/scholarships/index.html",
      name: "Scholarships",
    },
    {
      link: "/enrollment-management/admission/index.html",
      name: "Undergraduate Admission",
    },
  ],
  campus: [
    { link: "/resources/index.html", name: "A - Z Index" },
    { link: "/msub/bookstore/index.html", name: "Bookstore" },
    {
      link: "/finance/financial-services/business-services/index.html",
      name: "Business Services",
    },
    { link: "/maps/index.html", name: "Campus Maps and Permits" },
    { link: "/shw/drc/index.html", name: "Disability Resource Center" },
    {
      link: "/finance/employee-services/index.html",
      name: "Employee Services",
    },
    { link: "/finance/index.html", name: "Finance / Financial Services" },
    {
      link: "/finance/its/index.html",
      name: "Information Technology Services (ITS)",
    },
    { link: "/finance/compliance/index.html", name: "Office of Compliance" },
    { link: "/registrar/index.html", name: "Office of the Registrar" },
    {
      link: "https://as2.tamuk.edu:9203/PROD/bwpkedir.P_DisplayDirectory",
      name: "Staff/Faculty Directory",
    },
    {
      link: "/studentsuccess/repository/index.html",
      name: "Student and Community Resources Repository",
    },
    { link: "/upd/index.html", name: "University Police Department" },
  ],
  research: [
    {
      link: '/research/index.html', name: "Research"
    }
  ],
  athletics: [
    {
      link:'/athletics',name: "Athletics"
    }
  ],
  news: [
    {
      link:'/news',name:"News"
    }
  ]
};

const topNav = `
<div class="dropdown">
            <button class="btn btn-outline-primary w-100 dropdown-toggle" type="button" id="info-for" data-bs-toggle="dropdown"
              aria-expanded="false">
              Info For
            </button>
            <ul class="dropdown-menu dropdown w-100" aria-labelledby="info-for">
              <li><a class="dropdown-item" href="#">Current Students</a></li>
              <li><a class="dropdown-item" href="#">Future Students</a></li>
              <li><a class="dropdown-item" href="#">Faculty & Staff</a></li>
              <li><a class="dropdown-item" href="#">Family & Visitors</a></li>
              <li><a class="dropdown-item" href="#">Doners</a></li>
            </ul>
            </div>
           
`;

const topNavSearch = `
<div class="d-flex align-items-center">
            <ul class="navbar-nav d-flex">
              <li><a class="nav-link" href="#">Apply</a></li>
              <li><a class="nav-link" href="#">Map</a></li>
            </ul>
            <form class="d-flex" style="margin: 5px 0 0 5px; padding: .3rem 0px .5rem 0">
                <input class="form-control" type="search"
                    style="border-bottom-right-radius: 0px; border-top-right-radius: 0px" placeholder="Search"
                    aria-label="Search" />
                <button class="btn btn-sm btn-primary" style="border-top-left-radius: 0px; border-bottom-left-radius: 0px"
                    type="submit">
                    Go
                </button>
            </form>
            </div>
            `;
const topNavSearchOffCanvas = `
                <form class="d-flex my-4" >
                    <input class="form-control" type="search"
                        style="border-bottom-right-radius: 0px; border-top-right-radius: 0px" placeholder="Search"
                        aria-label="Search" />
                    <button class="btn btn-sm btn-primary" style="border-top-left-radius: 0px; border-bottom-left-radius: 0px"
                        type="submit">
                        Go
                    </button>
                </form>
            `;

const topNavCalloutButtonGroup = `
<div class="btn-group pb-4 w-100 " role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-warning text-primary">Apply</button>
  <button type="button" class="btn btn-primary">Map</button>
</div>
`;

function aboutLinks(navType) {
  let dropdown = "";
  let string = "";
  navLinks.about.map((e) => {
    dropdown += `<li><a class="dropdown-item" href="${e.link}" target="">${e.name}</a></li>`;
    string += `<li><a href="${e.link}" target="">${e.name}</a></li>`;
  });
  if (navType === "dropdown") {
    return dropdown;
  } else {
    return string;
  }
}

function getLinks(category,classes) {
  let string = "";
  Object.entries(navLinks).forEach((x) => {
    if (category === x[0]) {
      if (x[1].length > 1) {
        x[1].map((e) => {
            string += `<li><a class="${classes}" href="${e.link}" target="">${e.name}</a></li>`;
        });
      } else {
        x[1].map((e) => {
          string += `<li class="nav-item"><a class="nav-link" href="${e.link}" target="">${e.name}</a></li>`;
        })
      }
    }
  });
  return string;
}

const subNav = `
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="about" data-bs-toggle="dropdown" aria-expanded="false">About</a>
          <ul class="dropdown-menu" aria-labelledby="about">

        ${getLinks("about", "dropdown-item")}
              
          </ul>
            </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="academics" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Academics
            </a>
            <ul class="dropdown-menu" aria-labelledby="academics">
                    ${getLinks("academics", "dropdown-item")}
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="admissions-and-aid" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Admissions & Aid</a>
                    <ul class="dropdown-menu" aria-labelledby="admissions-and-aid">
                    
                    ${getLinks("admissions", "dropdown-item")}
                
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="campus" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Campus</a>
            <ul class="dropdown-menu" aria-labelledby="campus">
              ${getLinks("campus", "dropdown-item")}
            </ul>
          </li>
          ${getLinks("research", "nav-item")}
          ${getLinks("athletics", "nav-item")}
          ${getLinks("news", "nav-item")}
    </ul>
`;

const subNavAccordion = `
<div class="accordion my-4" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAbout" aria-expanded="false" aria-controls="collapseAbout">
        About
      </button>
    </h2>
    <div id="collapseAbout" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${getLinks("about")}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAcademics" aria-expanded="false" aria-controls="collapseAcademics">
        Academics
      </button>
    </h2>
    <div id="collapseAcademics" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${getLinks("academics")}
        </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAdmissions" aria-expanded="false" aria-controls="collapseAdmissions">
        Admissions
        </button>
        </h2>
        <div id="collapseAdmissions" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        ${getLinks("admissions")}
        </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCampus" aria-expanded="false" aria-controls="collapseCampus">
        Campus
        </button>
        </h2>
        <div id="collapseCampus" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        ${getLinks("campus")}
      </div>
    </div>
  </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseResearch" aria-expanded="false" aria-controls="collapseResearch">
        Research
        </button>
        </h2>
        <div id="collapseResearch" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        ${getLinks("research")}
        
      </div>
    </div>
  </div>
</div>
`;
const topNavWrapper = document.querySelector(".top-nav-wrapper");
const navbarToggler = document.querySelector(".navbar-toggler");
const offcanvasBtn = document.querySelector(".offcanvas-btn");
const offcanvasBody = document.querySelector(".offcanvas-body");
const subNavWrapper = document.querySelector(".sub-nav-wrapper");
subNavWrapper.insertAdjacentHTML("beforeend", subNav);
topNavWrapper.insertAdjacentHTML("beforeend", `${topNav} ${topNavSearch}`);

//add navigation content to offcanvas menu and remove from fullscreen view
navbarToggler.addEventListener("click", function () {
  offcanvasBody.innerHTML = `${topNavSearchOffCanvas} ${topNavCalloutButtonGroup}  ${topNav} ${subNavAccordion}`;
  subNavWrapper.innerHTML = "";
  topNavWrapper.innerHTML = "";
});

//add navigation content back to fullscreen view
var myOffcanvas = document.getElementById("offcanvas-main-navigation");
myOffcanvas.addEventListener("hidden.bs.offcanvas", function () {
  subNavWrapper.insertAdjacentHTML("beforeend", subNav);
  topNavWrapper.insertAdjacentHTML("beforeend", `${topNav} ${topNavSearch}`);
});
