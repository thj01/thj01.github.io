from random import random, shuffle

b1 = [
	"Anne Dorthe",
	"Camilla",
	"Cecilie",
	"Kamilla",
	"Louise H",
	"Louise S",
	"Meghan",
	"Nanna",
	"Sofie B",
	"Sophie S"
	]
	
b2 = [
	"Andreas N",
	"Andreas R",
	"Anya",
	"Caroline",
	"Frederik B",
	"Jacob",
	"Jeppe",
	"Jesper",
	"Jonas",
	"Juri",
	"Kirstine",
	"Lars",
	"Mads",
	"Maria",
	"Mikkel",
	"Natasja",
	"Nikolaj",
	"Oliver",
	"Pelle",
	"Philip",
	"Sarah",
	"Sofie",
	"Stine",
	"Tanya",
	"Viktor",
	"William"
	]	

b3 = [
	"Alexander",
	"Andreas",
	"Anna",
	"Ann-Sofie",
	"Cathrine",
	"Cecilie",
	"Christofer",
	"Ditte",
	"Frederik",
	"Kiva",
	"Lea",
	"Mathias",
	"Naja",
	"Nanna",
	"Nicklas R",
	"Niclas K",
	"Niels",
	"Nikoline",
	"Olivia",
	"Signe",
	"Stine",
	"Thea",
	"Tilde",
	"Trine"
	]
	
b4 = [
	"Alexander",
	"Andreas",
	"Cecilie",
	"Harismi",
	"Johanne",
	"Katrine",
	"Lasse",
	"Martin",
	"Mathias",
	"Negin",
	"Niels",
	"Nikolaj",
	"Rasmus",
	"Signe"
	]
	
hhx1 = b2 + b3 + b4


valg = input("Hvilket lokale er du i?: ")

while True:
	if valg == "b1":
		klasse = b1
		break
	elif valg == "b2":
		klasse = b2
		break
	elif valg == "b3":
		klasse = b3
		break
	elif valg == "b4":
		klasse = b4
		break
	elif valg == "hhx1":
		klasse = hhx1
		break
	elif valg == "a":
		print("Programmet afsluttes nu.")
		exit(0)
	else:
		valg = input("Du skrev en klasse jeg ikke kender til\n\nHvilket lokale er du i?: ")

antal_elever = len(klasse)

print("\n\tDer er i alt {0} elever i {1}".format(antal_elever, valg))
	
gruppe_str = int(input("\nHvor store skal grupperne være?: "))	
	

shuffle(klasse)
shuffle(klasse)
shuffle(klasse)
shuffle(klasse)

gruppe_nr = 0

for i in range(0,antal_elever):
	
	if i%gruppe_str == 0:
		gruppe_nr +=1
		print("\n\nGruppe {0}".format(gruppe_nr), end = ": ")
		
	if i%gruppe_str == gruppe_str-1:
		print("{0}".format(klasse[i]), end= " ")
	else:
		print("{0}".format(klasse[i]), end= ", ")
	
input("")
