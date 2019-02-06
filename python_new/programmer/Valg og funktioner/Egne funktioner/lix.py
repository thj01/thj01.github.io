# https://da.wikipedia.org/wiki/LIX

text ="""
 
Python er et højniveau programmeringssprog som lægger vægt på at koden er let læselig og kræver så få linier som muligt. Med andre ord er det et programmeringssprog der hurtigt at komme igang med. Men ligesom alle andre programmeringssprog kræver det viden og erfaring at lave større kodearbejde.

Dette materiale er skabt sådan, at du metodisk bliver ført ind i hvordan Python virker ved hjælp af eksempler og forklaringer. For at lære mest muligt bør du indtaste kodeeksemplerne fremfor at kopiere dem, da det vil hjælpe dig til at lære mere effektiv. Materialet er lavet og testet på Ubuntu 16.04 sammen med Python 3.5.

"""
antal_punktum = text.count(".")
text = text.split()
antal_ord = len(text)
lange_ord = 0 #antal ord over 6 tegn

for word in text:
	if len(word)>6:
		lange_ord = lange_ord+1
# ~ print(lange_ord)
# ~ print(antal_ord)
lix = antal_ord/antal_punktum + lange_ord*100/antal_ord
print("LIX - BEREGNER\n--------------\n")
print("Tekstens lix er: {0}\n".format(round(lix,0)))
print("Beskrivelse")

if lix<25:
	print("\n0-24:\n\nLet tekst for alle læsere, f.eks. børnelitteratur")
elif lix < 35:
	print("\n25-34:\n\nLet for øvede læsere, f.eks. ugeblade og skønlitteratur for voksne")
elif lix < 45:
	print("\n35-44:\n\nMiddel, f.eks. dagblade og tidsskrifter.")
elif lix < 55:
	print("\n45-54:\n\nSvær, f.eks. saglige bøger, populærvidenskabelige værker, akademiske udgivelser.")
else:
	print("\n55+:\n\nMeget svær, faglitteratur på akademisk niveau, lovtekster.")
