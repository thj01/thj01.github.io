import statistics as st
import numpy as np
import matplotlib.pyplot as plt

x = [156,159,161,164,165,167, 168,171,173,173,174,176,177,177,179,179,180,181,183,183,185,187,192,194,198,201]

print("Observationssæt: \n----------------\n{0}".format(x))

#antal
print("\nAntal observationer: {0}".format(len(x)))
#gennemsnit
print("\nGennemsnit = {0}".format(round(st.mean(x),2)))
#median
print("\nMedian: {0}{1}".format(st.median(x),2))
#min og max værdi
print("\nMindste værdi: {0}".format(min(x)))
print("\nmaksimale værdi: {0}".format(max(x)))

startværdi = 150
spring = 10
x_ny = []

#ændrer datasættet til middelværdier ud fra startværdi og spring
for i in range(len(x)):
	if x[i]< startværdi+spring and x[i]>=startværdi:
		x_ny.append(startværdi+1/2*spring)
	else:
		startværdi += spring
		x_ny.append(startværdi+1/2*spring)
	
#print(x_ny)
	
try:
	st.mode(x_ny)
	print("\nTypeintervallet er: [{0} - {1}[".format(st.mode(x_ny)-spring/2,st.mode(x_ny)+spring/2))
except:
	print("\nDer er ikke noget typetal (flere værdier med samme antal")

#Varians
print("\nVarians: {0}".format(round(st.variance(x_ny),2)))
#Spredning
print("\nVarians: {0}".format(round(st.stdev(x_ny),2)))
		
# Finder unikke værdier
x_unik = np.unique(x_ny)
# Finder antal for hver unik værdi
x_unik_antal = []
for i in x_unik:
	x_unik_antal.append(x_ny.count(i))
	
#plotfunktionen
plt.bar(x_unik,x_unik_antal, width=0.8)
plt.title("Kontinuert data")
plt.show()
