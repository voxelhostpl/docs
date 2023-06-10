"use strict";(self.webpackChunkvoxeldocs=self.webpackChunkvoxeldocs||[]).push([[991],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>g});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,m=d["".concat(u,".").concat(g)]||d[g]||s[g]||a;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1550:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const a={},i="Podpinanie serwera pod BungeeCord",l={unversionedId:"tutorial/bungeecord",id:"tutorial/bungeecord",title:"Podpinanie serwera pod BungeeCord",description:"Wymagania",source:"@site/docs/tutorial/bungeecord.md",sourceDirName:"tutorial",slug:"/tutorial/bungeecord",permalink:"/tutorial/bungeecord",draft:!1,editUrl:"https://github.com/voxelhostpl/knowledge-base/tree/master/docs/tutorial/bungeecord.md",tags:[],version:"current",frontMatter:{}},u={},c=[{value:"Wymagania",id:"wymagania",level:2},{value:"Szczeg\xf3\u0142owe wymagania",id:"szczeg\xf3\u0142owe-wymagania",level:3},{value:"Konfiguracja BungeeCord",id:"konfiguracja-bungeecord",level:2},{value:"Pobieranie",id:"pobieranie",level:3},{value:"Instalacja",id:"instalacja",level:3},{value:"Konfiguracja",id:"konfiguracja",level:3}],p={toc:c};function s(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"podpinanie-serwera-pod-bungeecord"},"Podpinanie serwera pod BungeeCord"),(0,o.kt)("h2",{id:"wymagania"},"Wymagania"),(0,o.kt)("p",null,"Na ten moment voxelhost.pl nie posiada BungeeCord w swojej ofercie. Je\u017celi jednak posiadasz w\u0142asn\u0105 instancj\u0119 proxy nie powstrzymujemy\nod dodawania do niego serwer\xf3w hostowanych w voxelhost."),(0,o.kt)("h3",{id:"szczeg\xf3\u0142owe-wymagania"},"Szczeg\xf3\u0142owe wymagania"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"serwer BungeeCord hostowany na innym hostingu lub VPS ")),(0,o.kt)("h2",{id:"konfiguracja-bungeecord"},"Konfiguracja BungeeCord"),(0,o.kt)("h3",{id:"pobieranie"},"Pobieranie"),(0,o.kt)("p",null,"Ze wzgl\u0119du na architektur\u0119 serwisu voxelhost.pl wymagane jest wgranie pluginu, kt\xf3ry pozwoli na pod\u0142\u0105czenie serwer\xf3w hostowanych na voxelhost.pl pod BungeeCord.\nDzi\u0119ki uprzejmo\u015bci cz\u0142onka naszej spo\u0142eczno\u015bci posiadamy dedykowany plugin dla BungeeCorda. Repozytorium z kodem jest dost\u0119pne ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kamilkime-Plugins/VoxelBungee/"},"tutaj"),". Gotowy do pobrania plugin dost\u0119pny jest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kamilkime-Plugins/VoxelBungee/releases"},"tutaj"),"."),(0,o.kt)("h3",{id:"instalacja"},"Instalacja"),(0,o.kt)("p",null,"Aby zainstalowa\u0107 plugin nale\u017cy przerzuci\u0107 plik w formacie ",(0,o.kt)("inlineCode",{parentName:"p"},".jar")," do folderu ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/")," znajduj\u0105cego si\u0119 w folderze w kt\xf3rym posiadamy BungeeCorda.\nPo uruchomieniu proxy zostanie wygenerowany plik konfiguracyjny."),(0,o.kt)("h3",{id:"konfiguracja"},"Konfiguracja"),(0,o.kt)("p",null,"Konfiguracji dokonujemy przez plik znajduj\u0105cy si\u0119 pod \u015bcie\u017ck\u0105\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/VoxelBungee/config.yml"),". Wszystkie opcje s\u0105 szczeg\xf3\u0142owo opisane, w razie\nw\u0105tpliwo\u015bci ch\u0119tnie pomo\u017cemy skonfigurowa\u0107 plugin na naszym ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/GXqxqy6swA"},"Discordzie"),"."))}s.isMDXComponent=!0}}]);