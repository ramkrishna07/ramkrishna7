/* typing  */
var typed=new Typed(".typing",{
    strings:["", "Student","Web Designer","Web Developer","Competitive Programmer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* aside */
const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;
      for(let i=0;i<totalNavList;i++){
          const a=navList[i].querySelector("a");
          a.addEventListener("click",function(){
              removeBackSection();
            
              for(let j=0;j<totalNavList;j++){
                  if(navList[j].querySelector("a").classList.contains("active")){
                      addBackSection(j);
                    //   allSection[j].classList.add("back-section");
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active");
              showSection(this);
              if(window.innerWidth<1200){
                  asideSectionTogglerBtn();
              }
          })
         
      }

      function addBackSection(num){
        allSection[num].classList.add("back-section");
      }
      function removeBackSection(){
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove("back-section");
        }
      }
      function showSection(element){
          for(let i=0;i<totalSection;i++){
              allSection[i].classList.remove("active");
          }
          
        const target=element.getAttribute("href").split("#")[1];
          document.querySelector("#"+target).classList.add("active");
      }


      function updateNav(element){
         for(let i=0;i<totalNavList;i++){
             navList[i].querySelector("a").classList.remove("active");
             const target=element.getAttribute("href").split("#")[1];
             if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                 navList[i].querySelector("a").classList.add("active");
             }
         }
      }

      document.querySelector(".hire-me").addEventListener("click",function(){
          const sectionIndex=this.getAttribute("data-section-index");
          showSection(this);
          updateNav(this);
          removeBackSection();
          addBackSection(sectionIndex);
      })
    const navTogglerBtn=document.querySelector(".nav-toggler"),
          aside=document.querySelector(".aside");
          navTogglerBtn.addEventListener("click",()=>
          {
              asideSectionTogglerBtn();
          })
          function asideSectionTogglerBtn(){
              aside.classList.toggle("open");
              navTogglerBtn.classList.toggle("open");
              for(let i=0;i<totalSection;i++){
                  allSection[i].classList.toggle("open");
              }
          }



    // configure the firebase
    const firebaseConfig = {
    apiKey: "AIzaSyCcOHIVvCN8nV384NK5cISSeaX3hsWyZHE",
    authDomain: "portfolio-contact-form-f9d68.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-f9d68-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-form-f9d68",
    storageBucket: "portfolio-contact-form-f9d68.appspot.com",
    messagingSenderId: "913336771741",
    appId: "1:913336771741:web:218629186d7a2e9104a074",
    measurementId: "G-L9NXYSLXN5"
    };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);        

    //reference your database
    var contactFormDB=firebase.database().ref('contactForm');
    document.getElementById('contactform').addEventListener('submit',submitForm);

    function submitForm(e){
        e.preventDefault();

        var name=getElementVal('name');

        var emailid=getElementVal('mailid');

        var subject=getElementVal('subject');

        var msgContent=getElementVal('msgContent');

        // console.log(name,emailid,subject,msgContent);
        saveMessage(name,emailid,subject,msgContent);

        // enable the alert msg

        document.querySelector(".alert").style.display="block";

        // remove alert msg after sometime

        setTimeout(() => {
            document.querySelector(".alert").style.display="none";
        }, 3000);

        // reset the form
        document.getElementById("contactform").reset();
    }

    // saving details to firebase

    const saveMessage=(name,emailid,subject,msgContent)=>{
        var newcontactmsg=contactFormDB.push();
        newcontactmsg.set({
            Name:name,
            EmailID:emailid,
            Subject:subject,
            Message:msgContent,
        });
    }
    const getElementVal=(id)=>{
        return document.getElementById(id).value;
    }
