def punkter(a,b,c,d):
	
	hældning = (d-b)/(c-a)
	
	skæring = b - hældning*a
	
	if hældning.is_integer():
		hældning = int(hældning)

	if skæring.is_integer():
		skæring = int(skæring)	



	if skæring >= 0:
		
		print("\n\nPunkterne P=({0},{1}) og Q=({2},{3}) gennemskæres af linjen: y = {4}x+{5}".format(a,b,c,d,hældning, skæring))
	
	else:
		
		print("\n\nPunkterne P=({0},{1}) og Q=({2},{3}) gennemskæres af linjen: y = {4}x{5}".format(a,b,c,d,hældning, skæring))
		


		
punkter(2,6,5,12)

punkter(2,2,-1,-4)
