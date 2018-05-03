
from random import randrange

spiller_navn = input("Hvad er dit navn: ")

spiller_slag = randrange(1,7)

computer_slag = randrange(1,7)

print("\n{0}: {1}".format(spiller_navn, spiller_slag))

print("Computer: {0}\n".format(computer_slag))


if spiller_slag > computer_slag:
	
	print("{0} vandt".format(spiller_navn))
	
elif spiller_slag == computer_slag:
	
	print("Det blev uafgjort")
	
else:

	print("Computeren vandt!")

