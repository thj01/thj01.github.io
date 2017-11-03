def faktor(a,b):
	
	if a%b == 0:
		
		print("{0} er en faktor i {1}".format(b,a))
	
	else:
	
		print("{0} er IKKE en faktor i {1}".format(b,a))
	
faktor(3097,37) # False

faktor(2048,8) # True

faktor(10,5) # True
