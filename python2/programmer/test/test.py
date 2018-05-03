

mail = input("Indtast din mail: ")

while True:
	
	test = 0
	
	antal_tegn = len(mail)
	
	antal_a = mail.count("@")
	
	#dk = mail[-3:].count(".dk")
	
	if antal_tegn < 8 :
		print("Der er for få tegn i din mail.")
		test += 1
	if antal_a < 1:
		print("Mailen mangler et @")
		test += 1
	elif antal_a > 1:
		print("Mailen har for mange @")		
		test += 1
	if mail[-3:] != ".dk":
		print("Det er ikke en dansk mail (.dk)!")
		test += 1
	if mail[-4:].count("@") > 0:
		print("Der står et @ blandt de sidste 4 tegn")
		test +=1
	if mail[:1] =="@":
		print("Der må ikke stå @ først")
		test +=1 
	if test == 0:
		print("Din mail er korrekt!")
		break
	else:
		mail = input("Prøv at indtaste en ny mail: ")
