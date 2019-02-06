from random import randrange

start = 0

### Her starter selve spillet

tabel = {"spiller":" ","antal_slag":0, "point":0, "runde":1}

#tabel["spiller"] = input("Indtast dit navn: ")

tabel["spiller"] = "Thomas"

#valg=input("\nVelkommen til {0}. Vil du gerne starte spillet? (j/n): ".format(tabel["spiller"]))

print("\n\n\t ***** Runde {0} *****".format(tabel["runde"]))

while True:
	
	slag = randrange(1,7)
	
	tabel["antal_slag"] +=1
	
	runde_point = 0
	
	while slag != 6:
		
		if slag != 6 and tabel["point"] + runde_point + slag > 15:
			
			print("\n\n\t Du har vundet spillet på {0} runde(r), og med {1} slag.".format(tabel["runde"], tabel["antal_slag"]))
			
			exit(0)
		
		runde_point += slag
		
		print("""
		
Du slog en {0}'er og du har nu {1} point.
		
Hvis du stopper nu har du samlet {2} point.

(runde: {3}, antal slag: {4}) 
		
		
		""".format(slag, runde_point, runde_point+tabel["point"], tabel["runde"], tabel["runde"], tabel["antal_slag"]))
		
		valg = input("Vil du fortsætte runden? (j/n): ")
		
		if valg == "j":
			
			slag = randrange(1,7)
			
		elif valg == "a":
			
			print("Du har valgt at afslutte spillet.")
			
			exit(0)
			
		else:
			
			tabel["point"] += runde_point
			
			tabel["runde"] +=1
			
			print("\n\n\t ***** Du er nu i runde {0} *****".format(tabel["runde"]))
			
			break

	runde_point = 0
	
	print("\n\n\t******************************************************************\n\tDu slog en 6'er, så du har mistet alle dine point i denne runde!\n\n\t******************************************************************\n")
