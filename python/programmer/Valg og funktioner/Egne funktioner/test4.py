tekst = "Ordene i denne lange sætning kan man godt læse, selvom de midterste bogstaver er byttet om."

antal_ord = 0

for word in tekst.split():
	
	antal_ord +=1
		
for i in range(antal_ord):
	
	if i == antal_ord-1 :

		print(tekst)
		
	else:
		
		print(tekst[:tekst.find(" ")])
	
	tekst = tekst[tekst.find(" ")+1:]
	
