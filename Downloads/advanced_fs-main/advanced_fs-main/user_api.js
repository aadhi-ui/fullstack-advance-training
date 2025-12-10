let url="https://api.github.com/users";
// window.fetch(url).then((res)=>console.log(res));

window
     .fetch(url)
     .then((res)=>res.json())
    //  .then((userData)=>console.log(userData))
    //  .catch((err)=>console.log(err));
    .then((userData)=>{
        userData.map((person)=>{
            
            let sub_container=document.createElement('div');;
            let image_container=document.createElement('div');
            let user_container=document.createElement('h3');
            let name=document.createElement("h1");
            let login=document.createElement("h2");
            let type=document.createElement("h2");
            let images=document.createElement("img");

            name.innerText=`UserId: ${person.id}`;
            user_container.appendChild(name);
            login.innerText=`Name: ${person.login}`;
            user_container.appendChild(login);
            type.innerText=`Type: ${person.type}`;
            user_container.appendChild(type);
            let main_container=document.getElementById("container");
            main_container.appendChild(sub_container);
            sub_container.appendChild(image_container);
            sub_container.appendChild(user_container);
            
            image_container.appendChild(images);
            
            // console.log(image_container);
            // console.log(person.avatar_url);
            images.src=`${person.avatar_url}`;
            images.style.width="250px";
            images.style.height="250px";
            images.style.borderRadius="50px";
            sub_container.style.margin="auto";
            sub_container.style.backgroundColor="grey";
            sub_container.style.borderRadius="20px";
            sub_container.style.display="flex";
            sub_container.style.justifyContent="space-around";
            sub_container.style.alignItems="center";
            sub_container.style.width="60%";
            sub_container.style.marginTop="20px";
            sub_container.style.padding="20px";


            console.log(sub_container);

        })

    })

//DOM 
//DOM Methods
//createelement,appendchild,removechild,innertext,innerhtml,textContext
//DOM selectors
//getelemtbyid
//getelementsbyclassname
//getelementsbytagname
//queryselector
//queryselectorall
//DOM Events
//onclick,onmouseover,onmouseout,ondblclick,onkeydown,onload
//addeventlistener
//event object

//map,filter,reduce introduced in ES6
//map
const numbers=[1,2,3,4,5];
const squared=numbers.map((num)=>num*num);
console.log(squared); // [1,4,9,16,25]
//filter
const evenNumbers=numbers.filter((num)=>num%2===0);
console.log(evenNumbers); //[2,4]
//reduce
const sum=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum); //15

