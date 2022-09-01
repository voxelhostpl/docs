# Ustawienie wyglądu serwera

Gdy stworzysz już swój serwer na pewno chciałbyś, żeby wyróżniał się na liście serwerów.

Poniżej w odpowiednich sekcjach zostanie pokazane: <br />
* [Jak zmienić MOTD](#jak-ustawić-motd)
* [Jak ustawić własną ikonę](#jak-ustawić-własną-ikonę)
* [Dodatkowe opcje personalizacji](#dodatkowe-opcje-personalizacji)

## Jak ustawić MOTD serwera

Na ustawienie MOTD (wiadomości dnia), czyli dwóch linijek wyświetlanych przy każdym serwerze mamy 2 sposoby.

### 1. Zmiana w sever.properties
Bardzo prosta i niewygodna opcja. Polega na zmianie motd w pliku `server.properties`, który znajduje się w głównym katalogu z plikami serwera. Musimy odnaleźć w nim pole `motd` i podmienić domyślne `\u00A79Serwer hostowany na \u00A7nvoxelhost.pl` na naszą własną wiadomość. Pomocne przy tym może okazać się [to narzędzie](https://minecraft.tools/en/motd.php) - ułatwi ono nam sformatowanie samego motd (gdyż w tym miejscu nie jest wspierany format ze znakiem &). Po stworzeniu motd i pokolorowaniu go w odpowiedni sposób, wystarczy teraz kliknąć przycisk `Create the Motd` i wkleić podaną wartość w pole `motd` np. `motd=\u00a7cFajny Serwer`

### 2. Użycie zewnętrznego pluginu
Łatwiejszym i lepszym rozwiązaniem może okazać się użycie zewnętrznego pluginu. Pozwoli on nam na łatwiejsze ustawienie naszego MOTD i użycie łatwiejszego formatu z użyciem `&` lub użycie HEX kolorów. 

Lista przykładowych pluginów (my jednak nie polecamy żadnego konkretnego): <br />
* [ServerListPlus](https://www.spigotmc.org/resources/serverlistplus.241/)
* [MOTD](https://www.spigotmc.org/resources/motd-1-8-1-19-2.8390/)
* [ServerListMOTD X](https://dev.bukkit.org/projects/serverlistmotd)

Nie jesteśmy w stanie podać dokładnych instrukcji jak skonfigurować plugin jaki wybierzecie. Każdy z tych pluginów może mieć różniącą się od siebie konfiguracje lub funkcjonalności. Najlepiej samemu znaleźć plugin, który będzie odpowiedni dla twojego serwera.

## Jak ustawić własną ikonę dla serwera

Ustawienie ikony serwera jest banalnie proste. Wystarczy przygotować sobie ikonę jaką chcemy posiadać. Musi być w rozdzielczości dokładnie `64 x 64` i posiadać rozszerzennie `png`. Można użyć do tego wielu dostępnych narzędzi - programów jak `GIMP`, `Paint.NET`, `Adobe Photoshop` itd. lub stron internetowych.

Gdy mamy już odpowiednią ikonę wystarczy ją teraz nazwać server-icon i wrzucić do głównego katalogu serwera. Zrestartować serwer i wszystko powinno działać.

## Dodatkowe opcje personalizacji

TODO
