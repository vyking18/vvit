fetch("data.json")
.then((Response)=>{
    return Response.json();
}).then((data)=>{
    // console.log(data);
    displayInfo(data.basics);
});


function displayInfo(info)
{
    let body=document.querySelector("#root");

    let card=document.createElement("div");
    card.classList.add("card");
    
    let h=document.createElement("h2");
    h.textContent=info.name;
    card.appendChild(h)
    
    let line=document.createElement("hr");
    card.appendChild(line);

    let h1=document.createElement("h2");
    h1.textContent=info.role;
    card.appendChild(h1)

    let h2=document.createElement("h2");
    h2.textContent=info.education["degree"];
    card.appendChild(h2)

    let h3=document.createElement("h2");
    h3.textContent=info.education[0]["degree"] + "--" +info.education[0]["PER"];
    card.appendChild(h3)

    let h4=document.createElement("h2");
    h4.textContent=info.education[1]["degree"] + "--" +info.education[1]["PER"];
    card.appendChild(h4)

    let h5=document.createElement("h2");
    h5.textContent=info.education[2]["degree"] + "--" +info.education[2]["PER"];
    card.appendChild(h5);

    let mail=document.createElement("a");
    mail.href="mailto:"+info.email;
    mail.textContent=info.email;
    card.append(mail);

    let br=document.createElement("br");
    card.appendChild(br);
    let br1=document.createElement("br");
    card.appendChild(br1);

    let mobile=document.createElement("a");
    mobile.href="tel:"+info.number;
    mobile.textContent=info.number;
    card.append(mobile);

    let br3=document.createElement("br");
    card.appendChild(br3);


    let btn=document.createElement("a");
    btn.textContent="view profile";
    btn.classList.add("btn");
    card.append(btn);

    body.appendChild(card);

}