def skæring(a,b,c,d):
	
	x = (d-b)/(a-c)

	y = a*x+b
	
	if x.is_integer():
	
		x = int(x)

	if y.is_integer():
	
		y = int(y)

	print("\nLinjerne skærer hinanden i punktet: P = ({0},{1})".format(x,y))
	


skæring(2,-3,-1/3,4)

skæring(1/2,-3,-1.5,3)
