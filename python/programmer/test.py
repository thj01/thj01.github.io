<<<<<<< HEAD
for i in range(1,12):
	trekanttal = int((i*(i+1))/2)
	
	print (trekanttal, end=" - ")
=======
def faktor(a,b):
	
	if a%b == 0:
		
		print("{0} er en faktor i {1}".format(b,a))
	
	else:
	
		print("{0} er IKKE en faktor i {1}".format(b,a))
	
faktor(3097,37) # False

faktor(2048,8) # True

faktor(10,5) # True
>>>>>>> 9df20d9cc03bc70bac36c02ade5998d1c0e120a5
