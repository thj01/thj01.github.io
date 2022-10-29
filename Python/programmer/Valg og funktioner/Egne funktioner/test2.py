##importeret for at kunne plotte funktionen.

import numpy as np
import matplotlib.pyplot as plt


def andengrad(a,b,c):

	if a < 0:
		a_print = "-{0}".format(a)
	elif a > 0:
		a_print = "{0}".format(a)	
		
	if a == -1:
		a_print = "-"
	elif a == 1:
		a_print = ""

	if b < 0:
		b_print = "{0}x".format(b)
	elif b > 0:
		b_print = "+{0}x".format(b)
	else:
		b_print = ""

	if b==1:
		b_print = "+x"
	elif b == -1:
		b_print = "-x"

	if c < 0:
		c_print = "{0}".format(c)
	elif c > 0:
		c_print = "+{0}".format(c)
	else:
		c_print = ""

	print("a_print er: {0}".format(a_print))
	print("b_print er: {0}".format(b_print))
	print("c_print er: {0}".format(c_print))
	

	print("\nHer undersøges funktionen: f(x) = {0}x^2{1}{2}\n".format(a_print,b_print,c_print))
	
	D = pow(b,2)-4*a*c
	
	c_skaering = c
	
	print("\n\tDiskriminanten er: {0}\n".format(round(D,4)))
	
	tp_x, tp_y = -b/(2*a), -D/(4*a)
	
	if tp_x.is_integer():
		tp_x = int(tp_x)
	if tp_y.is_integer():
		tp_y = int(tp_y)

	
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
	
	else:
		c_skaering = "0"
			
		
		
			
	print("\n\tParablen skærer y-aksen i punktet (0,{0})".format(c_skaering))
	
	print("\n\tToppunktet er: Tp = ( {0} , {1} )\n".format(round(tp_x,4),round(tp_y,4)))
	
	if a>0:
		print("\tVm = [{0};inf]".format(round(tp_y,4)))
	else:
		print("\tVm = [inf;{0}]".format(round(tp_y,4)))
		
	print("\n\tDefinitionsmængden er sat til [{0};{1}]".format(tp_x-10,tp_x+10))
		
	dm_valg = input("\n\tVil du gerne sættet din egen definitionsmængde (j/n)?	")
	
	if dm_valg == "j":	
		
		dm = input("indtast værdimængde på formen [x_min;x_max]: ")
		#dm = "[1;  5,67 ]"
		dm = dm.replace(" ","")
		dm = dm.replace(",",".")
		print(dm)

		if dm[:1] == "[" and dm[-1:] == "]":
			dm_rest = dm[1:-1]
			if len(dm_rest)>2 and dm_rest.count(";")==1:
				dm_min = dm_rest[:dm_rest.find(";")]
				dm_max = dm_rest[dm_rest.find(";")+1:]
				try:
					float(dm_min)
					float(dm_max)
				except:
					print("Du har ikke indtastet tal i værdimængden")
					exit()
				dm_min, dm_max = float(dm_min), float(dm_max)

			print("Du har valgt intervallet [ {0};{1} ]".format(dm_min,dm_max))

		else:
			print("Du har ikke indtastet definitionsmængden korrekt.")
			
	else:
		dm_min, dm_max = tp_x-10, tp_x+10	
	
	#plotfunktionen
	
	xval = np.arange(dm_min,dm_max, 0.01)
	#xval = np.arange(tp_x-10,tp_x+10, 0.01)
	plt.plot(xval,a*xval**2+b*xval+c)
	plt.grid(True)
	# ~ plt.axhline(y=0, color="k")
	# ~ plt.axvline(x=0, color="k")
	
	if tp_x > dm_min and tp_x < dm_max:
		plt.plot(tp_x, tp_y, "ro", markersize=5)
	
	if dm_min < 0 and dm_max>0:
		plt.plot(0, c, "rx", markersize=5)
	
	
	plt.xlabel('Definitionsmængde')
	plt.ylabel('Værdimængde')
	plt.title('$f(x) = {0}x^2{1}{2}$\n'.format(a_print,b_print,c_print))
	plt.show()
	
	
# Se her : https://matplotlib.org/gallery/widgets/textbox.html	

def indtast():
	global funktion
	#funktion = input("Indtast andegradsligning på formen ax^2+bx+c: ")
	funktion = "-0.025x^2+0.4625x-1.575"
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
	if a.is_integer():
		a = int(a)
	else:
		a = float(a)

		

rest = funktion[funktion.find("x^2")+3:]
# undersøger for om b,c = 0
if rest == "" :
	b = 0
	c = 0
	andengrad(a,b,c)
else:
	#undersøger om b = 0 -> hvad c er
	if rest.count("x") == 0:
		b = 0
		c = float(rest)
		if c.is_integer():
			c = int(rest)
	# finder b
	else:
		if rest[:rest.find("x")] == "-":
			b = -1
		elif rest[:rest.find("x")] == "+":
			b = 1
		else:
			b = float(rest[:rest.find("x")])
			if b.is_integer():
				b = int(b)
		
		c = float(rest[rest.find("x")+1:])
		if c.is_integer():
			c = int(c)
		

print("a = {0} ({1})".format(a,type(a)))
print("b = {0} ({1})".format(b,type(c)))
print("c = {0} ({1})".format(c,type(c)))

andengrad(a,b,c)	




