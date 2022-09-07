"use strict";(self.webpackChunkvoxeldocs=self.webpackChunkvoxeldocs||[]).push([[819],{3905:(e,a,i)=>{i.d(a,{Zo:()=>w,kt:()=>d});var n=i(7294);function t(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function r(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?r(Object(i),!0).forEach((function(a){t(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function l(e,a){if(null==e)return{};var i,n,t=function(e,a){if(null==e)return{};var i,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||(t[i]=e[i]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var s=n.createContext({}),p=function(e){var a=n.useContext(s),i=a;return e&&(i="function"==typeof e?e(a):o(o({},a),e)),i},w=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var i=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,w=l(e,["components","mdxType","originalType","parentName"]),u=p(i),d=t,y=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return i?n.createElement(y,o(o({ref:a},w),{},{components:i})):n.createElement(y,o({ref:a},w))}));function d(e,a){var i=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},8557:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=i(7462),t=(i(7294),i(3905));const r={},o="Ustawienie wygl\u0105du serwera",l={unversionedId:"tutorial/server-list",id:"tutorial/server-list",title:"Ustawienie wygl\u0105du serwera",description:"Gdy stworzysz ju\u017c sw\xf3j serwer na pewno chcia\u0142by\u015b, \u017ceby wyr\xf3\u017cnia\u0142 si\u0119 na li\u015bcie serwer\xf3w.",source:"@site/docs/tutorial/server-list.md",sourceDirName:"tutorial",slug:"/tutorial/server-list",permalink:"/tutorial/server-list",draft:!1,editUrl:"https://github.com/voxelhostpl/knowledge-base/tree/master/docs/tutorial/server-list.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Pierwsze uruchomienie serwera",permalink:"/tutorial/start"}},s={},p=[{value:"Jak ustawi\u0107 MOTD",id:"jak-ustawi\u0107-motd",level:2},{value:"1. Zmiana w sever.properties",id:"1-zmiana-w-severproperties",level:3},{value:"2. U\u017cycie zewn\u0119trznego pluginu",id:"2-u\u017cycie-zewn\u0119trznego-pluginu",level:3},{value:"Jak ustawi\u0107 ikon\u0119",id:"jak-ustawi\u0107-ikon\u0119",level:2},{value:"Dodatkowe opcje personalizacji",id:"dodatkowe-opcje-personalizacji",level:2}],w={toc:p};function c(e){let{components:a,...i}=e;return(0,t.kt)("wrapper",(0,n.Z)({},w,i,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"ustawienie-wygl\u0105du-serwera"},"Ustawienie wygl\u0105du serwera"),(0,t.kt)("p",null,"Gdy stworzysz ju\u017c sw\xf3j serwer na pewno chcia\u0142by\u015b, \u017ceby wyr\xf3\u017cnia\u0142 si\u0119 na li\u015bcie serwer\xf3w."),(0,t.kt)("p",null,"Poni\u017cej w odpowiednich sekcjach zostanie pokazane: ",(0,t.kt)("br",null)),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#jak-ustawi%C4%87-motd"},"Jak ustawi\u0107 MOTD")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#jak-ustawi%C4%87-ikon%C4%99"},"Jak ustawi\u0107 ikon\u0119")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#dodatkowe-opcje-personalizacji"},"Dodatkowe opcje personalizacji"))),(0,t.kt)("h2",{id:"jak-ustawi\u0107-motd"},"Jak ustawi\u0107 MOTD"),(0,t.kt)("p",null,"Na ustawienie MOTD (wiadomo\u015bci dnia), czyli dw\xf3ch linijek wy\u015bwietlanych przy ka\u017cdym serwerze mamy 2 sposoby."),(0,t.kt)("h3",{id:"1-zmiana-w-severproperties"},"1. Zmiana w sever.properties"),(0,t.kt)("p",null,"Bardzo prosta i niewygodna opcja. Polega na zmianie motd w pliku ",(0,t.kt)("inlineCode",{parentName:"p"},"server.properties"),", kt\xf3ry znajduje si\u0119 w g\u0142\xf3wnym katalogu z plikami serwera. Musimy odnale\u017a\u0107 w nim pole ",(0,t.kt)("inlineCode",{parentName:"p"},"motd")," i podmieni\u0107 domy\u015blne ",(0,t.kt)("inlineCode",{parentName:"p"},"\\u00A79Serwer hostowany na \\u00A7nvoxelhost.pl")," na nasz\u0105 w\u0142asn\u0105 wiadomo\u015b\u0107. Pomocne przy tym mo\u017ce okaza\u0107 si\u0119 ",(0,t.kt)("a",{parentName:"p",href:"https://minecraft.tools/en/motd.php"},"to narz\u0119dzie")," - u\u0142atwi ono nam sformatowanie samego motd (gdy\u017c w tym miejscu nie jest wspierany format ze znakiem &). Po stworzeniu motd i pokolorowaniu go w odpowiedni spos\xf3b, wystarczy teraz klikn\u0105\u0107 przycisk ",(0,t.kt)("inlineCode",{parentName:"p"},"Create the Motd")," i wklei\u0107 podan\u0105 warto\u015b\u0107 w pole ",(0,t.kt)("inlineCode",{parentName:"p"},"motd")," np. ",(0,t.kt)("inlineCode",{parentName:"p"},"motd=\\u00a7cFajny Serwer")),(0,t.kt)("h3",{id:"2-u\u017cycie-zewn\u0119trznego-pluginu"},"2. U\u017cycie zewn\u0119trznego pluginu"),(0,t.kt)("p",null,"\u0141atwiejszym i lepszym rozwi\u0105zaniem mo\u017ce okaza\u0107 si\u0119 u\u017cycie zewn\u0119trznego pluginu. Pozwoli on nam na \u0142atwiejsze ustawienie naszego MOTD i u\u017cycie \u0142atwiejszego formatu z u\u017cyciem ",(0,t.kt)("inlineCode",{parentName:"p"},"&")," lub u\u017cycie HEX kolor\xf3w. "),(0,t.kt)("p",null,"Lista przyk\u0142adowych plugin\xf3w (my jednak nie polecamy \u017cadnego konkretnego - to od was zale\u017cy, kt\xf3ry wybierzecie): ",(0,t.kt)("br",null)),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/minimotd-server-list-motd-plugin-with-rgb-gradients.81254/"},"MiniMOTD")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/serverlistplus.241/"},"ServerListPlus"))),(0,t.kt)("p",null,"Nie jeste\u015bmy w stanie poda\u0107 dok\u0142adnych instrukcji jak skonfigurowa\u0107 plugin jaki wybierzecie. Ka\u017cdy z tych plugin\xf3w mo\u017ce mie\u0107 r\xf3\u017cni\u0105c\u0105 si\u0119 od siebie konfiguracje lub funkcjonalno\u015bci. Najlepiej samemu znale\u017a\u0107 plugin, kt\xf3ry b\u0119dzie odpowiedni dla twojego serwera."),(0,t.kt)("h2",{id:"jak-ustawi\u0107-ikon\u0119"},"Jak ustawi\u0107 ikon\u0119"),(0,t.kt)("p",null,"Ustawienie ikony serwera jest banalnie proste. Wystarczy przygotowa\u0107 sobie ikon\u0119 jak\u0105 chcemy posiada\u0107. Musi by\u0107 w rozdzielczo\u015bci dok\u0142adnie ",(0,t.kt)("inlineCode",{parentName:"p"},"64 x 64")," i posiada\u0107 rozszerzennie ",(0,t.kt)("inlineCode",{parentName:"p"},".png"),". Mo\u017cna u\u017cy\u0107 do tego wielu dost\u0119pnych narz\u0119dzi - program\xf3w jak ",(0,t.kt)("inlineCode",{parentName:"p"},"GIMP"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"Paint.NET"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"Adobe Photoshop")," itd. lub stron internetowych."),(0,t.kt)("p",null,"Gdy mamy ju\u017c odpowiedni\u0105 ikon\u0119 wystarczy j\u0105 teraz nazwa\u0107 ",(0,t.kt)("inlineCode",{parentName:"p"},"server-icon")," i wrzuci\u0107 do g\u0142\xf3wnego katalogu serwera. Zrestartowa\u0107 serwer i wszystko powinno dzia\u0142a\u0107."),(0,t.kt)("h2",{id:"dodatkowe-opcje-personalizacji"},"Dodatkowe opcje personalizacji"),(0,t.kt)("p",null,"Niekt\xf3re pluginy pozwalaj\u0105 dodatkowo spersonalizowa\u0107 i wyr\xf3\u017cni\u0107 serwer na li\u015bcie. Z najprostszych to wy\u015bwietlanie innego MOTD w zale\u017cno\u015bci od tego jaki gracz na nie patrzy, u\u017cywanie placeholder\xf3w (z np. PlaceholderAPI) lub wy\u015bwietlanie nieprawdziwej ilo\u015bci slot\xf3w. Bardziej zaawansowanymi funkcjami to wy\u015bwietlanie zamiast listy graczy (po najechaniu na ich liczb\u0119) w\u0142asnych informacji - dobre miejsce na wy\u015bwietlanie adres\xf3w np. strony internetowej, discorda itp. "),(0,t.kt)("p",null,"Cz\u0119\u015b\u0107 plugin\xf3w oferuj\u0105 r\xf3wnie\u017c wy\u015bwietlanie w\u0142asnej wiadomo\u015bci, gdy gracz u\u017cywa przestarza\u0142ej/zbyt nowej wersji serwera (wy\u015bwietlanej na lewo od ikony z pingiem). Czasem mo\u017cliwe jest nawet wymuszenie wy\u015bwietlania tej informacji - co pozwala np. na wy\u015bwietlanie liczby graczy z w\u0142asnymi formatowaniem (np. sama liczba graczy bez maksymalnej liczby slot\xf3w). Jednym z ciekawszych sposob\xf3 na u\u017cycie tej opcji to wy\u015bwietlanie w\u0142asnych informacji ",(0,t.kt)("em",{parentName:"p"},"na lewo")," od ikony serwera np. wiadomo\u015bci ",(0,t.kt)("inlineCode",{parentName:"p"},"Do\u0142\u0105cz na serwer ---\x3e")," co dodatkowo wyr\xf3\u017cni nasz serwer - wystarczy doda\u0107 z prawej strony wystarczaj\u0105c\u0105 ilo\u015b\u0107 spacji. Warto jednak mie\u0107 na uwadze, \u017ce nie zawsze taka informacja mo\u017ce si\u0119 dobrze wy\u015bwietla\u0107 na r\xf3\u017cnych rozdzielczo\u015bciach."),(0,t.kt)("p",null,"Konfiguracje tych opcji znajdziecie w konfiguracjach plugin\xf3w (oczywi\u015bcie o ile same pluginy je wspieraj\u0105). My nie jeste\u015bmy w stanie poda\u0107 dok\u0142adnych instrukcji jak skonfigurowa\u0107 dane pluginy."))}c.isMDXComponent=!0}}]);