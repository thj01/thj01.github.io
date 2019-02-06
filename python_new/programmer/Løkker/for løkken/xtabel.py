def tabel(a,b):
	
	print("\n*** Udskriver {0} tabellen ***".format(a))

	for i in range(a,a*b+1,a):
	    
		print(i, end=" ")
		
	print("")


for i in range(1,11):

	tabel(i,10)
