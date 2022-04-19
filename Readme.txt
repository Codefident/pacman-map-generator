Opis dot. projektu Pacman by Piotr Klęp, 3ID2

Na wstępie chciałbym zaznaczyć, że jest drobny problem przy zaznaczaniu
	- trzeba zacząć jak i skończyć na canvasie, a nie poza nim, bo wtedy nie dojdzie do wielokrotnego
	zaznaczenia

O projekcie:

- jest on oparty na klasach i obiektach (w projekcie zdefiniowałem 7 klas, zamiarem nie była tylko czysta
	obiektowość, ale również porządek w kodzie i prostsze jego pisanie)

- jest podzielony na pliki (6 plików .js znajduje się w katalogu js)

- przy powiększaniu strony projekt ma się dobrze

- (1p.) - wygląd i zachowanie (zastosowałem opacity jak i hovery przy najeżdżaniu myszką oraz podgląd
	zaznaczonych elementów po zakończeniu zaznaczania)
	- menu contextowe z dostępnymi opcjami (pominąłem niedziałające)

- (0.5p)- (A) - zaznaczanie pojedynczych bloków
	      - po wybraniu elementu ze spritesheeta wstawia się on w wybrane pole
	      - po wstawieniu elementu dochodzi do odznaczenia elementu mapy(wyjątek, opcja "automatic")

- (1p.) - (B) - zaznaczanie grupy bloków poprzez obszar
	      - na zaznaczonych elementach można wykonać akcję

- (1p.)?- klawisz Ctrl / Meta umożliwia dodawanie do zaznaczenia

- (0.5p.) - automatyczne zaznaczanie kolejnego bloku po wstawieniu, przy wielu blokach wstawia po
		ostatnim wybranym

- (1.5p.) - copy + paste

- (1p.)   - cut + delete (samo delete też działa)