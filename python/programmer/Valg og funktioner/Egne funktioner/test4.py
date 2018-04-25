
import random

enkelt_ord = "aften"

midter_bogstaver = enkelt_ord[1:-1]

print(midter_bogstaver)

liste = []

	
for char in midter_bogstaver:	
	
	liste.append (char)

n = 0
	
for i in liste:
	
	n +=1
	
	liste_rest = liste[1:]

	
	if n < len(liste):
	

		liste_rest_shuffle = random.shuffle(liste_rest)
		
		print(liste_rest[0])
		
		del liste_rest[0]
		
		
	else:
		
		print(liste_rest[0])
		
	liste = liste_rest.append(liste)



print(liste_rest)

