
// display all skills
const logo_list=document.getElementById("logo-text-container");

let logo_with_name = [["HTML5", "./assets/HTML5_logo_and_wordmark.svg"], 
                      ["CSS3","./assets/css3.svg"],
                      ["Bootstrap","./assets/botsrap(1).png"],
                      ["ReactJS",'./assets/reactJS.png'],
                      ["ReactNative","./assets/reactNative.png"],
                      ["Django",'./assets/django-logo.png'],
                      ['NodeJS',"https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"],
                      ['MongoDB','./assets/mongodb.png'],
                      ["Materializecss","./assets/materializecss.png"],
                    ];



for (let i=0;i<logo_with_name.length;i++){
  logo_list.insertAdjacentHTML('beforeend', `
  <div>
  <img src=${logo_with_name[i][1]}   width="75" height="75"  alt=${logo_with_name[i][0]}  > 
                            <div style="font-size:17px;">${logo_with_name[i][0]}</div>
                            </div>
  `);
}

const line=document.getElementById("line");
for(let i=1; i<120;i++){
    line.insertAdjacentHTML('beforeend',
    `<div>${i}</div>`
    )  
}