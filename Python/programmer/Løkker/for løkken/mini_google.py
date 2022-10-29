
tekst = """
Pythons filosofi[redigér | redigér wikikode]
Python er et multi-paradigme-sprog. Det betyder at programmørerne ikke bliver tvunget til at bruge en bestemt udviklingsmodel, men kan vælge mellem flere forskellige. Python understøtter blandt andet objektorientering, struktureret programmering, funktionel programmering og aspektorienteret programmering. Andre paradigmer er understøttet af udvidelser. For eksempel udvider pyDBC og Contracts for Python kontraktprogrammering på samme måde som programmeringssproget Eiffel. Python benytter sig af dynamisk typetjek og garbage collection. En væsentlig feature er den dynamiske binding, dvs. at navne på funktioner og variable først tilknyttes deres respektive objekter på afviklingstidspunktet.

Som kontrast til de mange forskellige paradigmer der understøttes, er grammatiken meget simpel, og stort set fri for syntaktisk sukker. Den væsentligste forskel fra de fleste andre sprog på dette punkt er at der ikke bruges tegn til angivelse af logiske niveauer. I stedet angives en logisk programblok ved ensartet indrykning med mellemrum eller tabulatortegn. Dette er et udslag af udviklernes kultur eller ideologi, hvor sproget er udformet så konstruktioner der bliver betragtet som "smukke", "entydige" eller "simple" favoriseres.

Et andet vigtigt mål for Pythons udviklere er at sproget skal være sjovt at bruge. Det ses blandt andet i navngivningen (efter tv-serien Monty Pythons Flyvende Cirkus), i de mange mere eller mindre skjulte referencer til Monty Pythons-sketches i koden og en fra tid til anden munter tilgang til sproget i vejledninger og referencemanualer. Et eksempel er brugen af metasyntaktiske variabler, hvor man ofte ser spam og eggs brugt i eksempler, hvor man ellers ofte ser foo og bar.
"""

valg = input("Hvilket ord vil du søge på?: ")


antal = 0

for word in tekst.split():
	
	if valg == word:
		
		antal +=1
		
	
print("Ordet {0} står i teksten {1} gang(e)".format(valg, antal))


