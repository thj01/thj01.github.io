from random import random, shuffle

klasse = input("Hvilket lokale er du i?: ")
gruppe_str = int(input("Hvor store skal grupperne være?: "))
	
elever = []

file = open("{0}.txt".format(klasse),"r")

for line in file:
	elever.append(line[:-1])

shuffle(elever)
antal_elever = len(elever)

gruppe_nr = 0

for i in range(0,antal_elever):
	
	if i%gruppe_str == 0:
		gruppe_nr +=1
		print("\n\nGruppe {0}".format(gruppe_nr), end = ": ")

	print("{0}".format(elever[i]), end= ", ")
