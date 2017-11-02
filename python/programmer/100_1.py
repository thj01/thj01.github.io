from random import randrange



antal_slag = 0

antal_point = 0

slag = randrange(1,7)

while slag != 6:
	
	antal_slag +=1
	
	antal_point += slag
	
	print("\nDu slog en {0}'er og du har nu {1} point.".format(slag, antal_point))
	
	slag = randrange(1,7)

print("\n\n\tDu slog en 6'er. Du fik ialt {0} point på {1} slag".format(antal_point, antal_slag))





