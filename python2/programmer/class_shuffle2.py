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
	"Frederik P",
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
	"Nikolaj P",
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
	"Alexander P",
	"Andreas L",
	"Anna",
	"Ann-Sofie",
	"Cathrine",
	"Cecilie M",
	"Christofer",
	"Ditte",
	"Frederik J",
	"Kiva",
	"Lea",
	"Mathias M",
	"Naja",
	"Nanna",
	"Nicklas R",
	"Niclas K",
	"Niels",
	"Nikoline",
	"Olivia",
	"Signe J",
	"Stine",
	"Thea",
	"Tilde",
	"Trine"
	]
	
b4 = [
	"Alexander F",
	"Andreas J",
	"Cecilie D",
	"Harismi",
	"Johanne",
	"Katrine",
	"Lasse",
	"Martin",
	"Mathias R",
	"Negin",
	"Niels",
	"Nikolaj H",
	"Rasmus",
	"Signe E"
	]
	
hhx1 = b2 + b3 + b4


valg = input("Hvilket lokale er du i (B1-4, hhx1) ?: ")

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
