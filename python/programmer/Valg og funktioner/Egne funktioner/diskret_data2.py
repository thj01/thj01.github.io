import statistics as st
import numpy as np
import matplotlib.pyplot as plt

# https://docs.python.org/3/library/statistics.html

x = [2,2,4,4,4,7,7,10,10,12]

print("Observationssæt: \n----------------\n{0}".format(x))

#antal
print("\nAntal observationer: {0}".format(len(x)))

#gennemsnit
print("\nGennemsnit = {0}".format(st.mean(x)))
#median
print("\nMedian: {0}".format(st.median(x)))

#min og max værdi
print("\nMindste værdi: {0}".format(min(x)))

print("\nMaksimale værdi: {0}".format(max(x)))


try:
	st.mode(x)
	print("\nTypetal: {0}".format(st.mode(x)))
	
except:
	print("\nDer er ikke noget typetal (flere værdier med samme antal")

#Varians
print("\nVarians: {0}".format(round(st.variance(x),2)))

#Spredning
print("\nSpredning: {0}".format(round(st.stdev(x),2)))

# Finder unikke værdier
x_unik = np.unique(x)
# Finder antal for hver unik værdi
x_unik_antal = []
for i in x_unik:
	x_unik_antal.append(x.count(i))
	
#plotfunktionen
plt.xticks(x_unik, x_unik)
plt.bar(x_unik,x_unik_antal, width=0.8)
plt.title("Kontinuert data")
plt.show()

