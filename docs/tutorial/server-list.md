# Ustawienie wyglądu serwera

Gdy stworzysz już swój serwer na pewno chciałbyś, żeby wyróżniał się na liście serwerów.

Poniżej w odpowiednich sekcjach zostanie pokazane: <br />
* [Jak ustawić MOTD](#jak-ustawić-motd)
* [Jak ustawić ikonę](#jak-ustawić-ikonę)
* [Dodatkowe opcje personalizacji](#dodatkowe-opcje-personalizacji)

## Jak ustawić MOTD

Na ustawienie MOTD (wiadomości dnia), czyli dwóch linijek wyświetlanych przy każdym serwerze mamy 2 sposoby.

### 1. Zmiana w sever.properties
Bardzo prosta i niewygodna opcja. Polega na zmianie motd w pliku `server.properties`, który znajduje się w głównym katalogu z plikami serwera. Musimy odnaleźć w nim pole `motd` i podmienić domyślne `\u00A79Serwer hostowany na \u00A7nvoxelhost.pl` na naszą własną wiadomość. Pomocne przy tym może okazać się [to narzędzie](https://minecraft.tools/en/motd.php) - ułatwi ono nam sformatowanie samego motd (gdyż w tym miejscu nie jest wspierany format ze znakiem &). Po stworzeniu motd i pokolorowaniu go w odpowiedni sposób, wystarczy teraz kliknąć przycisk `Create the Motd` i wkleić podaną wartość w pole `motd` np. `motd=\u00a7cFajny Serwer`

### 2. Użycie zewnętrznego pluginu
Łatwiejszym i lepszym rozwiązaniem może okazać się użycie zewnętrznego pluginu. Pozwoli on nam na łatwiejsze ustawienie naszego MOTD i użycie łatwiejszego formatu z użyciem `&` lub użycie HEX kolorów. 

Lista przykładowych pluginów (my jednak nie polecamy żadnego konkretnego - to od was zależy, który wybierzecie): <br />
* [MiniMOTD](https://www.spigotmc.org/resources/minimotd-server-list-motd-plugin-with-rgb-gradients.81254/)
* [ServerListPlus](https://www.spigotmc.org/resources/serverlistplus.241/)

Nie jesteśmy w stanie podać dokładnych instrukcji jak skonfigurować plugin jaki wybierzecie. Każdy z tych pluginów może mieć różniącą się od siebie konfiguracje lub funkcjonalności. Najlepiej samemu znaleźć plugin, który będzie odpowiedni dla twojego serwera.

## Jak ustawić ikonę

Ustawienie ikony serwera jest banalnie proste. Wystarczy przygotować sobie ikonę jaką chcemy posiadać. Musi być w rozdzielczości dokładnie `64 x 64` i posiadać rozszerzennie `.png`. Można użyć do tego wielu dostępnych narzędzi - programów jak `GIMP`, `Paint.NET`, `Adobe Photoshop` itd. lub stron internetowych.

Gdy mamy już odpowiednią ikonę wystarczy ją teraz nazwać `server-icon` i wrzucić do głównego katalogu serwera. Zrestartować serwer i wszystko powinno działać.

## Dodatkowe opcje personalizacji

Niektóre pluginy pozwalają dodatkowo spersonalizować i wyróżnić serwer na liście. Z najprostszych to wyświetlanie innego MOTD w zależności od tego jaki gracz na nie patrzy, używanie placeholderów (z np. PlaceholderAPI) lub wyświetlanie nieprawdziwej ilości slotów. Bardziej zaawansowanymi funkcjami to wyświetlanie zamiast listy graczy (po najechaniu na ich liczbę) własnych informacji - dobre miejsce na wyświetlanie adresów np. strony internetowej, discorda itp. 

Część pluginów oferują również wyświetlanie własnej wiadomości, gdy gracz używa przestarzałej/zbyt nowej wersji serwera (wyświetlanej na lewo od ikony z pingiem). Czasem możliwe jest nawet wymuszenie wyświetlania tej informacji - co pozwala np. na wyświetlanie liczby graczy z własnymi formatowaniem (np. sama liczba graczy bez maksymalnej liczby slotów). Jednym z ciekawszych sposobó na użycie tej opcji to wyświetlanie własnych informacji *na lewo* od ikony serwera np. wiadomości `Dołącz na serwer --->` co dodatkowo wyróżni nasz serwer - wystarczy dodać z prawej strony wystarczającą ilość spacji. Warto jednak mieć na uwadze, że nie zawsze taka informacja może się dobrze wyświetlać na różnych rozdzielczościach.

Konfiguracje tych opcji znajdziecie w konfiguracjach pluginów (oczywiście o ile same pluginy je wspierają). My nie jesteśmy w stanie podać dokładnych instrukcji jak skonfigurować dane pluginy.
