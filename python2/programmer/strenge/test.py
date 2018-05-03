while True:	
	
	mail = input("Indtast din mail: ")

	mail_len = len(mail)

	count_a = mail.count("@")
		
	count_a_last = mail[-4:].count("@")

	fejl = 0
		
	if mail_len<7:
		
		print("Mailen har for få tegn (mindre end 7)")
		
		fejl +=1
		
	if count_a < 1:
		
		print("Mailen mangler @")
		
		fejl +=1
		
	if count_a > 1:
		
		print("Mailen har for mange @")
		
		fejl +=1

	if count_a_last > 1:
		
		print("@ må ikke stå blandt de sidste 4 tegn.")
		
		fejl +=1
		
	if mail[-3:] !=".dk":
		
		print("Det er ikke en .dk mail")
		fejl +=1
				
	if fejl == 0:
		
		print("mailen er konstrueret korrekt ")
