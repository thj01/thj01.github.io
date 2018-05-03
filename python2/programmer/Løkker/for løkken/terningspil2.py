from random import randrange

antal_slag = int(input("Hvor mange slag?: "))

antal_1 = 0

antal_2 = 0

antal_3 = 0

antal_4 = 0

antal_5 = 0

antal_6 = 0


for i in range(antal_slag):
	
	
	slag = randrange(1,7)
	
	if slag == 1:
		
		antal_1 +=1

	elif slag == 2:
		
		antal_2 +=1
		
	elif slag == 3:
		
		antal_3 +=1
		
	elif slag == 4:
		
		antal_4 +=1

	elif slag == 5:
		
		antal_5 +=1
		
	else:
		
		antal_6 +=1

print("""

Du slog:

	{0} enere
	{1} toere
	{2} treere
	{3} firere
	{4} femmere
	{5} seksere

""".format(antal_1, antal_2, antal_3,antal_4,antal_5,antal_6))

