# Podpinanie serwera pod BungeeCord

## Wymagania
Na ten moment voxelhost.pl nie posiada BungeeCord w swojej ofercie. Jeżeli jednak posiadasz własną instancję proxy nie powstrzymujemy 
od dodawania do niego serwerów hostowanych w voxelhost.

### Szczegółowe wymagania
- BungeeCord
- (opcjonalnie) Baza danych MySQL

## Konfiguracja BungeeCord

### Pobieranie
Ze względu na architekturę serwisu voxelhost.pl wymagane jest wgranie pluginu, który pozwoli na podłączenie serwerów hostowanych na voxelhost.pl pod BungeeCord.
Dzięki uprzejmości członka naszej społeczności posiadamy dedykowany plugin dla BungeeCorda. Repozytorium z kodem jest dostępne [tutaj](https://github.com/Kamilkime-Plugins/VoxelBungee/). Gotowy do pobrania plugin dostępny jest [tutaj](https://github.com/Kamilkime-Plugins/VoxelBungee/releases).

### Instalacja
Aby zainstalować plugin należy przerzucić plik w formacie `.jar` do folderu `plugins/` znajdującego się w folderze w którym posiadamy BungeeCorda.
Po uruchomieniu proxy zostanie wygenerowany plik konfiguracyjny.

### Konfiguracja
Konfiguracji dokonujemy przez plik znajdujący się pod ścieżką `plugins/VoxelBungee/config.yml`. Wszystkie opcje są szczegółowo opisane, w razie
wątpliwości chętnie pomożemy skonfigurować plugin na naszym [Discordzie](https://discord.com/invite/GXqxqy6swA).

