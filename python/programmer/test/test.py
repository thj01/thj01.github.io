from random import randrange

navn = input("Hvad hedder du?: ")

print("Velkommen til {0}".format(navn))

print("""

Du skal vælge en terning

	1) D4 - 4 sider
	2) D6 - 6 sider
	3) D10 - 10 sider
	4) D20 - 20 sider

""")

while True:

	valg = input("Indtast den terning du ønsker: ")

	if valg == "1":
		terning = "D4"
		antal_sider = 4
		break
		
	elif valg == "2":
		terning = "D6"
		antal_sider = 6
		break
		
	elif valg == "3":
		terning = "D10"
		antal_sider = 10
		break
	elif valg == "4":
		terning = "D20"
		antal_sider = 20
		break
	else:
		print("Vælg en anden terning ... IDIOT")	


print("Du valgte en {0} terning".format(terning))

antal_slag = int(input("Hvor mange gange vil du slå?"))

tabel = {"bruger":0, "pc":0, "uafgjort":0}

for i in range(antal_slag):

	slag_bruger = randrange(1,antal_sider+1)
	slag_pc = randrange(1,antal_sider+1)

	if slag_bruger < slag_pc:
		
		tabel["pc"] +=1
	
	elif slag_bruger > slag_pc:
		
		tabel["bruger"] +=1
		
	else:
		
		tabel["uafgjort"] +=1
		
if tabel["bruger"] < tabel["pc"]:
	
	vinder = "Computer"		
	
elif tabel["bruger"] > tabel["pc"]:
	
	vinder = navn
	
else:
	
	vinder = "Ingen"	
		
		
print("""

{0} vandt {1} gange
Computeren vandt {2} gange
Der blev spillet uafgjort {3} gange

{4} vandt

""".format(navn, tabel["bruger"], tabel["pc"], tabel["uafgjort"], vinder))
		

