for i in range(3,20):
	
	vinkelsum = 180*(i-2) 
	enkelt_vinkel = vinkelsum/i

	enkelt_vinkel = round(enkelt_vinkel,2)
		
	if enkelt_vinkel.is_integer():
		
		enkelt_vinkel = int(enkelt_vinkel)
		
	
	print("I en {0}-kant er vinkelsummen {1}° og den enkelte vinkel er {2}°".format(i,vinkelsum,enkelt_vinkel))
