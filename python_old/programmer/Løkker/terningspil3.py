from random import randrange

navn = input("Hvad er dit navn: ")

print("\nHej {0}".format(navn))

print("""

Vælg terning

	1) D4
	2) D6
	3) D10
	4) D20
""")

terning = input("Hvilken terning vælger du?: ")

if terning == "1":
	valgt_terning = "D4"
	antal_sider = 4
elif terning == "2":
	valgt_terning = "D6"
	antal_sider = 6
elif terning == "3":
	valgt_terning = "D10"
	antal_sider = 10
elif terning == "4":
	valgt_terning = "D20"
	antal_sider = 20
else:	
	print("\n *** Du er et fjols ***")
	exit(0)
	
print("\nDu valgte en {0}".format(valgt_terning))

antal_slag = int(input("\nNå {0}, hvor mange slag vil du slå?: ".format(navn)))

tabel = {"spiller":0,"pc":0,"uafgjort":0}


for i in range(antal_slag):
	
	slag_pc = randrange(1,antal_sider+1)
	slag_spiller = randrange(1,antal_sider+1)
	
	if slag_pc < slag_spiller:
		tabel["spiller"] +=1
	elif slag_spiller < slag_pc:
		tabel["pc"] +=1
	else:
		tabel["uafgjort"] +=1
		
print("""

{0} vandt {1} gange
Computeren vandt {2} gange
Der blev spillet uafgjort {3} gange.

""".format(navn, tabel["spiller"], tabel["pc"], tabel["uafgjort"]))
		
if tabel["spiller"] > tabel["pc"]:
	
	print("{0} vandt".format(navn))
	
elif tabel["pc"] > tabel["spiller"]:
	
	print("Computeren vandt!")
	
else:
	
	print("Det blev uafgjort")	

	
