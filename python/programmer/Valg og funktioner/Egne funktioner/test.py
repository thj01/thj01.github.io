##importeret for at kunne plotte funktionen.

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.widgets import TextBox

def andengrad(a,b,c):
	
	if a < 0:
		a_print = "{0}x".format(a)
	elif a > 0:
		a_print = "+{0}x".format(a)
	elif a==0:
		print("""Dette er ikke en korrekt indtastet 2. gradsfunktion.
		Fejl:  a skal være forskelligt fra 0""")
		exit() 
	else:
		a_print = ""
	
	if b < 0:
		b_print = "{0}x".format(b)
	elif b>0:
		b_print = "+{0}x".format(b)
	else:
		b_print = ""

	
	if c < 0:
		c_print = "{0}x".format(b)
	elif b > 0:
		c_print = "+{0}x".format(b)
	else:
		c_print = ""
	

	
	
	
	print("\nHer undersøges funktionen: f(x) = {0}x^2{1}{2}\n".format(a_print,b_print,c_print))
	
	D = pow(b,2)-4*a*c
	
	print("\n\tDiskriminanten er: {0}\n".format(round(D,4)))
	
	Tp_x = -b/(2*a)
	
	Tp_y = -D/(4*a)
	
	if Tp_x.is_integer():
		Tp_x = int(Tp_x)
	if Tp_y.is_integer():
		Tp_y = int(Tp_y)

	
	if D == 0:
		
		x_D_0 = -b/(2*a)
		
		if x_D_0.is_integer():
			x_D_0 = int(x_D_0)


		print("\tAndegradsliningen har en løsning og skærer x-aksen i punktet {0}".format(x_D_0))
		
		if a>0:
			print("\n\tParablens ben vender opad")
		else:
			
			print("\n\tParablems ben vender nedad")

	elif D>0:
		
		x_1 = (-b+pow(D,1/2)) / (2*a)
		
		x_2 = (-b-pow(D,1/2)) / (2*a)
		
		if x_1.is_integer():
			x_1 = int(x_1)
		
		if x_2.is_integer():
			x_2 = int(x_2)

		if x_1 > x_2:
			print("\tAndegradsligningen har 2 løsninger\n\tog skærer x-aksen i punkterne\n\tx={0} og x={1}".format(round(x_2,4),round(x_1,4)))
		else:
			print("\tAndegradsligningen har 2 løsninger\n\tog skærer x-aksen i punkterne\n\tx={0} og x={1}".format(round(x_1,4),round(x_2,4)))
		
		if a>0:
			print("\n\tParablens ben vender opad")
		else:
			print("\n\tParablems ben vender nedad")
			
	print("\n\tParablen skærer y-aksen i punktet {0}".format(c))
	
	print("\n\tToppunktet er: Tp = ( {0} , {1} )\n".format(round(Tp_x,4),round(Tp_y,4)))
	
	if a>0:
		print("\tVm = [{0};inf]".format(round(Tp_y,4)))
	else:
		print("\tVm = [inf;{0}]".format(round(Tp_y,4)))
	
	#plotfunktionen
	
	xval = np.arange(Tp_x-15,Tp_x+15, 0.01)
	plt.subplot(121)
	
	plt.plot(xval,a*xval**2+b*xval+c)
	plt.grid(True)
	plt.axvline(x=0, color="k")
	plt.axhline(y=0, color="k")
	
	plt.xlabel('Definitionsmængde')
	plt.ylabel('Værdimængde')
	plt.title('$f(x) = {0}x^2{1}{2}$\n'.format(a_print,b_print,c_print))
	plt.show()
	
	plt.subplot(122)
	kategorier = ["gruppe a", "gruppe b", "gruppe c", "gruppe d"]
	værdier = [5, 24, 17, 12]

	plt.bar(kategorier, værdier, width=0.8)
	plt.title('Søjle diagram')
	plt.show()
	

	
	
# Se her : https://matplotlib.org/gallery/widgets/textbox.html	

def indtast():
	global funktion
	funktion = input("Indtast andegradsligning på formen ax^2+bx+c ")
	#funktion = "x^2"
	funktion = funktion.replace(" ","")  #fjern alle mellemrum i indtastningen		
	funktion = funktion.replace(",",".")  #fjern alle mellemrum i indtastningen		



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
	if funktion.count("+-") > 0 or funktion.count("-+") > 0:
		print("""Dette er ikke en korrekt indtastet 2. gradsfunktion
		Fejl: Der er  +-'er eller -+'er
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
	a = float(a)


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
		c = float(rest)
	
	# finder b
	else:
		if rest[:rest.find("x")] == "-":
			b = -1
		elif rest[:rest.find("x")] == "+":
			b = 1
		else:
			b = float(rest[:rest.find("x")])
		
		c = float(rest[rest.find("x")+1:])

print("a = {0} ({1})".format(a,type(a)))
print("b = {0} ({1})".format(b,type(c)))
print("c = {0} ({1})".format(c,type(c)))

andengrad(a,b,c)	




