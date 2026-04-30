const roles = [
"Python Developer","Java Developer","Frontend Engineer","Backend Engineer",
"Full Stack Developer","Data Engineer","Data Scientist","AI Engineer",
"DevOps Engineer","Cloud Engineer","QA Engineer","Automation Tester",
"ETL Tester","Business Analyst","Product Manager","UI/UX Designer",
"Mobile Developer","Cybersecurity Engineer","Digital Marketer","Recruiter"
];

/* SCENE SWITCH */
function show(id){
  gsap.to(".scene",{opacity:0,duration:0.5});
  gsap.to("#"+id,{opacity:1,duration:1.4});
}

/* SIZE RANDOM */
function sizeClass(){
  const r=Math.random();
  if(r<0.5) return "sm";
  if(r<0.75) return "md";
  if(r<0.9) return "lg";
  return "xl";
}

/* BUILD ROLE FIELD */
const roleBox=document.getElementById("roles");

for(let i=0;i<80;i++){
  let d=document.createElement("div");
  d.className="role "+sizeClass();
  d.innerText=roles[i%roles.length];
  roleBox.appendChild(d);

  gsap.set(d,{
    x:Math.random()*600-300,
    y:Math.random()*600-300
  });
}

/* TIMELINE */
const tl=gsap.timeline({repeat:-1});

/* Scene 1 */
tl.call(()=>show("s1"))
.from("#s1 h1",{y:40,opacity:0})
.from("#s1 p",{opacity:0})

/* Scene 2 */
.call(()=>show("s2"),null,"+=1")
.to(".role",{opacity:1,scale:1,stagger:0.01})
.to(".role",{
  x:0,y:0,
  scale:0.4,
  opacity:0,
  stagger:0.01,
  duration:1.5
})

/* Scene 3 (FLOW) */
.call(()=>show("s3"))

const cards=document.querySelectorAll(".flow-card");

cards.forEach((card)=>{
  tl.to(card,{opacity:1,y:0,duration:0.5})
    .to(card,{className:"flow-card active",duration:0.2})
    .to({}, {duration:1.3}) // wait
    .to(card,{className:"flow-card",duration:0.2});
});

/* LOGO */
tl.from("#logo",{scale:0,rotation:180});

/* LOGO WIGGLE */
gsap.to("#logo",{
  y:8,
  rotation:2,
  repeat:-1,
  yoyo:true,
  duration:1.5
});

/* Scene 4 */
tl.call(()=>show("s4"),null,"+=1")

.from("#s4 h2",{y:30,opacity:0})
.from("#s4 p",{opacity:0})
.from(".contact",{scale:0,opacity:0})

/* HOLD CTA FOR READABILITY */
.to({}, { duration: 2.5 });
