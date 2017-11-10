from random import randrange


spiller_navn = input("Hvad er dit navn: ")

print("""
Du kan vælge at slå med 4 forskellige terninger, og du kan vælge mellem:

	1) D4	(4 sider)
	2) D6	(6 sider)
	3) D10	(10 sider)
	4) D20	(20 sider)

""")

valg_terning_type = int(input("Hvilken terning vil du spille med?: "))

if valg_terning_type == 1:
	
	terning_type = "D4"
	terning_sider = 4

elif valg_terning_type == 2:
	
	terning_type = "D6"
	terning_sider = 6
	
elif valg_terning_type == 3:
	
	terning_type = "D10"
	terning_sider = 10
else:
	
	terning_type = "D20"
	terning_sider = 20

	
print("\n\tDu valgte en {0}.".format(terning_type))

antal_slag = int(input("\n\nHvor mange slag vil du lave?: "))

print("\n\tDu valgte {0} slag.".format(antal_slag))

computer = 0
spiller = 0
uafgjort = 0

spiller_slag = randrange(1,terning_sider+1)
computer_slag = randrange(1,terning_sider+1)

for i in range(antal_slag):
	
	if computer_slag>spiller_slag:
		
		computer +=1
	
	elif computer_slag<spiller_slag:
		
		spiller +=1
		
	else:
		
		uafgjort +=1

	spiller_slag = randrange(1,terning_sider+1)
	computer_slag = randrange(1,terning_sider+1)


if computer>spiller:
	
	vinder = "Computeren vandt"
	
elif computer<spiller:
	
	vinder = "{0} vandt.".format(spiller_navn)
	
else:
	
	vinder= "Det blev uafgjort."
	
		
print("""

*********************************************

Computeren vandt {0} gange

{1} vandt {2} gange

Der blev spillet uafgjort {3} gange

*********************************************

{4}

""".format(computer, spiller_navn, spiller, uafgjort, vinder))



