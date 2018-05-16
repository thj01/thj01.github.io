##find eksonentialfunktion ud fra koordinater

def norm_eks(x1,y1,x2,y2):
	
	a = pow(y2/y1,1/(x2-x1))
	
	a = round(a,4)

	b = y1/pow(a,x1)
	
	b = round(b,4)
	
	print("Punkterne P=({0},{1}) og Q=({2},{3}), giver eksponentialligningen:\n\n\t y = {4} * {5}^x\n\n".format(x1,x2,y1,y2,b,a) )
	
norm_eks(-4,1,4,3)

norm_eks(-1,4,8,1)


