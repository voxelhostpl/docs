# Ustawianie trybu non-premium
:::warning Uwaga!
Zmiana trybu z premium na non-premium może spowodować utratę danych graczy, która spowodowana jest zmianą UUID.
Nie zmieniaj trybu gdy posiadasz świat w którym nie chcesz stracić postępu.
:::

## Konfiguracja server.properties

Konfiguracja trybu non-premium jest bardzo prosta. Aby pozwolić graczom nie posiadającym legalnej wersji gry wejść na serwer, 
należy przejść do plików naszego serwera. Następnie musimy odszukać plik `server.properties`. Otwieramy plik dwukrotnie na niego klikając.
Opcja, która nas interesuje to `online-mode=true`. Należy zmienić jej wartość na `false`. Po zmianie nasza opcja będzie wyglądała tak:
`online-mode=false`. Po wykonaniu tej operacji należy zapisać plik i zrestartować serwer.

## Naprawianie skinów graczy premium

TODO