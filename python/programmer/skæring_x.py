def skæring_x(a,b):
	
	x = -b/a
	
	if x.is_integer():
		x = int(x)

	
	print("Linjen skærer x-aksen i værdien {0}".format(x))
	
skæring_x(2,2)

skæring_x(2,-2)
