# Pierwsze uruchomienie serwera

Przy zakupie serwera, do wyboru będzie silnik serwera i jego wersja. Przy poprawnym wyborze wersji, serwer po zakupie powinien włączyć sie automatycznie. W razie problemów zapytaj na naszym [discordzie](https://discord.gg/XNHmCUK2uQ).<br />

Poniżej w odpowiednich sekcjach zostanie pokazane: <br />
* Jak wgrać plugin na serwer,
* Jak wgrać mody na serwer,
* Jak zmienić seed świata,
* Jak wgrać swój świat.
* Jak ustawić serwer non-premium

W prawym rogu znajdują sie wszystkie sekcje, można wygodnie przeskoczyć do tej w której jesteś zainteresowany.

## Jak wgrać plugin na serwer

Na samym początku by móc wgrać plugin na serwer musisz go pobrać, interesujące Cię pluginy można znależć na [SpigotMC](https://www.spigotmc.org). <br />

Aby wgrać pluginy na nasz serwer musisz wejść do folderu `plugins` z głównego katalogu serwera, przykładowy katalog główny znajduje sie na zdjęciu poniżej. ![](/img/start/mainfolderpaper.png)

Znajdując się już w folderze plugins przeciągamy plik pluginu z eksploratora plików na strone, a po chwili, plugin znajdzie sie na naszym serwerze.

Do rozpoczęcia działania pluginu potrzebujemy zrestartować swój serwer.

## Jak wgrać mody na serwer

Na samym początku by móc wgrać mody na serwer musisz je pobrać. Można ich szukać np. na [CurseForge](https://www.curseforge.com/minecraft/mc-mods) lub [Modrinth](https://modrinth.com/mods) dla serwerów opartych o Fabric. <br />

Aby wgrać mody na nasz serwer musisz wejść do folderu `mods` z głównego katalogu serwera, przykładowy katalog główny znajduje sie na zdjęciu poniżej. ![](/img/start/mainfolderforge.png)

Znajdując się już w folderze mods przeciągamy plik moda z eksploratora plików na strone, a po chwili mod znajdzie sie na naszym serwerze.

Do rozpoczęcia działania moda potrzebujemy zrestartować swój serwer.

## Jak zmienić seed świata

:::warning Uwaga!
Zmiana tych ustawień zgodnie z poniższym opisem wiąże się z usunięciem obecnego świata, co spowoduje usunięcie obecnego postępu.
:::

By wygenerować nowy losowy seed na nasz serwer należy: 
* wyłączyć serwer, 
* usunać pliki `world`, `world_nether`, `world_the_end`. 

Po usunięciu plików i ponownym uruchomieniu serwera wygeneruje sie nowy świat.

Jeśli świata ma posiadać konkretny seed trzeba go podać w pliku `server.properties`. który znajduje sie w głównym folderze, interesująca nas opcja to `level-seed`, wpisujemy tam wybrany przez nas seed po ponownym włączeniu serwera, świat zostanie wygenerowany.

## Jak wgrać swój świat

By wgrać swój świat nasz serwer należy: <br />
* wyłączyć serwer, 
* usunać pliki `world`, `world_nether`, `world_the_end`. 

Gdy pobieramy świat z internetu powinien być spakowany w rozszerzeniu `.zip`, gdy posiadamy owy plik należy przeciągnąc go do głównego folderu serwera i rozpakować klikając prawym przyciskiem myszy. <br />
Gdy chcemy spakować świat ze swojego komputera, potrzebujemy programu np. [7zip](https://www.7-zip.org) i spakować swój świat klikając prawym przyciskiem myszy do formatu `.zip`. Po poprawnym spakowaniu powtórzyć czynność podaną wyżej.

## Jak ustawić serwer non-premium

:::warning Uwaga!
Zmiana trybu z premium na non-premium może spowodować utratę danych graczy, która spowodowana jest zmianą UUID.
Nie zmieniaj trybu gdy posiadasz świat w którym nie chcesz stracić postępu.
:::

Konfiguracja trybu non-premium jest bardzo prosta. Aby pozwolić graczom nie posiadającym legalnej wersji gry wejść na serwer, 
należy przejść do plików naszego serwera. Następnie musimy odszukać plik `server.properties`. Otwieramy plik dwukrotnie na niego klikając.
Opcja, która nas interesuje to `online-mode=true`. Należy zmienić jej wartość na `false`. Po zmianie nasza opcja będzie wyglądała tak:
`online-mode=false`. Po wykonaniu tej operacji należy zapisać plik i zrestartować serwer.
