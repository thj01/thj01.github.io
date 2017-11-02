def punkter(a,b,c,d):
	
	hældning = (d-b)/(c-a)
	
	skæring = b - hældning*a
	
	if hældning.is_integer():
		hældning = int(hældning)

	if skæring.is_integer():
		skæring = int(skæring)	



	if skæring >= 0:
		
		print("y={0}x+{1}".format(hældning, skæring))
	
	else:
		
		print("y={0}x{1}".format(hældning, skæring))


		
punkter(2,6,5,12)

punkter(2,2,-1,-4)
