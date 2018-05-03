while True:	

	print()

	mail = input("Indtast din mail: ")
	
	print()

	mail_len = len(mail)

	count_a = mail.count("@")
		
	count_a_last = mail[-4:].count("@")

	fejl = 0
		
	if mail_len<7:
		
		print("\tMailen har for få tegn (mindre end 7)")
		
		fejl +=1
		
	if count_a < 1:
		
		print("\tMailen mangler @")
		
		fejl +=1
		
	if count_a > 1:
		
		print("\tMailen har for mange @")
		
		fejl +=1

	if count_a_last > 1:
		
		print("\t@ må ikke stå blandt de sidste 4 tegn.")
		
		fejl +=1
		
	if mail[-3:] !=".dk":
		
		print("\tDet er ikke en .dk mail")
		fejl +=1
				
	if fejl == 0:
		
		find_a = mail.find("@")
		
		brugernavn = mail[:find_a]
		
		domænenavn = mail[find_a+1:-3]
		
		print("\nMailen er konstrueret korrekt ")
		
		print("""
		
	Mailen er: {0}
	
	Mailen har i alt {1} tegn
	
	Brugernavnet er: {2}
	
	Domænenavnet er: {3}
	
	Det er en .dk mail
				
		""".format(mail, mail_len, brugernavn, domænenavn))
		
		break
