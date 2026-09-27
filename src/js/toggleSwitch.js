
const styleToggle = document.querySelector("#toggle1");


 export const enableDarkStyle = () => {
    document.body.classList.add("dark-theme");
   
    localStorage.setItem('styleMode', "dark")
}

 export const  disableDarkStyle = () => {
     document.body.classList.remove("dark-theme");
       localStorage.setItem('styleMode', null)
}

