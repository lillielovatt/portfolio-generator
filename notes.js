// console.log(generatePage(yourName, github));


// var x = 5;
// console.log(x);
// var add = (num) => {
//     x = 7;
//     return x;
// }
// console.log(add(x));
// console.log(x);


// const printProfileData = (profileDataArr) => {
//     for(let i=0; i<profileDataArr.length; i++){
//         console.log(profileDataArr[i]);
//     }
//     console.log("...................");

//     profileDataArr.forEach((profileItem)=>{
//         console.log(profileItem);
//     });

//     console.log("...................");

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);



   // // get array of just featured projects
    // const featuredProjects = projectsArr.filter(project => {
    //     if (project.feature) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });

    // // get array of all non-feature projects
    // const nonFeaturedProjects = projectsArr.filter(project => {
    //     if (!project.feature) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });

    // const featuredProjectHtmlArr = featuredProjects.map(({ name, description, languages, link }) => {
    //     return `
    //         <div class="col-12 mb-2 bg-dark text-light p-3 flex-column">
    //             <h3 class="portfolio-item-title text-light">${name}</h3>
    //             <h5 class="portfolio-languages">
    //                 Built With:
    //                 ${languages.join(', ')}
    //             </h5>
    //             <p>${description}</p>
    //             <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
    //         </div>
    //     `;
    // });

    // const nonFeaturedProjectHtmlArr = nonFeaturedProjects.map(({ name, description, languages, link }) => {
    //     return `
    //         <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
    //             <h3 class="portfolio-item-title text-light">${name}</h3>
    //             <h5 class="portfolio-languages">
    //                 Built With:
    //                 ${languages.join(', ')}
    //             </h5>
    //             <p>${description}</p>
    //             <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
    //         </div>
    //     `;
    // });