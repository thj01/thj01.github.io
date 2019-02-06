from random import randrange

liste = {1:0,2:0,3:0,4:0,5:0,6:0}

antal_slag=int(input("Hvor mange slag vil du slå: "))

for i in range(antal_slag):

	kast = randrange(1,7)
	
	if kast == 1:
		
		liste[1] +=1
		
	elif kast == 2:
		
		liste[2] +=1		
		
	elif kast == 3:
		
		liste[3] +=1		
		
	elif kast == 4:
		
		liste[4] +=1		
		
	elif kast == 5:
		
		liste[5] +=1		
		
	else:
		
		liste[6] +=1
		
print(liste)		
