from random import randrange

antal_runder = 0

point_i_alt = 0

#spillernavn = input("Indtast dit navn: ")

spillernavn = "Thomas"

#valg=input("\nVelkommen til {0}. Vil du gerne starte spillet? (j/n): ".format(spillernavn))

valg= "j"

### Her starter selve spillet

while valg is "j":

	slag = randrange(1,7)
	
	antal_runder +=1
	
	point_runde = 0

	while slag != 6:
		
		print(slag)
		
		slag = randrange(1,7)
		
		point_runde += slag
		
		print(point_runde)
		
		
	valg = input("Du slog en 6'er. Vil du prøve igen?: ")


else:
	
	print("\n\tOK. Hyg dig")
