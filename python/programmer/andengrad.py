def andengrad(a,b,c):
	



	if b>=0:
		
		b_s = "+ {0}".format(b)
		
	else:
		
		b_s = "- {0}".format(abs(b))
		
	if c>=0:
		
		c_s = "+ {0}".format(c)
		
	else:
		
		c_s = "- {0}".format(abs(c))
		
 
	
	
	
	print("\nHer undersøges funktionen: f(x) = {0}x^2 {1}x {2}\n".format(a,b_s,c_s))
	
	D = pow(b,2)-4*a*c
	
	Tp_x = -b/(2*a)
	
	Tp_y = -D/(4*a)
	
	if Tp_x.is_integer():
		Tp_x = int(Tp_x)
	if Tp_y.is_integer():
		Tp_y = int(Tp_y)

	
	if D == 0:
		
		x_D_0 = -b/(2*a)
		
		if x_D_0.is_integer():
			x_D_0 = int(x_D_0)


		print("\tAndegradsliningen har en løsning og skærer x-aksen i punktet {0}".format(x_D_0))
		
		if a>0:
			print("\n\tParablens ben vender opad")
		else:
			
			print("\n\tParablems ben vender nedad")

	elif D>0:
		
		x_1 = (-b+pow(D,1/2)) / (2*a)
		
		x_2 = (-b-pow(D,1/2)) / (2*a)
		
		if x_1.is_integer():
			x_1 = int(x_1)
		
		if x_2.is_integer():
			x_2 = int(x_2)



		if x_1 > x_2:
			
			print("\tAndegradsligningen har 2 løsninger og skærer x-aksen i punkterne {0} og {1}".format(x_2,x_1))

		else:
			
			print("\tAndegradsligningen har 2 løsninger og skærer x-aksen i punkterne {0} og {1}".format(x_1,x_2))
		
		if a>0:
			print("\n\tParablens ben vender opad")
		else:
			print("\n\tParablems ben vender nedad")
			
			
	print("\n\tParablen skærer y-aksen i punktet {0}".format(c))
	
	print("\n\tToppunktet er: Tp = ( {0} , {1} )\n".format(Tp_x,Tp_y))

andengrad(1,4,4)
andengrad(-1,-1,6)