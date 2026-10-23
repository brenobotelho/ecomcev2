/* ===== CONFIGURAÇÃO ===== */
const CFG={whatsapp:"",email:"",formEndpoint:"",social:[/* {nome:"Instagram",url:"https://..."} */]};
const TESTIMONIALS=[/* {texto:"",nome:"",empresa:""} */];
const PROJECTS=[["Marca conceito A","Branding","a1","Identidade visual e sistema gráfico."],["Campanha conceito B","Social Media","a2","Conteúdo, carrosséis e stories."],["Peça conceito C","Design","a3","Flyers e materiais de campanha."],["Landing conceito D","Web","a4","Landing page responsiva."],["Vídeo conceito E","Audiovisual","a5","Reels e criativos para anúncios."],["Sistema conceito F","Branding","a6","Direção de arte e aplicações."]];
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$("#yr").textContent=new Date().getFullYear();
const mn=$("#mn"),bg=$("#bg");bg.onclick=()=>{const o=mn.classList.toggle("open");bg.setAttribute("aria-expanded",o)};$$("#mn a").forEach(a=>a.onclick=()=>{mn.classList.remove("open");bg.setAttribute("aria-expanded",false)});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});$$(".rv").forEach(el=>io.observe(el));
[["#ff3d9a","Marca",-6,14],["#c6f21b","Social",3,-4],["#ff6a13","Tráfego",-3,8],["#111","Web",4,-8],["#22d3ee","Design",-4,10],["#ff3d9a","Vídeo",5,-2],["#c6f21b","Reels",-5,12]].forEach(([c,l,r,y])=>{const d=document.createElement("div");d.className="tc";d.style.cssText=`background:${c};--r:${r}deg;--y:${y}px;color:${c==="#c6f21b"||c==="#22d3ee"?"#111":"#fff"}`;d.textContent=l;$("#row").appendChild(d)});
const pg=$("#pg"),dg=$("#dg");
PROJECTS.forEach(p=>{const b=document.createElement("button");b.className="pj";b.dataset.c=p[1];b.innerHTML=`<span class="art ${p[2]}"></span><span class="fk">Conceito fictício</span><span class="m">${p[0]}<small>${p[1]}</small></span>`;b.onclick=()=>{$("#da").className="art "+p[2];$("#dt").textContent=p[0];$("#dc").textContent=p[1]+" · Placeholder";$("#dd").textContent=p[3]+" Conteúdo demonstrativo: substitua por imagens e escopo reais.";dg.showModal()};pg.appendChild(b)});
$("#dx").onclick=()=>dg.close();dg.addEventListener("click",e=>{if(e.target===dg)dg.close()});
$$(".fil button").forEach(b=>b.onclick=()=>{$$(".fil button").forEach(x=>x.setAttribute("aria-pressed",x===b));$$(".pj").forEach(p=>p.classList.toggle("off",b.dataset.f!=="all"&&p.dataset.c!==b.dataset.f))});
if(TESTIMONIALS.length){const t=TESTIMONIALS[0];$("#tq").textContent="“"+t.texto+"”";$("#tn").textContent=t.nome+" · "+t.empresa}
const so=$("#so"),fc=$("#fc"),wa=$("#wa");
CFG.social.forEach(s=>so.insertAdjacentHTML("beforeend",`<a href="${s.url}" target="_blank" rel="noopener">${s.nome}</a>`));
fc.innerHTML=(CFG.whatsapp?`<a href="https://wa.me/${CFG.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>`:"")+(CFG.email?`<a href="mailto:${CFG.email}">${CFG.email}</a>`:"")+CFG.social.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${s.nome}</a>`).join("");
const fm=$("#fm"),st=$("#st");function msg(c,t){st.className=c;st.textContent=t}
if(CFG.whatsapp)wa.href="https://wa.me/"+CFG.whatsapp+"?text="+encodeURIComponent("Olá, é.com cê! Tenho um projeto e gostaria de conversar.");else wa.onclick=e=>{e.preventDefault();msg("no","O número oficial do WhatsApp ainda não foi configurado.");fm.scrollIntoView({behavior:"smooth",block:"center"})};
fm.onsubmit=async e=>{e.preventDefault();let ok=true;
$$("[required]",fm).forEach(f=>{const v=f.type==="email"?/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value):f.value.trim().length>1;f.setAttribute("aria-invalid",!v);f.nextElementSibling.textContent=v?"":(f.type==="email"?"Informe um e-mail válido.":"Campo obrigatório.");if(!v)ok=false});
if(!ok)return;if(!CFG.formEndpoint)return msg("no","O envio ainda não está integrado a um serviço. Use o WhatsApp enquanto isso.");
try{const r=await fetch(CFG.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(fm)))});if(!r.ok)throw 0;fm.reset();msg("ok","Mensagem enviada! Vamos responder em breve.")}catch{msg("no","Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.")}};
if(!matchMedia("(prefers-reduced-motion:reduce)").matches&&matchMedia("(hover:hover)").matches){const cs=$$(".stage .card");addEventListener("mousemove",e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;cs.forEach(c=>{const d=+c.dataset.d;c.style.transform=`translate(${x*d}px,${y*d}px) rotate(${x*d/8}deg)`})},{passive:true})}
const mk=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$("#mn a:not(.btn)").forEach(a=>a.toggleAttribute("aria-current",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});$$("main section[id]").forEach(s=>mk.observe(s));
