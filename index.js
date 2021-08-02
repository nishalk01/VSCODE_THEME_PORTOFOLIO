
// display all skills
const logo_list=document.getElementById("logo-text-container");
console.log(logo_list)

let logo_with_name = [["HTML5", "./assets/HTML5_logo_and_wordmark.svg"], 
                      ["BOOTSTRAP","./assets/botsrap(1).png"],
                      ["MATERIALIZECSS","./assets/materializecss.png"],
                      ["CSS3","./assets/css3.svg"],
                      ["REACTJS",'./assets/reactJS.png'],
                      ["REACT NATIVE","./assets/reactNative.png"],
                      ["DJANGO",'./assets/django-logo.png'],
                      ['NODEJS',"https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"],
                      ['MONGODB','./assets/mongodb.png']
                    ];



for (let i=0;i<logo_with_name.length;i++){
    console.log("hello i passed")
  logo_list.insertAdjacentHTML('beforeend', `
  <div>
  <img src=${logo_with_name[i][1]}   width="90" height="90" style="margin:10px;" alt=${logo_with_name[i][0]}  > 
                            <div>${logo_with_name[i][0]}</div>
                            </div>
  `);
}