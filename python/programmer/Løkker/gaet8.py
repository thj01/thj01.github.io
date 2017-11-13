print("Gæt på et tal mellem 1 og 9\n")

starter = 1

gæt = 0

while starter == 1 :
	gæt = int(input("Gæt hvilket tal jeg er: "))

	if gæt == 8:
		print ("\nN I C E")
		exit()


#~ from random import randrange

#~ print("Gæt på et tal mellem 1 og 9\n")

#~ tal = randrange(1,10)

#~ antal_gæt = 0

#~ starter= 0

#~ while starter != 8:
	
	#~ if antal_gæt ==4:
		#~ print ("kan man virkeligt gætte forkert så mange gange")

	#~ antal_gæt +=1
		
	#~ gæt = int(input("Gæt hvilket tal jeg er: "))
    
	#~ if gæt == tal:
		#~ print ("\nN I C E")
		#~ exit()
	
	#~ if gæt<1 or gæt>9:
		#~ print("Du er useriøs")
		#~ exit()

	




