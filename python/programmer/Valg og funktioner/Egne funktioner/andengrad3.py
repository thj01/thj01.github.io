#funktion = input("Indtast andegradsligning på formen ax^2+bx+c ")

funktion = "-1x^2-2x+1"

#fjern alle mellemrum i indtastningen		

funktion = funktion.replace(" ","")

print(funktion)

def test(funktion):
	if funktion.count("x^2")!=1:
		print("""Dette er ikke en korrekt indtastet 2. gradsfunktion.
		Fejl:  Du har mangler x^2""")
		exit()
	if funktion.count("x")>2:
		print("""Dette er ikke en korrekt indtastet 2. gradsfunktion
		fejl: Der er for mange x'er
		Ligningen skal skrives på formen ax^2+bx+c""")
		exit()

test(funktion)

#Find første forekomst af x
a = int(funktion[:funktion.find("x^2")])
rest = funktion[funktion.find("x^2")+3:]
# undersøger for om b,c = 0
if rest == "" :
	b = 0
	c = 0
	andengrad(a,b,c)
	exit()
else:
	#undersøger om b = 0 -> hvad c er
	if rest.count("x") == 0:
		b = 0
		c = int(rest)
	#finder b
	else:
		b = int(rest[:rest.find("x")])
		
		if len(rest) == rest.find("x")+1:
			c = 0
			andengrad(a,b,c)
			exit()

		c = int(rest[rest.find("x")+1:])	

