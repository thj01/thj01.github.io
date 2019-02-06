def faktor(a,b):
	
	print("Undersøger om {0} er en faktor i {1}.".format(b,a))
	
	if a%b == 0:
		
		print("{0} er en faktor i {1}.\n".format(b,a))

	else:
		
		print("{0} er ikke en faktor i {1}.".format(b,a))


faktor(10,2)

faktor(3097,37)
