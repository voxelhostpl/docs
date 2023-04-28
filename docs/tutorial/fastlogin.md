# FastLogin (logowanie premium)

FastLogin to wtyczka, która pozwala na automatyczne logowanie graczy premium. Dzięki temu gracze nie muszą wpisywać hasła za każdym razem, gdy chcą się zalogować na serwerze.

## Wymagania

FastLogin wymaga serwera Purpur lub Paper oraz zainstalowania pluginu ProtocolLib i pluginu AuthMe Reloaded, lub innego kompatybilnego pluginu na logowanie.

## Instalacja

1. Pobierz najnowszą wersję FastLogin [tutaj](https://ci.codemc.io/job/Games647/job/FastLogin/lastSuccessfulBuild/artifact/bukkit/target/FastLoginBukkit.jar).
2. Pobierz również najnowszą wersję ProtocolLib [tutaj](https://ci.dmulloy2.net/job/ProtocolLib/lastSuccessfulBuild/artifact/build/libs/ProtocolLib.jar).
3. Skopiuj pliki FastLoginBukkit.jar i ProtocolLib.jar do folderu plugins Twojego serwera.
4. Uruchom/zrestartuj serwer.
5. Zmień wartość `useProxyAgnosticResolver` na `true` w pliku `config.yml`. Można go znaleźć w folderze `plugins/FastLogin`.
6. Zrestartuj serwer.

## Konfiguracja

Po zainstalowaniu, zmień `useProxyAgnosticResolver` na `true` w pliku `config.yml`, aby plugin działał poprawnie.

```
useProxyAgnosticResolver: true
```

## Częste problemy

### Plugin nie działa

Upewnij się, że zainstalowałeś ProtocolLib i kompatybilny plugin na logowanie. FastLogin nie będzie działał bez tych pluginów.

### Gracze muszą wpisywać hasło

Upewnij się, że zmieniłeś wartość `useProxyAgnosticResolver` na `true` w pliku `config.yml`.
