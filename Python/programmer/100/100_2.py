from random import randrange

antal_slag = 0

antal_point = 0

#spillernavn = input("Indtast dit navn: ")

spillernavn = "Thomas"

#valg=input("\nVelkommen til {0}. Vil du gerne starte spillet? (j/n): ".format(spillernavn))


### Her starter selve spillet



while True:

	slag = randrange(1,7)

	while slag != 6:
		
		antal_slag +=1
		
		antal_point += slag
		
		print("\nDu slog en {0}'er og du har nu {1} point.".format(slag, antal_point))
		
		valg = input("Vil du prøve at slå igen? (j/n): ")
		
		if valg is "j":
			
			slag = randrange(1,7)
		
		else:
			
			print("\nTak for spillet {2}\nDu fik ialt {0} point på {1} slag.".format(antal_point,antal_slag,spillernavn))
			
			exit(0)				
				
	print("\n\n\tDu slog en 6'er. Du fik ialt {0} point på {1} slag".format(antal_point, antal_slag))


