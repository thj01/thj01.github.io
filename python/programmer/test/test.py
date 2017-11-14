brugerliste={}

for i in range(3):
	
	brugernavn = input("\nHvad skal du bruger hedde?: ")
	password = int(input("\n\tIndtast password (kun tal): "))
	
	brugerliste["{0}".format(brugernavn)] = password
	
	
	
print("\nHer er din brugerliste: {0}".format(brugerliste))
