def indtast():
	funktion = input("Indtast andegradsligning på formen ax^2+bx+c ")
	global funktion
	#funktion = "x^2--x+1"
	funktion = funktion.replace(" ","")  #fjern alle mellemrum i indtastningen		
	funktion = funktion.replace(",",".")  #fjern alle mellemrum i indtastningen		
	print(funktion)


def test(funktion):
	if funktion.count("x^2")!=1:
		print("""Dette er ikke en korrekt indtastet 2. gradsfunktion.
		Fejl:  Du har mangler x^2""")
		exit()
	if funktion.count("x")>2:
		print("""Dette er ikke en korrekt indtastet 2. gradsfunktion
		Fejl: Der er for mange x'er
		Ligningen skal skrives på formen ax^2+bx+c""")
		exit()
	if funktion.count("++") > 0 or funktion.count("--") > 0:
		print("""Dette er ikke en korrekt indtastet 2. gradsfunktion
		Fejl: Der er dobbelt +'er eller -'er
		Ligningen skal skrives på formen ax^2+bx+c""")
		exit()
		
indtast()
test(funktion)

#Find første forekomst af x

a = funktion[:funktion.find("x^2")]

if a == "-":
	a = -1
elif a == "+":
	a = 1
elif a == "":
	a = 1
else:
	a = int(a)


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
	
	# finder b
	else:
		if rest[:rest.find("x")] == "-":
			b = -1
		elif rest[:rest.find("x")] == "+":
			b = 1
		else:
			b = int(rest[:rest.find("x")])
		
		c = int(rest[rest.find("x")+1:])

print("a = {0} ({1})".format(a,type(a)))
print("b = {0} ({1})".format(b,type(c)))
print("c = {0} ({1})".format(c,type(c)))



#andengrad(a,b,c)
