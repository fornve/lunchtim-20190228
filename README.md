# lunchtime

To jest aplikacja która została stworzona podczas prezentacji ship.it 2019-02-28. 

## Uruchomienie projektu
```
Załóż konto na firebase.google.com
1. Włącz autoryzację przez google
2. Skopiuj ustawienia dla web na potrzeby pliku config.j.js ;) http://tiny.cc/s2mo3y

Sklonuj repo, wejdź do niego:
1. npm i
2. firebase init
3. Stwórz config.j.js
```

### Kompiluje zmienione pliki i aktualizuje aplikację lokalną na bierząco
```
npm run serve
```

### Kompiluje i minimalizuje pliki
```
npm run build
```

### Wysyłanie na produkcję
```
firebase deploy --only hosting
```
